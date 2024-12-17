                          <!-- Cabeçalho do sistema -->
<template>
    <div id="nav">
      <router-link to="/" id="logo_banner"><img :src="logo" :alt="alt" id="logo" /></router-link>
      <router-link to="/">Cadastrar</router-link> |
      <router-link to="/pecas">Carros Cadastrados</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "Navbar",
    props: ["logo", "alt"],
  };
  </script>
  
  <style scoped>
  #nav { 
    background-color: rgb(59, 59, 244);
    border-bottom: 4px solid #2cccda;
    padding: 15px 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  
  }
  
  #logo {
    width: 60px;
    height: 60px;
    border-radius: 50px;
  }
  
  #nav #logo_banner {
      margin: auto;
      margin-left: 0;
  }
  
  #nav a {
      color: #FFF;
      text-decoration: none;
      margin: 12px;
      transition: .5s;
  }
  
  #nav a:hover {
      color: #000000;
  }
  </style>
  