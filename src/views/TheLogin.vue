<template>
  <section class="login">
    <h1>Login</h1>
    <form action="">
      <label for="email"> Email</label>
      <input type="text" id="email" name="email" v-model="login.email">
      <label for="password">Password</label>
      <input type="password" name="" id="password" v-model="login.password">
      <button class="btn" @click.prevent="logar">Submit</button>
    </form>
    <p class="lost">
      <a href="/" target="_blank">Esqueceu a senha? Clique aqui.</a>
    </p>
    <CreateLogin />
  </section>
</template>

<script>
import CreateLogin from '@/components/CreateLogin.vue'
export default {
  name:"TheLogin",
  components:{
    CreateLogin
  },
  data(){
    return{
      login:{
        email: "",
        password: ""
      }
    }
  },
  methods: {
    logar(){
      this.$store.dispatch("getUser", this.login.email)
      this.$router.push({name: "TheUser"})
    }
  }
}
</script>

<style scoped>
.login{
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}
  form{
    display: grid;
    grid-template-columns: 1fr;
  }
  .btn{
    width: 100%;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
  .lost{
    text-align: center;
    margin:  20px auto 0 auto;
  }
  .lost a:hover{
    color: #87f;
    text-decoration: underline;
  }
  h1{
    text-align: center;
    font-size: 2rem;
    margin-top: 40px;
    color: #87f;
  }
</style>