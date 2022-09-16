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
import produtoService from "@/services/produto-service";
import Produto from "@/models/Produto";
import conversorDeData from "@/utils/conversor-data";
import conversorMonetario from "../utils/conversor-monetario";
import Swal from "sweetalert2";

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

  methods: {
    conversorData(data) {
      return conversorDeData.aplicarMascaraEmDataIso(data);
    },

    conversor(valor) {
      return conversorMonetario.aplicarMascaraParaRealComPreFixo(valor);
    },

    adicionarProduto() {
      this.$router.push({ name: "NovoProduto" });
    },

    editarProduto(item) {
      this.$router.push({ name: "EditarProduto", params: { id: item.id } });
    },

    excluirProduto(produto) {
      Swal.fire({
        icon: "question",
        title: "Deseja excluir o produto?",
        text: `Código: ${produto.id} - Nome: ${produto.nome}`,
        showCancelButton: true,
        confirmButtonColor: "#FF3D00",
        confirmButtonText: "Sim",
        cancelButtonText: "Não",
      }).then((result) => {
        if (result.isConfirmed) {
          produtoService
            .deletar(produto.id)
            .then(() => {
              let indice = this.produtos.findIndex((p) => p.id == produto.id);
              this.produtos.splice(indice, 1);

              Swal.fire({
                icon: "success",
                title: "Produto deletado com sucesso",
                confirmButtonColor: "#FF3D00",
              });
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
    },

    ordenarProdutos(a, b) {
      //  A < B = -1
      // A > B = 1
      // A == B = 0

      return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
    },

    obterTodosOsProdutos() {
      produtoService
        .obterTodos()
        .then((response) => {
          let produtos = response.data.map((p) => new Produto(p));

          this.produtos = produtos.sort(this.ordenarProdutos); //.reverse()
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.obterTodosOsProdutos();
  },
};
</script>

<!--CSS não fica preso à um componente somente com a palavra 'SCOPED'-->

<style scoped>
.icones-tabela {
  margin: 5px;
  cursor: pointer;
  color: var(--cor-primaria);
}
</style>
