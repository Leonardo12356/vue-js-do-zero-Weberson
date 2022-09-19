import produtoService from "@/services/produto-service";
import Produto from "@/models/Produto";
import conversorDeData from "@/utils/conversor-data";
import conversorMonetario from "../utils/conversor-monetario";
import  Swal  from 'sweetalert2';

let ProdutoMixin = {

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
}

export default ProdutoMixin;