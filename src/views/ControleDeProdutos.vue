<template>
  <div class="container">
    <!--Dentro de uma template só pode ter um filho com tudo dentro dela, ex: div que foi minha tag principal-->

    <div class="row">
      <div class="col-sm-12">
        <h2 class="titulo">Produtos</h2>
        <hr />
      </div>
    </div>


    <div class="row sub-container">
      <div class="col-sm-2">
        <ButtonComponent :callback="adicionarProduto" value="Adicionar"></ButtonComponent>
      </div>
    </div>

      <div class="row">
         <div class="col-sm-12">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Nome</th>
                  <th>Quantidade</th>
                  <th>Valor</th>
                  <th>Data de cadastro</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in produtos" :key="item.id">
                  <td>{{ item.id }}</td>
                  <td>{{ item.nome }}</td>
                  <td>{{ item.quantidadeEstoque }}</td>
                  <td>{{conversor(item.valor)}}</td>
                  <td>{{conversorData(item.dataCadastro)}}</td>
             
                  <td>
                    <i @click="editarProduto" class="fas fa-pencil-alt icones-tabela"></i>
                    <i @click="excluirProduto" class="fas fa-trash-alt icones-tabela"></i>
                  </td>

                </tr>
              </tbody>
            </table>
         </div>
      </div>

  </div>
</template>

<script>
import ButtonComponent from '@/components/button/ButtonComponent.vue';
import produtoService from '@/services/produto-service';
import Produto from '@/models/Produto';
import conversorDeData from '@/utils/conversor-data';
import conversorMonetario from '../utils/conversor-monetario';

export default {
  name: "ControleDeProdutos",
  components: {
    ButtonComponent,
  },
  data() {
    return {
        produtos: [],
        
    };
  },
  
  methods:{
    conversor(valor){
    return conversorMonetario.aplicarMascaraParRealComPreFixo(valor)
   },
    
    conversorData(data){
      return conversorDeData.aplicarMascaraEmDataIso(data);
    },

    adicionarProduto(){
      this.$router.push({ name:"NovoProduto" })
    },

    editarProduto(){
      alert("Aqui vou editar produto")
    },

    excluirProduto(){
      alert("Aqui vou excluir produto")
    },

    obeterTodosOsProdutos(){

     produtoService.obterTodos()
     .then(response => {
      this.produtos = response.data.map(p => new Produto(p));
     })
     .catch(error => {
      console.log(error)
     })
    }
  },
  mounted(){
    this.obeterTodosOsProdutos();
  }
};
</script>

<!--CSS não fica preso à um componente somente com a palavra 'SCOPED'-->

<style scoped>
.icones-tabela{
  margin: 5px;
  cursor: pointer;
  color: var(--cor-primaria);

}
</style>
