<template>
  <div id="app">
    

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
  console.log(this.isLogin)    
  },
  components: {
    MenuComponent: MenuComponent,
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
</style>
