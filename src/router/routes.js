import HOME from '../components/Home'
import LOGIN from '../pages/login'
import SLIDESHOWSWIPER from '../components/Home/slideshowSwiper.vue'
import CONTACTCENTER from '../components/absoluteRightFlex/contactCenter'
import ALLPRODUCTS from '../components/absoluteRightFlex/allProducts/'
export default [
  {
    path: '/home',
    name: 'home',
    component: HOME,
    children:[
      {
        path: 'slideshowswiper',
        name: 'slideshowswiper',
        component: SLIDESHOWSWIPER
      },
       {
         path: 'allproducts',
         name: 'allproducts',
         component: ALLPRODUCTS
       },
       {
         path: '/',
         redirect: "slideshowswiper"
       }
    ]
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
    path: '/contactcenter',
    name: 'contactcenter',
    component: CONTACTCENTER
  },
  {
    path: '/',
    redirect: "HOME"
  }
]