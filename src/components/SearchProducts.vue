<template>
  <form>
    <input nome="search" id="search" v-model="search" type="text" placeholder="Buscar...">
    <input nome="submit" id="lupa" @click.prevent="searchProducts" value="Buscar" type="submit">
  </form>
</template>

<script>
export default {
  name: 'SearchProducts',
  data(){
    return{
      search:""
    }
  },
  methods: {
    searchProducts(){
    this.$router.push({query: {q: this.search}});
    }
  },
    watch: {
    searchProducts(){
      this.totalPage()
    }
  } 
}
</script>

<style scoped>
form{
  max-width: 600px;
  margin: 30px auto 60px auto;
  position: relative;
}
#search{
  padding: 20px;
  width: 100%;
  border: none;
}
#search:focus,
#search:hover{
  transform: scale(1.02);
}
#lupa{
  width: 62px;
  height: 62px;
  background: url("../assets/search.svg") no-repeat center center;
  text-indent: -150px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  box-shadow: none;
}
</style>
