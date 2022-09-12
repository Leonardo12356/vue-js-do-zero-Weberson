<template>
  <div> <!--Dentro de uma template só pode ter um filho com tudo dentro dela, ex: div que foi minha tag principal-->
    <h1>{{ mensagem }}</h1> <!--posso chamar qualquer coisa dentro do data INTERPOLAÇÃO -->
  </div>
</template>

<script>
export default {
  name: 'ControleDeProdutos',
  data(){
    return{
      mensagem: 'Produtos' // posso usar em qualquer lugar é como se fosse uma variável 
    }
  }
}
</script>

<!--CSS não fica preso à um componente somente com a palavra 'SCOPED'-->

<style scoped> 
h1 {
  color: red;
}

</style>
