import { createRouter, createWebHistory } from 'vue-router'
import Accueil from './views/Accueil.vue'
import Contact from './views/Contact.vue'
import Pyramide from './views/Pyramide.vue'
import HDP from './views/HDP.vue'
import Temoignages from './views/Temoignages.vue'
import Localisation_HDP from './views/Localisation_HDP.vue'
import Localisation_P from './views/Localisation_P.vue'
import test from './views/captcha.vue'
const routes = [
  { path: '/', component: Accueil },
  { path: '/contact', component: Contact },
  { path: '/pyramide', component: Pyramide},
  { path: '/HotelDeParis', component: HDP},
  { path: '/temoignages', component: Temoignages},
  { path: '/localisation-HDP', component: Localisation_HDP},
  { path: '/localisation-P', component: Localisation_P},
  {path : '/test', component: test}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router