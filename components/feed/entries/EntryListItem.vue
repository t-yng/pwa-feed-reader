<template>
  <div class="entry-list-item" v-on:click="showEntryPage">
    <div class="entry-meta">
      <div class="entry-title">{{ entry.title }}</div>
      <div v-if="entry.description" class="entry-description">{{ entry.description }}</div>
      <div class="entry-updated">{{ formatDate(new Date(entry.updated)) }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['entry'],
  methods: {
    formatDate: function(date) {
      const year     = date.getFullYear()
      const month    = date.getMonth()
      const day      = date.getDay()
      const hours    = date.getHours()
      const minutes  = date.getMinutes()
      const seconds  = date.getSeconds()
      return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`
    },
    showEntryPage: function() {
      this.$router.push({
        path: '/entry/page',
        query: {
          title: this.entry.title,
          link: this.entry.link
        }
      })
    }
  }
}
</script>

<style>
.entry-list-item {
  border-bottom: 1px solid #EDEBEC;
  padding: 10px 20px;
}

.entry-title {
    font-weight: bold;
}

.entry-updated {
    color: #9A9A9A;
    margin-top: 7px;
    font-size: 0.8rem;
}
</style>
