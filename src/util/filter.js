import Vue from 'vue'
Vue.filter('transformVideoDuration', (value)=>{
    if(!value) return ''
    value = value.replace("'",":").replace('"', '')
    return value
})