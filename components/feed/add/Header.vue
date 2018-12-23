<template>
  <Header :title="title" :canBack="canBack"/>
</template>

<script>
import Header from '~/components/common/Header.vue'

export default {
  data: function() {
    return {
      title: 'フィードを追加',
      canBack: true,
    }
  },
  components: {
    Header
  }
}
</script>
