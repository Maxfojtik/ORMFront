/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

if(process.env.NODE_ENV == 'dev') {
    app.provide('api_url', 'localhost:3001');
}
else
{
    app.provide('api_url', 'otherserver:3001');
}

registerPlugins(app)

app.mount('#app')
