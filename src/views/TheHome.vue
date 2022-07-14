<template>
  <section>
    <h1>👍🏽 Compra ou Venda 👎🏽</h1>
    <products-list />
    <search-products />
  </section>
</template>

<script>
import ProductsList from "@/components/ProductsList.vue"
import SearchProducts from "@/components/SearchProducts.vue"
export default {
  name: "TheHome",
  components: {
    ProductsList,
    SearchProducts
  }
}
</script>

<style scoped>
h1 {
  color: #87f;
  margin-top: 40px;
  font-size: 2rem;
  text-align: center;
}
</style>