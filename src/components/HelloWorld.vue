<template>
  <div class="hello">
    <h1>1111{{ msg }}</h1>
    <one></one>
    <two></two>
    <router-link to="/demo">例子</router-link>
  </div>
</template>

<script>
import one from './brother/one.vue';
import two from './brother/two.vue';
export default {
  name: 'Vuex',
  data () {
    return {
      msg: 'Vuex'
    }
  },
  components: {one,two}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
