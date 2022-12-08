
const app = Vue.createApp({
  data(){
    return {
      message : "Testing vue!"
    }
  }
}).mount('#app')

const app1 = Vue.createApp({
  data()
  {
    return {
      contains : "This is container 1"
    }
  }
}).mount('#container-1')
