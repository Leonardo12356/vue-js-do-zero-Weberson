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
        <ButtonComponent
          :callback="adicionarProduto"
          value="Adicionar"
        ></ButtonComponent>
      </div>
      <div class="col-sm-10">
        <a @click="verProdutosEmCards" href="" class="float-right ver-em-cards"> Ver em cards</a>
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
              <td>{{ conversor(item.valor) }}</td>
              <td>{{ conversorData(item.dataCadastro) }}</td>

              <td>
                <i
                  @click="editarProduto(item)"
                  class="fas fa-pencil-alt icones-tabela"
                ></i>
                <i
                  @click="excluirProduto(item)"
                  class="fas fa-trash-alt icones-tabela"
                ></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/button/ButtonComponent.vue";
import ProdutoMixin from "@/mixins/produto-mixin";



export default {
  name: "ControleDeProdutos",
  mixins: [ProdutoMixin],
  components: {
    ButtonComponent,
  },
  data() {
    return {
      
    };
  },

  methods: {
    verProdutosEmCards() {
        this.$router.push({ name: "ListaProdutoCards" });
    },


    adicionarProduto() {
      this.$router.push({ name: "NovoProduto" });
    },

  }


};
</script>

<!--CSS não fica preso à um componente somente com a palavra 'SCOPED'-->

<style scoped>
.icones-tabela,
.ver-em-cards {
  margin: 5px;
  cursor: pointer;
  color: var(--cor-primaria);
}

.ver-em-cards{
  margin-top: 25px;
}
</style>
