<!-- TODO: /feed/add/FeedListItem.vue と重複箇所を共通化する -->
<template>
  <div class="feed-list-item" v-on:click="moveToEntries">
    <div class="feed-icon-box">
      <img :src="feed.iconUrl" alt="アイコン" class="feed-icon">
    </div>
    <div class="feed-meta">
      <div class="feed-title">{{ feed.title }}</div>
      <div class="feed-website">{{ feed.website }}</div>
    </div>
  </div>
</template>

<script>
import feedDb from '~/assets/js/feed-db.js'

export default {
  props: ['feed'],
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

.plus-icon {
    height: 16px;
    width: 2px;
}

.plus-icon::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    transform: rotate(90deg);
}

.plus-icon,
.plus-icon::before {
  background-color: #959595;
  border-radius: 2px;
}

.check-icon {
  color: #000;
  position: absolute;
  margin-left: 3px;
  margin-top: 4px;
  width: 14px;
  height: 8px;
  border-bottom: solid 1px currentColor;
  border-left: solid 1px currentColor;
  transform: rotate(-45deg);
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
