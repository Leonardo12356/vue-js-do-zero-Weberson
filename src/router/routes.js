// @ alias para a pasta src ou posso usar o padrão  "../"
import Login from '@/views/Login.vue';
import Dashboard from '@/views/Dashboard.vue';
import ControleDeProdutos from '@/views/ControleDeProdutos.vue';
import ControleDeClientes from '@/views/ControleDeClientes.vue';


const routes = [
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
    // { Outra forma de rota
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // }
];

export default routes;

