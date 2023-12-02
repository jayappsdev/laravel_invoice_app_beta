import './bootstrap';

import { createApp } from 'vue';

import app from './components/app.vue';

import router from './router/index.js';

import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faCcVisa, faCcStripe, faCcMastercard, faCcPaypal } from '@fortawesome/free-brands-svg-icons'

library.add(faCcVisa, faCcMastercard, faCcStripe, faCcPaypal)

createApp(app)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount("#app")