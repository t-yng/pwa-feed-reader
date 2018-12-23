<template>
  <div>
    <Header/>
    <Content>
      <div class="search-box-wrapper">
        <div class="search-box">
          <input type="text" class="text-input" placeholder="キーワードまたはFeed URL を入力..." v-model="searchQuery">
        </div>
      </div>
      <div class="feed-list">
        <FeedListItem v-for="(feed, index) in feeds" :feed="feed" :key="index"/>
      </div>
    </Content>
  </div>
</template>

<script>
import _ from 'lodash'
import axios from 'axios'
import Header from '~/components/feed/add/Header.vue'
import Content from '~/components/common/Content.vue'
import FeedListItem from '~/components/feed/add/FeedListItem.vue'
import feedDb from '~/assets/js/feed-db'

export default {
  components: {
    Header,
    Content,
    FeedListItem
  },
  watch: {
    searchQuery: function(newQuery) {
      this.debouncedSearchFeeds()
    }
  },
  created: function() {
    this.debouncedSearchFeeds = _.debounce(this.searchFeeds, 500)
  },
  methods: {
    searchFeeds: async function() {
      if(this.searchQuery === '') {
        this.feeds = []
        return
      }

      const db = await feedDb.connect()
      const storedFeeds = await db.getAll()
      const storedFeedIds = storedFeeds.map((feed) => feed.id)

      const url = `https://cloud.feedly.com/v3/search/feeds/?query=${this.searchQuery}`
      const result = await axios.get(url)
      this.feeds = result.data.results
        .filter((feed) => feed.visualUrl)
        .map((feed) => {
          const feedUrl = feed.feedId.replace('feed/', '')
          return {
            id: feed.feedId,
            added: storedFeedIds.includes(feed.feedId),
            title: feed.title,
            website: feed.website,
            url: feedUrl,
            iconUrl: feed.visualUrl,
          }
        })
    }
  },
  data: function() {
    return {
      searchQuery: '',
      feeds: []
    }
  }
}
</script>

<style>
.search-box-wrapper {
  padding: 10px 20px;
}

.search-box-wrapper {
  border-bottom: 1px solid #EDEBEC;
}

.search-box-wrapper {
  display: flex;
  justify-content: center;
}

.search-box {
  width: 100%;
}

.text-input {
  background-color: #F0F0F0;
  border: 0;
  border-radius: 3px;
  font-size: 15px;
  height: 30px;
  padding: 5px 15px;
  width: 100%;
}

</style>
