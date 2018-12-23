<template>
  <div>
    <Header :title="$route.query.title" :canBack="canBack"/>
    <iframe sandbox="allow-same-origin allow-forms allow-scripts" v-bind:src="$route.query.link"></iframe>
  </div>
</template>

<script>
import Header from '~/components/common/Header.vue'

export default {
  components: {
    Header
  },
  data: function() {
    return {
      canBack: true
    }
  }
}
</script>

<style>
iframe {
  border: none;
  height: calc(100vh - 40px);
  margin-top: 40px;
  width: 100%;
}
</style>
