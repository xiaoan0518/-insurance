import HOME from '../components/Home'
import LOGIN from '../pages/login'
export default [
  {
    path: '/home',
    name: 'home',
    component: HOME
  },
  {
    path: '/login/:Trends',
    name: 'login',
    component: LOGIN,
     props: route => 
     ({
       Trends: route.params.Trends
     })
  },
  {
    path: '/',
    redirect: "HOME"
  }
]