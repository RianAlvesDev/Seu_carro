<template>
    <div class="main-container">
      <h1 class="title-banner">Editar Peça</h1>
      <EditarPeca />
    </div>
  </template>
  
  <script>
  import EditarPeca from "../components/EditarPeca.vue";
  
  export default {
    name: "Edit",
    components: {
      EditarPeca
    },
  };
  </script>