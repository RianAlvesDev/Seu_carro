<template>
  <div class="main-container">
    <h1 class="title-banner">Peças Cadastradas</h1>
    <Cadastradas />
  </div>
</template>

<script>
import Cadastradas from "../components/Cadastradas.vue";
export default {
  name: "Pecas",
  components: {
    Cadastradas,
  },
};
</script>
<style >
  #main-container{
    text-align: center;
  }
</style>


