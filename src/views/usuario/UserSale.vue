<template>
  <section>    
    <div v-if="sales">
      <h2>Vendas</h2>
      <div class="productsWrapper" v-for="(sales, index) in sales" :key="index">
        <!-- <p>{{sales.product}}</p> -->
        <ProductItem :produto="sales.product" v-if="sales.product">
          <p class="buyer">
            <span>Comprador:</span>{{sales.seller_id}}
          </p>
        </ProductItem>
        <div class="delivery">
          <h3>Entrega:</h3>
          <ul v-if="sales.adress">
            <li v-for="(value, key) in sales.adress" :key="key">
              {{key}}:{{value}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import ProductItem from '@/components/ProductItem.vue'
import {api} from "@/TheServices.js";
import { mapState } from 'vuex'

export default {
  data(){
    return{
      sales:null,
    }
  },
  components: {
    ProductItem
  },
  computed:{
    ...mapState(['usuario', 'login'])
  },
  methods:{
    getSales(){
      api.get(`/transaction?seller_id=${this.usuario.id}`).then(r=>{
        this.sales = r.data
      })
    }
  },
  watch:{
    login(){
      this.getSales();
    }
  },
  created(){
    if(this.login){
      this.getSales();
    }
  }
}
</script>

<style scoped>
.productsWrapper{ 
  margin-bottom: 40px;
}
.buyer span{
  color: #e80;
}
h2{
  margin-bottom: 20px;
}
.delivery{
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  grid-gap: 20px;
  margin-bottom: 60px;
}
h3{
  margin: 0px;
  justify-self: end;
}
</style>