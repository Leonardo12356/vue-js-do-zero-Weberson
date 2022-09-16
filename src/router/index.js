import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue';
import Dashboard from '@/views/Dashboard.vue';
import ControleDeProdutos from '@/views/ControleDeProdutos.vue';
import ControleDeClientes from '@/views/ControleDeClientes.vue';
import Produto from '@/views/Produto.vue';

const rotas = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    title: 'Login',
    meta: {                   //Ver se a rota precisa de autenticação ou não
      requiredAuth: false
    }
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    title: 'Dashboard',
    meta: { requiredAuth: true }
  },
  {
    path: '/controle-de-produtos', // kebab case nome de rota escrito tudo minusculo separado por "-"
    name: 'ControleDeProdutos',
    component: ControleDeProdutos,
    title: 'Produtos',
    meta: { requiredAuth: true }
  },
  {
    path: '/controle-de-clientes',
    name: 'ControleDeClientes',
    component: ControleDeClientes,
    title: 'Clientes',
    meta: { requiredAuth: true }
  },
  {
    path: '/controle-de-produtos/novo', // kebab case nome de rota escrito tudo minusculo separado por "-"
    name: 'NovoProduto',
    component: Produto,
    title: 'Adicionar produto',
    meta: { requiredAuth: true }
  },
  {
    path: '/controle-de-produtos/editar/:id', 
    name: 'EditarProduto',
    component: Produto,
    title: 'Editar produto',
    props: true,
    meta: { requiredAuth: true }
  },
];

const roteador = createRouter({
  history: createWebHistory(),
  routes: rotas
})

export default roteador
