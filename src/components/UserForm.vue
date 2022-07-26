<template>
  <section>
    <form action="">
      <label for="nome">Nome</label>
      <input type="text" id="nome" name="nome" v-model="nome">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" v-model="email">
      <label for="password">Password</label>
      <input type="password" id="password" name="password" v-model="password">
      <label for="cep">CEP</label>
      <input type="text" id="cep" name="cep" v-model="cep" @keyup="fillCep">
      <label for="rua">Rua</label>
      <input type="text" id="rua" name="rua" v-model="rua">
      <label for="numero">Numero</label>
      <input type="text" name="numero" id="numero" v-model="numero">
      <label for="bairro">Bairro</label>
      <input type="text" name="bairro" id="bairro" v-model="bairro">
      <label for="cidade">Cidade</label>
      <input type="text" name="cidade" id="cidade" v-model="cidade">
      <label for="estado">Estado</label>
      <input type="text" name="estado" id="estado" v-model="estado">
      <div class="button">
        <slot></slot>
      </div>
    </form>
  </section>
</template>

<script>
import { mapFields } from '@/helpers.js';
import { getCep } from '@/TheServices.js'
export default {
  name:"userForm",
  computed:{
    ...mapFields({
    fields: ["nome","password", "email", "cep", "rua", "numero", "bairro", "cidade","estado"],
    base: "usuario",
    mutation: "UPDATE_USER"
    }),
  },
  methods: {
    fillCep(){
      const cep = this.cep.replace(/\D/g, "")
      if(cep.length === 8){
        getCep(cep).then(r=>{
          this.rua = r.data.logradouro;
          this.bairro = r.data.bairro;
          this.estado = r.data.uf;
          this.cidade = r.data.localidade;    
        })
      }
    }
  }
}
</script>

<style scoped>
  form{
    display: grid;
    grid-template-columns: 80px 1fr;
    align-items: center;
  }
  .button{
    grid-column: 2;
  }
</style>