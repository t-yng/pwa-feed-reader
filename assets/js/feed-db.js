class FeedDB {
  static get DB_NAME() {
    return 'feed-db'
  }

  static get FEEDS_STORE_NAME() {
    return 'feeds'
  }

  async connect() {
    return new Promise((resolve, reject) => {
      if(this.db) {
        resolve(this)
        return
      }

      const req = indexedDB.open(FeedDB.DB_NAME)

      req.onupgradeneeded = (event) => {
        const db = event.target.result
        db.createObjectStore(FeedDB.FEEDS_STORE_NAME, { keyPath: 'id' })
      }

      req.onsuccess = (event) => {
        this.db = event.target.result
        resolve(this)
      }
    })
  }

  getTransaction(stores, readWrite = 'readwrite') {
    return this.db.transaction(stores, readWrite)
  }

  getFeedsStore() {
    return this.getTransaction([FeedDB.FEEDS_STORE_NAME]).objectStore(FeedDB.FEEDS_STORE_NAME)
  }

  add(feed) {
    const store = this.getFeedsStore().add(feed)
  }

  remove(feedId) {
    this.getFeedsStore().delete(feedId)
  }

  async getAll() {
    return new Promise((resolve, reject) => {
      let feeds = [];
      const store = this.getFeedsStore()
      store.openCursor().onsuccess = function(event) {
        var cursor = event.target.result;
        if (cursor) {
          feeds.push(cursor.value);
          cursor.continue();
        }

        resolve(feeds)
      };
    })
  }
}

export default new FeedDB()