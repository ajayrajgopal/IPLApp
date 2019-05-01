import Vue from 'vue'
import './plugins/vuetify'
import firebase from 'firebase'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

Vue.config.productionTip = false
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCtw_Fu-2TLW-HHrnYAtnCw6RN7KHcXe4c",
    authDomain: "ipldata-784b2.firebaseapp.com",
    databaseURL: "https://ipldata-784b2.firebaseio.com",
    projectId: "ipldata-784b2"
  };
  
export const firebaseApp = firebase.initializeApp(config)

export const playersRef = firebaseApp.database().ref().child('PlayerList')

new Vue({
  router,
  render: h => h(App),  
}).$mount('#app')
