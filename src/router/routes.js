import HOME from '../components/Home'
import LOGIN from '../pages/login'
import CONTACTCENTER from '../components/absoluteRightFlex/contactCenter'
// import ALLPRODUCTS from '../components/absoluteRightFlex/allProducts/'
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
    path: '/contactCenter',
    name: 'contactCenter',
    component: CONTACTCENTER
  },
  // {
  //   path: '/allproducts',
  //   name: 'allproducts',
  //   component: ALLPRODUCTS
  // },
  {
    path: '/',
    redirect: "HOME"
  }
]