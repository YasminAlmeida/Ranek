<template>
  <section>
    <form class="adicionarProduto">
      <label for="nome">Nome</label>
      <input id="nome" name="nome" type="text" v-model="produto.nome">

      <label for="preco">Preço (R$)</label>
      <input id="preco" name="preco" type="number" v-model="produto.preco">

      <label for="foto">Foto</label>
      <input id="foto" name="foto" type="file" ref="fotos">

      <label for="descricao">Descrição</label>
      <textarea id="descricao" name="descricao" type="text" v-model="produto.descricao"></textarea>

      <input class="btn" type="button" value="Adicionar Produto" @click.prevent="AddNewProduct">
    </form>
  </section>
</template>

<script>
import { api } from "@/TheServices.js"
export default {
  nome:"AddProduct",
  data() {
    return{
      produto:{
        nome: "",
        preco:"",
        descricao: "",
        fotos: null
      }
    }
  },
  methods: {
    EditProduct(){
      this.produto.usuario_id = this.$store.state.usuario.id;
    },
    AddNewProduct() {
      this.EditProduct();
      api.post("produto", this.produto).then(() => {
        this.$store.dispatch('getUserProducts')
      });
    }
  }
}
</script>

<style scoped>
.adicionarProduto{
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  margin-bottom: 500px;
}
.btn{
  grid-column: 2;
}
</style>