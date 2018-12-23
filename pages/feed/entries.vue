<template>
  <div>
    <Header :title="$route.query.title" :canBack="canBack"/>
    <Content>
      <div class="entry-list">
        <EntryListItem v-for="(entry, index) in entries" :entry="entry" :key="index"/>
      </div>
    </Content>
  </div>
</template>

<script>
import jsonp from 'jsonp'
import Header from '~/components/common/Header.vue'
import Content from '~/components/common/Content.vue'
import EntryListItem from '~/components/feed/entries/EntryListItem.vue'

export default {
  components: {
    Header,
    Content,
    EntryListItem
  },
  created: function() {
    this.getEntries()
  },
  methods: {
    getEntries: async function() {
      const query = `select * from feed where url="${this.$route.query.feedUrl}"`
      const url = `https://query.yahooapis.com/v1/public/yql?q=${query}&format=json`
      jsonp(url, null, (err, data) => {
        const results = data.query.results
        let entries = (results.entry) ? results.entry : []
        entries = (results.item) ? results.item : entries

        this.entries = entries.map((entry) => {
          let pubDate = (entry.pubDate) ? entry.pubDate : ''
          pubDate = (entry.updated) ? entry.updated : pubDate

          const link = (entry.link.href) ? entry.link.href : entry.link

          return {
              title: entry.title,
              description: (entry.description) ? entry.description : '',
              updated: pubDate,
              link: link
          }
        })
      })
    }
  },
  data: function() {
      return {
          entries: [],
          canBack: true,
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
