<template>
  <div class="box-login">
    <div class="logo">
      <h1>Login</h1>
    </div>
    <Input label="E-mail" placeHolder="exemplo@gmail.com"></Input>
    <Input label="Senha" placeHolder="123456" type="password"></Input>

    <ButtonComponent value="Entrar" :callback="login" />
  </div>
</template>

<script>
import Input from "@/components/input/Input.vue";
import ButtonComponent from "@/components/button/ButtonComponent.vue";

export default {
  name: "Login",
  components: {
    Input,
    ButtonComponent,
  },
  data() {
    return {};
  },
  methods: {
    login() {
      // Aqui criar uma lógica para acessar o sistema
      this.$router.push({ name: "Dashboard" });
    },
  },
};
</script>

<style scoped>
.box-login {
  width: 300px;
  margin: auto;
  border: 1px solid #ddd;
  margin-top: 70px;
  padding: 30px;
}
.logo {
  text-align: center;
  color: var(--cor-primaria);
  font-size: 22px;
}
</style>