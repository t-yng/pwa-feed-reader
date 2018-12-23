<template>
  <div class="feed-list-item" v-on:click="moveToEntries">
    <div class="feed-icon-box">
      <img :src="feed.iconUrl" alt="アイコン" class="feed-icon">
    </div>
    <div class="feed-meta">
      <div class="feed-title">{{ feed.title }}</div>
      <div class="feed-website">{{ feed.website }}</div>
    </div>
    <div class="feed-operation">
      <div v-if="!feed.added" class="click-area" v-on:click.stop="addFeed">
        <PlusIcon/>
      </div>
      <div v-if="feed.added" class="click-area" v-on:click.stop="removeFeed">
        <CheckIcon/>
      </div>
    </div>
  </div>
</template>

<script>
import PlusIcon from '~/components/common/icons/Plus.vue'
import CheckIcon from '~/components/common/icons/Check.vue'
import feedDb from '~/assets/js/feed-db.js'

export default {
  props: ['feed'],
  components: {
    PlusIcon,
    CheckIcon
  },
  methods: {
    moveToEntries: function() {
      this.$router.push({
        path: '/feed/entries',
        query: {
          title: this.feed.title,
          feedUrl: this.feed.url
        }
      })
    },

    addFeed: async function(event) {
      const db = await feedDb.connect()
      db.add(this.feed)
      this.feed.added = true
    },

    removeFeed: async function(event) {
      const db = await feedDb.connect()
      db.remove(this.feed.id)
      this.feed.added = false
    }
  }
}
</script>

<style>
.feed-list-item {
  border-bottom: 1px solid #EDEBEC;
  display: grid;
  grid-template-columns: 32px 1fr 30px;
  column-gap: 15px;
  padding: 10px 20px;
}

.feed-icon-box {
  align-items: center;
  display: flex;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
}

.feed-icon {
  border-radius: 5px;
  width: 32px;
}

.feed-meta {
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  line-height: 18px;
  overflow: hidden;
}

.feed-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.feed-website {
  font-size: 12px;
  color: #8C8C8C;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.feed-operation {
  align-items: center;
  cursor: pointer;
  display: flex;
  grid-row: 1 / 2;
  grid-column: 3 / 4;
  justify-content: center;
}

.feed-operation-click-area {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
}
</style>
