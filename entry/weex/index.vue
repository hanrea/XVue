<template>
  <div class="wrapper">
    <text class="greeting">The 测试 is ready!</text>
    <div class="title"  @click="jumpto('/login?hh')"> 登录  页</div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {}
  },
  methods: {
    jumpto: function (_key) {
      this.$router.push(_key)
    }
  }
}
</script>

<style scoped>
.wrapper {
  align-items: center;
}

.greeting {
  text-align: center;
  margin-top: 0px;
  font-size: 50px;
  color: #41b883;
}
.title {
    font-size: 40px;
}
.message {
  margin: 30px;
  font-size: 32px;
  color: #727272;
}
</style>
