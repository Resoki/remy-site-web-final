import { createApp } from 'vue';

import { App } from '@/views/App/App';
import router from './router';
import store from './store';
import Vue from 'vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
library.add(faUserSecret, faLinkedin, faGithub, faDiscord);


import './assets/scss/main.scss';

createApp(App)
  .use(store)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .mount('#app');
