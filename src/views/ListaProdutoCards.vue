<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h1 class="titulo">Cards de produtos</h1>
                <hr/>
            </div>
        </div>
        
        <div class="row mt-3">
            <CardComponentVue>
                <template v-slot:nome>
                   Produto B
                </template>

                <template v-slot:valor>
                 R$ 250,00
                </template>

                <template v-slot:observacao>
                   Produto top de linha
                </template>

                <template v-slot:acoes>
                    <i
                  @click="editarProduto(item)"
                  class="fas fa-pencil-alt icones-tabela"
                ></i>
                <i
                  @click="excluirProduto(item)"
                  class="fas fa-trash-alt icones-tabela"
                ></i>
                </template>
            </CardComponentVue>
        </div>
    </div>
</template>

<script>
import CardComponentVue from '@/components/card/CardComponent.vue';

export default {
    name:"ListaProdutoCards",
    components: {
        CardComponentVue
    },
    data(){
        return{

        }
    },
    methods: {

    }
}
</script>