<template>
  <div>
    <ul v-if="totalPage > 1">
      <router-link :to="{query: query(1)}">⬅</router-link>
      <li v-for="pagina in totalPage" :key="pagina">
        <router-link :to="{query: query(pagina)}">{{pagina}}</router-link>
      </li>
      <router-link :to="{query: query(totalPage)}">➡</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PaginationtheProducts",
  props: {
    productsForPage: {
      type: Number,
      default: 1
    },
    totalProduct: {
      type: Number,
      default: 1
    }
  },
  methods: {
    query(pagina) {
      return{
        ...this.$route.query,
        _page: pagina
      }
    }
  },
  computed: {
    pages(){
      const current = Number(this.$route.query._page);
      const range = 6;
      const offset = Math.cell(range / 2)
      const total = this.totalPage;
      const pagesArray = [];
      for(let i = 1; i <= total; i++){
        pagesArray.push(i)
      }
      pagesArray.splice(0, current - offset)
      pagesArray.splice(range, total)
      return pagesArray;
    },
    totalPage() {
      const total = this.totalProduct / this.productsForPage;
      return (total !== Infinity) ? Math.ceil(total) : 0;    
    }
  }
};
</script>

<style scoped>
ul{
  grid-column: 1/-1;
}
  li{
    display: inline-block;
  }
  li a{
    padding: 2px 8px;
    border-radius: 4px;
    margin: 5px;
  }
  li a.router-link-exact-active,
  li a:hover {
    background: #87f;
    color: #fff;
  }
</style>