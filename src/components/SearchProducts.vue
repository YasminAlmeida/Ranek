<template>
  <form>
    <input nome="search" id="search" v-model="search" type="text">
    {{search}}
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
    this.$router.push({query: {q: this.search }});
    }
  }
}
</script>

<style scoped>
</style>
