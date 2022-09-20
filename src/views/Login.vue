<template>
  <div class="box-login">
    <div class="logo">
      <h1>Login</h1>
   
    </div>
    <InputComponent label="E-mail" placeHolder="exemplo@gmail.com" v-model="usuario.email"></InputComponent>
    <InputComponent label="Senha" placeHolder="123456" type="password" v-model="usuario.senha"></InputComponent>
  
    <ButtonComponent value="Entrar" :callback="() => login()" />
  </div>
</template>

<script>
import InputComponent from "@/components/input/InputComponent.vue";
import ButtonComponent from "@/components/button/ButtonComponent.vue";
import Usuario from '@/models/Usuario';
import usuarioService from '@/services/usuario-service'
import Swal  from 'sweetalert2';
import utilsStorage from '@/utils/storage'

export default {
  name: "Login",
  components: {
    InputComponent,
    ButtonComponent,
  },
  data() {
    return {
      teste: '',
     usuario: new Usuario()
    };
  },
  methods: {
    login() {

      if(!this.usuario.modeloValidoLogin()){
        Swal.fire({
                icon: "warning",
                title: "Email e senha são obrigatórios.",
                confirmButtonColor: "#FF3D00",
            })
        return;
      }

      usuarioService
      .login(this.usuario.email, this.usuario.senha)
      .then(response => {
        this.usuario = new Usuario(response.data.usuario)
   
        utilsStorage.salvarUsuarioNaStorage(this.usuario)
        utilsStorage.salvarTokenNaStorage(response.data.token)

        this.$router.push({ name: "ControleDeProdutos" });
      })
      .catch(error => {
        console.log(error);
      })
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