import axios from 'axios'; //Faz requisições com o servidor

export const cadastrarVeiculo = async (veiculo) => {
  try {
    const response = await axios.post('http://localhost:3000/api/veiculos', veiculo);
    return response.data.message;
  } catch (error) {
    throw new Error('Erro ao cadastrar o veículo: ' + error.message);
  }
};
