<template>
  <section class="produto" v-if="produto">
    <router-link class="produto-img" :to="{name:'TheProduct', params: {id: produto.id}}">
        <img v-if="produto.fotos" :src="produto.foto[0].src" :alt="produto.foto[0].titulo">
        <p>Ver Produto</p> 
    </router-link>
    <div class="info">
      <p class="preco">{{produto.preco | numberprice}}</p>
      <h2 class="titulo">{{produto.nome}}</h2>
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name:"ProductItem",
  props: ["produto"]
}
</script>

<style scoped>
.produto{
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  grid-gap: 20px;
  margin-bottom: 40px;
  position: relative;
}
.info{
  align-self: end;
}
.produto-img{
  border-radius: 4px;
  overflow: hidden;
  height: 100px;
}
</style> 