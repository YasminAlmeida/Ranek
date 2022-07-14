<template>
  <section class="containerProduct">
  <div v-for="(product) in products" :key="product.id">
    <img v-if="product.fotos" :src="product.fotos[0].src" :alt="product.fotos[0].src.titulo">
     <h2 class="titulo">{{product.nome}}</h2>
     <p class="preco">{{product.preco}}</p> 
     <p class="descricao">{{product.descricao}}</p> 
    </div>
  </section>
</template>

<script>
import { api } from "@/TheServices.js";
export default {
  data() {
    return{
      products: null,
    }
  },
  name: 'ProductsList',
  computed: {
    url() {
      let queryString = "";
      for (let key in this.$route.query) {
        queryString += `&${key}=${this.$route.query[key]}`;
        console.log(queryString)
      }
      return "/produto?_limit=10" + queryString;
    }
  },
  methods: {
    getProducts(){
      api.get(this.url)
      .then(r=>{
        this.products = r.data;
      })
    }
  },
  watch: {
    url() {
      this.getProducts();
    }
  },
  created(){
    this.getProducts();
  }
}
</script>

<style scoped>
</style>