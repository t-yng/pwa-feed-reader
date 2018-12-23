<template>
  <div>
    <Header/>
    <Content>
      <div class="feed-list">
        <FeedListItem v-for="(feed, index) in feeds" :feed="feed" :key="index"/>
      </div>
    </Content>
  </div>
</template>

<script>
import Header from '~/components/feed/list/Header.vue'
import Content from '~/components/common/Content.vue'
import FeedListItem from '~/components/feed/list/FeedListItem.vue'
import feedDb from '~/assets/js/feed-db'

export default {
  components: {
    Header,
    Content,
    FeedListItem
  },
  beforeMount: async function() {
    const db = await feedDb.connect()
    this.feeds = await db.getAll()
  },
  data: function() {
    return {
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
