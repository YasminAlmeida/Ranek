<template>
  <section>
    <h2>Adicionar Produtos</h2>
    <AddProduct/>
    <h2>Seus Produtos</h2>
    <transition-group  mode="out-in" v-if="user_products" name="list" tag="ul">
      <li v-for="(produto, index) in user_products" :key="index">
        <ProductItem :produto="produto"><p>{{produto.descricao}}</p></ProductItem>
        <button class="deleteBtn" @click="deleteProduct(produto.id)"></button>
      </li>
    </transition-group>
  </section>
</template>

<script>
import AddProduct from '@/components/AddProduct.vue'
import ProductItem from '@/components/ProductItem.vue'
import { api } from "@/TheServices.js"
import { mapActions, mapState } from 'vuex'

export default {
  nome:"UserProducts",
  components: {
    AddProduct,
    ProductItem
  },
  computed:{
    ...mapState(["login", "usuario", "user_products"])
  },
  methods:{
    ...mapActions(["getUserProducts"]),

    deleteProduct(id){
      const confirma = window.confirm('Deseja Deletar Esse Produto?')
      if (confirma) {
        api.delete(`/produto/${id}`)
        .then(() => {
          this.getUserProducts();
        })
        .catch((err) => {
          console.log(err.r)
        });
      }
    }
  },
  watch:{
    login(){
      this.getUserProducts()
    }
  },
  created(){
    if(this.login){
      this.getUserProducts()
    }
  }
}
</script>

<style scoped>
h2{
  margin-bottom: 20px;
}
.list-enter,
.list-leave-to{
  opacity: 0;
  transform: translate3d(20px,0, 0);
}
.list-enter-active,
.list-leave-active{
  transition: all .3s;
}
.deleteBtn{
  position: absolute;
  right: 0; 
  background: url("../../assets/remove.svg") no-repeat center center;
  width: 24px;
  height: 24px;
  text-align: -140px;
  overflow: hidden;
  cursor: pointer;
  border: none;
}
</style>