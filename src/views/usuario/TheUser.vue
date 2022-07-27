<template>
  <section class="user">
    <nav>
      <ul class="sidenav">
        <li>
          <router-link :to="{name: 'TheUser'}">Produtos</router-link>
        </li>
        <li>
          <router-link :to="{name: 'UserBuy'}">Compras</router-link>
        </li>
        <li><router-link :to="{name: 'UserSale'}">Vendas</router-link>
        </li>
        <li>
         <router-link :to="{name: 'UserEdit'}">Editar Usuário</router-link> 
        </li>
        <li><button @click.prevent="LogOut">Deslogar</button>
        </li>         
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: "TheUser",
  methods: {
    LogOut(){
      this.$store.dispatch("LogOutUser")
      this.$router.push("/TheLogin")
    }
  }
}
</script>

<style scoped>
  .user {
    display: grid;
    grid-template-columns: minmax(140px, 200px) 1fr;
    max-width: 900px;
    margin: 40px auto;
    grid-gap: 30px;
    padding: 20px;
  }
  @media screen and (max-width: 500px){
    .user {
      display: grid;
      grid-template-columns: 1fr;
      margin: 0 auto;
    }
  }
.sidenav a,
.sidenav button{
  padding: 10px;
  display: block;
  background: #f4f7fc;
  margin-bottom:  10px;
  border-radius: 4px;
}
.sidenav a.router-link-exact-active,
.sidenav a:hover,
.sidenav button:hover {
  background: #87f;
  color: #fff;
}
.sidenav button{
  width: 100%;
  border: none;
  font-size: 1rem;
  text-align: left;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  cursor: pointer;
}
</style>