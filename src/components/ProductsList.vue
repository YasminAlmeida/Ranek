<template>
  <section class="containerProduct">
    <div v-if="products && products.length > 0" class="products">
      <div class="product" v-for="(product) in products" :key="product.id">
        <router-link to="/">
          <img v-if="product.fotos" :src="product.fotos[0].src" :alt="product.fotos[0].src.titulo">
          <h2 class="titulo">{{product.nome}}</h2>
          <p class="preco">{{product.preco}}</p>         
          <p class="descricao">{{product.descricao}}</p> 
        </router-link>
      </div> 
    </div>
    <div v-else-if="products && products.length === 0">
      <p class="noResult" >Resultado não encontrado. Tente outro pruduto.</p>
    </div>
  </section>
</template>

<script>
import { api } from "@/TheServices.js";
import {serialize} from "@/helpers.js"
export default {
  data() {
    return{
      products: null,
      productsForPage: 9
    }
  },
  name: 'ProductsList',
  computed: {
    url() {
      const query = serialize(this.$route.query)
      return `/produto?_limit=${this.productsForPage} + ${query}`;
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
  .containerProduct{
    max-width: 1000px;
    margin: 0 auto;
  }
  .products{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    margin: 30px;
  }
  .product{
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
    padding: 10px;
    background: #fff;
    border-radius: 4px;
    transition: all .2s;
  }
  .product:hover{
    box-shadow: 0 8px 15px rgba(30, 60, 90, 0.2);
    transform: scale(1.1);
    position: relative;
    z-index: 1;
  }
  .product img {
    border-radius: 4px;
    margin-bottom: 20px;
  }
  .titulo {
    margin-bottom: 10px;
  }
  .preco{
    color: #e80;
    font-weight: bold;
  }
  .noResult{
    text-align: center;
  }
</style>