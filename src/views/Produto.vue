<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="titulo">
          {{ modoCadastro ? "Adicionar" : "Editar" }} produto
        </h1>
        <hr />
      </div>
    </div>

    <div class="row">
      <div class="col-sm-2">
        <div class="form-group">
          <label for="id">Código</label>
          <input
            id="id"
            v-model="produto.id"
            type="text"
            disabled
            class="form-control"
          />
        </div>
      </div>

      <div class="col-sm-10">
        <div class="form-group">
          <label for="nome">Nome</label>
          <input
            id="nome"
            v-model="produto.nome"
            type="text"
            class="form-control"
          />
        </div>
      </div>

      <div class="col-sm-3">
        <div class="form-group">
          <label for="quantidade">Quantidade</label>
          <input
            id="quantidade"
            v-model="produto.quantidadeEstoque"
            type="text"
            class="form-control"
          />
        </div>
      </div>

      <div class="col-sm-3">
        <div class="form-group">
          <label for="valor">Valor</label>
          <input
            id="valor"
            v-model="produto.valor"
            type="text"
            class="form-control"
          />
        </div>
      </div>

      <div class="col-sm-3">
        <div class="form-group">
          <label for="data-cadastro">Data cadastro</label>
          <input
            id="data-cadastro"
            v-model="produto.dataCadastro"
            type="date"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-sm-12">
        <div class="form-group">
          <label for="observacao">Observação</label>
          <textarea
            id="observacao"
            v-model="produto.observacao"
            type="date"
            class="form-control"
            rows="4"
          ></textarea>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <hr />
      </div>

      <div class="col-sm-12">
        <div v-show="modoCadastro" class="form-check-inline">
          <label class="form-check-label">
            <input
              v-model="continuarAdicionando"
              type="checkbox"
              class="form-check-input"
            />
            Continuar adicionando
          </label>
        </div>

        <button @click="cancelarAcao" class="btn btn-default float-right">
          Cancelar
        </button>
        <button @click="salvarProduto" class="btn btn-primary float-right mr-2">
          Salvar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Produto from "../models/Produto";
import produtoService from "@/services/produto-service";
import conversorData from "@/utils/conversor-data";
import Swal from "sweetalert2";

export default {
  name: "Produto",
  data() {
    return {
      produto: new Produto(),
      modoCadastro: true,
      continuarAdicionando: false,
    };
  },
  props: {
    id: {
      type: Number,
    },
  },
  mounted() {
    if (!this.id) return;
    this.modoCadastro = false;
    this.obterPorId(this.id);
  },

  methods: {
    cancelarAcao() {
      this.produto = new Produto();
      this.$router.push({ name: "ControleDeProdutos" });
    },

    obterPorId(id) {
      produtoService
        .obterPorId(id)
        .then((response) => {
          console.log(response.data);
          this.produto = new Produto(response.data);
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Não foi possível obter o produto pelo id " + id,
            confirmButtonColor: "#FF3D00",
          });
        });
    },

    cadastrarProduto() {
      if (!this.produto.modeloValidoParaCadastro()) {
        Swal.fire({
            icon: "warning",
            title: "O nome do produto é obrigatório para o cadastro.",
            confirmButtonColor: "#FF3D00",
          });
        return;
      }

      this.produto.dataCadastro =
        conversorData.aplicarMascaraISOEmFormatoAmericano(
          this.produto.dataCadastro
        );

      produtoService
        .cadastrar(this.produto)
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Produto cadastrado com sucesso",
            confirmButtonColor: "#FF3D00",
          });
          this.produto = new Produto();

          if (!this.continuarAdicionando) {
            this.$router.push({ name: "ControleDeProdutos" });
          }
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Não foi possível cadastrar o produto.",
            confirmButtonColor: "#FF3D00",
          });
        });
    },

    atualizarProduto() {
      if (!this.produto.modeloValidoParaAtualizar()) {
        Swal.fire({
            icon: "warning",
            title: "O código e nome do produto são obrigatórios para o cadastro.",
            confirmButtonColor: "#FF3D00",
          });
        return;
      }

      this.produto.dataCadastro =
        conversorData.aplicarMascaraISOEmFormatoAmericano(
          this.produto.dataCadastro
        );

      produtoService
        .atualizar(this.produto)
        .then(() => {
          this.$router.push({ name: "ControleDeProdutos" });
          Swal.fire({
            icon: "success",
            title: "Produto atualizado com sucesso!",
            confirmButtonColor: "#FF3D00",
          });
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Não foi possível atualizar o produto.",
            confirmButtonColor: "#FF3D00",
          });
        });
    },

    salvarProduto() {
      this.modoCadastro ? this.cadastrarProduto() : this.atualizarProduto();
    },
  },
};
</script>

<style scoped>
textarea {
  resize: none;
}
</style>