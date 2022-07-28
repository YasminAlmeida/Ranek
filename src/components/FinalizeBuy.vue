<template>
  <section>
    <h2>Endereço de Envio</h2>
    <UserForm>
      <button class="btn" @click.prevent="EndBuy">Finalizar Compra</button>
    </UserForm>
  </section>
</template>

<script>
import UserForm from "@/components/UserForm.vue"
import { api } from "@/TheServices.js"
import { mapState } from 'vuex'

export default {
  name:"FinalizeBuy",
  components: {
    UserForm,
  },
  props: ['produto'],
  computed: {
    ...mapState(["usuario"]),
    buy(){
      return{
        buyer_id: this.usuario.email,
        seller_id: this.produto.usuario_id,
        product: this.produto,
        adress:{
          cep: this.usuario.cep,
          rua: this.usuario.rua,
          numero: this.usuario.numero,
          bairro: this.usuario.bairro,
          cidade: this.usuario.cidade,
          estado: this.usuario.estado,
        } 
      }
    }
  },
  methods:{
    createTransaction(){
      return api.post('/transaction', this.buy).then(()=>{
      this.$router.push({name:'UserBuy'})
      })
    },
    async createUser(){
    try{ 
      await this.$store.dispatch("createUser", this.$store.state.usuario);
      await this.$store.dispatch(
        "getUser",
         this.$store.state.usuario.email
        );
      await this.createTransaction();
    } catch(error){
      console.log(error)
    }
    },
    EndBuy(){
      if(this.$store.state.login){
        this.createTransaction();
      } else{
        this.createUser()
      }
    }
  }
  
}
</script>

<style scoped>
h2{
  margin-top: 40px;
  margin-bottom: 20px;
}
.btn{
  background: #e80;
}
</style>