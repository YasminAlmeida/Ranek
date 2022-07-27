<template>
  <section class="create">
    <h2>Crie a sua Conta</h2>
    <transition mode="out-in">
      <button v-if="!criar" class="btn" @click="criar = true">Criar Conta</button>
      <UsuarioForm v-else>
        <button class="btn btn-form" @click.prevent="createUser">Criar ususário</button>
      </UsuarioForm>
    </transition>
  </section>
</template>

<script>
import UsuarioForm from '@/components/UserForm.vue'
export default {
  components: {UsuarioForm},
  name:"CreateLogin",
  data(){
    return {
      criar: false
    }
  },
  methods: {
   async createUser(){
    try{
      await this.$store.dispatch("createUser", this.$store.state.usuario);
      await this.$store.dispatch("getUser", this.$store.state.usuario.email);
      this.$router.push({name: "TheUser"})
    } catch(error){
      console.log(error)
    }
    }
  }
}
</script>

<style scoped>
.create{
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}
h2{
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
}
.btn{
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}
.btn-form{
  max-width: 100%;
}
</style>