import main from './index'
// import Home from './home'
const Home = resolve => require.ensure([], () => resolve(require('./home')), 'home')
// import Login from '@/modules/login/index'
const Login = resolve => require.ensure([], () => resolve(require('@/modules/login/index')), 'Login')
export default [
  {
    path: '/',
    redirect: '/home',
    name: 'Home',
    component: main,
    children: [{
      path: '/home',
      name: 'HomeManage',
      component: Home
    }, {
      path: '/loginPage',
      name: 'Login',
      component: Login
    }]
  }
]
