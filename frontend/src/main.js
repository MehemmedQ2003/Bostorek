import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/style.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'


library.add(faArrowLeft, faThumbsUp, faEnvelope, faLock, faUser)
const app = createApp(App)
app.use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
