<template>
    <div class="card">
        <img src="https://thompsonferramentas.com.br/wp-content/uploads/2021/01/chave-de-fenda-profissional-thompson-03.jpg"
            alt="">


        <h4>
            <slot name="nome"></slot>
        </h4>

        <p class="valor">
            <slot name="valor"></slot>
        </p>

        <p>
            <slot name="observacao"></slot>
        </p>

        <div>
            <slot name="acoes"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    data() {
        return {

        }
    },
    methods: {}
}
</script>

<style >
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0. 0.3);
    max-width: 300px;
    margin: auto;
    margin-bottom: 15px;
    text-align: center;
    padding: 10px;
}

.valor {
    color: grey;
    font-size: 22px;
}

.icones-tabela {
    margin: 5px;
    cursor: pointer;
    color: var(--cor-primaria);
}
</style>