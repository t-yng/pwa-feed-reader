<template>
  <Header :title="title" :canBack="canBack"/>
</template>

<script>
import Header from '~/components/common/Header.vue'

export default {
  data: function() {
    return {
      title: '記事一覧',
      canBack: true
    }
  },
  components: {
    Header
  }
}
</script>
