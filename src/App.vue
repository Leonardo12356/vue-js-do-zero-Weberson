<template>
  <div id="app">
    <MenuComponent v-if="this.$route.name !== 'Login'" />

    <router-view />
  </div>
</template>

<script>
import MenuComponent from "@/components/menu/MenuComponent.vue";
import { useRoute } from "vue-router";

export default {
  data() {
    return { isLogin: false};
  },
  mounted() {
   this.loginPage();
     
  },
  components: {
    MenuComponent
  },
  methods: {
    loginPage() {
      this.isLogin = this.$router.currentRoute._value.path == '/login';
    },
  },

  setup() {
    const router = useRoute();
    return router;
  },
};
</script>
  

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
:root {
  --cor-primaria: #ff3d00;
  --cor-secundaria: #ff6e40;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Quicksand", sans-serif;
}

.container{
  margin-top: 15px;

}
.titulo {
  font-weight: 600;
  color: #363636;
  font-size: 25px;
  margin-top: 10px;
}

hr{
  margin: 0;
}

.sub-container{
  margin-top: 15px;
}
/* Override */
.btn-primary,
.btn-primary:active
.btn-primary:focus
.btn-primary:focus-visible
.btn-primary:visited,
.btn-primary:not(:disabled):not(.disabled):active{
color: #fff;
background-color: var(--cor-primaria);
border: var(--cor-primaria);
outline: none;
box-shadow: none;
min-width: 90px;
}
.btn-primary:hover{
  color: #fff;
  background-color: var(--cor-secundaria);
  border-color: var(--cor-secundaria);
}
</style>
