<template>
<section>
   <div v-if="produto" class="produto">
      <ul class="fotos" v-if="produto.fotos">
        <li v-for="(foto, index) in prodeto.fotos" :key="index">
          <img :src="foto.src" alt="foto.titulo">
        </li>
      </ul>
      <div class="info">
        <h1>{{produto.nome}}</h1>
        <p class="preco">{{produto.preco | numberprice}}</p>
        <p class="descricao">{{produto.descricao}}</p>
        <button class="btn" v-if="produto.vendido === 'false'">Comprar</button>
        <button v-else class="btn" disabled>Produto Esgotado</button>
      </div>
    </div>    
    <LoadingPage v-else key="loading"/>
</section>
 
</template>

<script>
import { api } from "@/TheServices.js"
export default {
name: "TheProduct",
props: ["id"],
data(){
  return{
    produto: null
  }
},
methods: {
  getproduto(){
    api.get(`/produto/${this.id}`).then(r=>{
      this.produto = r.data
    })
  }
},
created(){
  this.getproduto();
}
}
</script>

<style scoped>
.produto{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  max-width: 900px;
  padding: 60px 20px;
  margin: 0 auto;
}
.preco{
  color: #e80;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 48px;
}
.descricao{
  font-size: 1.2rem;
}
.btn{
  margin-block: 60px;
  widows: 200px;
}
</style>