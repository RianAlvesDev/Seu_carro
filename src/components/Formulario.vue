<template>
<div>
    <Msg :msg="msg" v-show="msg" />
    <div> 
        <form id="form-full" @submit="createPeca">
            <div class="input-container">
                <label for="nome">Nome:</label>
                <input type="text" name="nome" id="nome" v-model="nome" placeholder="Digite seu nome" required>
            </div>
            
            <div class="input-container">
                <label for="carro">Carro:</label>
                <input
                  list="carros"
                  id="carro"
                  name="carro"
                  v-model="carro"
                  placeholder="Adicione um veículo"
                  required/>
          
                <datalist id="carros" required>
            <option
              v-for="carro in carros"
              :key="carro.id"
              :value="carro.model">
              {{ carro.model }}
            </option>
          </datalist>
            </div>
          <div class="input-container">
              <label for="valor">Placa:</label>
              <input type="text" id="placa" name="placa" v-model="placa" placeholder="Adicione uma placa" required />
        </div>
            <div class="input-container">
                <input type="submit" class="submit-btn" value="Cadastrar!">
            </div>
        </form>
    </div>
</div>
</template>

<script>
import Msg from "./Msg.vue";

export default {
  components: {
    Msg,
  },
  name: "PecaFormulario",
  data() {
    return {
      nome: null,
      carro: null,
      carros: null,
      placa: null,
      placas: null,
      msg: null,
    };
  },
  methods: {
    async getModelos() {
      const req = await fetch("http://localhost:3000/pecas_cadastradas");
      const data = await req.json();

      this.carros = data.modelos;
    },
    async createPeca(e) {
      e.preventDefault();

      const data = {
        nome: this.nome,
        carro: this.carro,
        placa: this.placa,
      };
      const dataJson = JSON.stringify(data);

      const req = await fetch("http://localhost:3000/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });

      const res = await req.json();

      this.msg = "Pronto! Sua peça foi cadastrada.";

      setTimeout(() => (this.msg = ""), 3000);

      this.nome = "";
      this.carro = "";
      this.placa = "";
    },
  },
  mounted() {
    this.getModelos();
  },
};
</script>

<style>

#form-full{
    max-width: 400px;
    margin: 0 auto;
    border: 1px solid;
    padding: 10px;
    box-shadow: 0px 9px 30px rgba(255, 149, 5, 0.3);
    background-color: #fafafa;
}

.input-container{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

label{
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;
    padding: 5px 10px;
    border-left: 4px solid #02087b;
    border-radius: 10px;
}

input, select{
    padding: 5px 10px;
    width: 300px;
}

.submit-btn{
    background-color: #535feb;
    color: #000000;
    font-weight: bold;
    border: 1px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: 0.5s;
}

.submit-btn:hover{
    background-color: rgb(60, 60, 241);
    color: #030306;
}
</style>