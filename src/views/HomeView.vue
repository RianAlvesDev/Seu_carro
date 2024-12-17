<template>
  <Banner />
  <div class="main-container">
    <h1>Cadastre seu veículo:</h1>
  <Formulario />
  </div>
</template>

<script>
  import Banner from "../components/Banner.vue";
  import Formulario from "../components/Formulario.vue";

  export default {
    name: "Home",
    components: {
      Banner,
      Formulario,
    }
  }
</script>

<style >
   .main-container {
    margin: 40px;
    min-height: 399px;    
  };
</style>