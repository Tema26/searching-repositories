import { createRouter, createWebHistory } from "vue-router";


import CardDetails from './components/CardDetails.vue';
import SearchRepres from './components/SearchRepres.vue';


const router = createRouter({
   history: createWebHistory(),
   routes: [
      { path: '/', redirect: '/search'},
      { path: '/search', component: SearchRepres },
      { path: '/info/:id', component: CardDetails, props: true}
   ]
})

export default router;