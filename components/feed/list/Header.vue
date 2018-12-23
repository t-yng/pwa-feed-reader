<template>
  <Header :title="title">
    <template slot="header-end">
      <nuxt-link tag="div" to="/feed/add" class="click-area">
        <PlusIcon/>
      </nuxt-link>
    </template>
  </Header>
</template>

<script>
import Header from '~/components/common/Header.vue'
import PlusIcon from '~/components/common/icons/Plus.vue'

export default {
  data: function() {
    return {
      title: 'フィード一覧'
    }
  },
  components: {
    Header,
    PlusIcon
  },
  methods: {
    moveToAddFeed: function() {
      this.$router.push('/feed/add')
    }
  }
}
</script>