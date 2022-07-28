<template>
  <section>
    <UserForm>
      <button class="btn" @click.prevent="UpdateUser">Atualizar Usuário</button>
    </UserForm>
  </section>
</template>

<script>

import UserForm from '@/components/UserForm.vue';
import { api } from '@/TheServices.js';

export default {
  name: 'UserEdit',
  components:{
    UserForm
  },
  methods: {
    UpdateUser(){
      api
      .put(`/TheUser/${this.$store.state.usuario.id}`,
       this.$store.state.usuario
       )
       .then(()=>{
        this.$store.dispatch('getUser'),
        this.$router.push({name:'TheUser'});
      })
      .catch((err) => {
          console.log(err.r)
      });
    }
  }
}
</script>

<style>

</style>