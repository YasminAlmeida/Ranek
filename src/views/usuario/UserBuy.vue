<template>
  <section>    
    <div v-if="buy">
      <h2>Compras</h2>
      <div class="productsWrapper" v-for="(buys, index) in buy" :key="index">
        <!-- <p>{{buys.product}}</p> -->
        <ProductItem :produto="buys.product" v-if="buys.product">
          <p class="buyer">
            <span>Vendedor:</span>{{buys.buyer_id}}
          </p>
        </ProductItem>
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
      buy:null,
    }
  },
  components: {
    ProductItem
  },
  computed:{
    ...mapState(['usuario', 'login'])
  },
  methods:{
    getBuy(){
      api.get(`/transaction?buyer_id=${this.usuario.id}`).then(r=>{
        this.buy = r.data
      })
    }
  },
  watch:{
    login(){
      this.getBuy();
    }
  },
  created(){
    if(this.login){
      this.getBuy();
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
</style>