import Vue from 'vue'
import App from './components/App.vue'
import imgWebpack from './assets/images/webpack.png'
import './assets/css/style.scss'

new Vue({
  el: '#root',
  render: h => h(App)
})

function createImgElement() {
  const imgElement = document.createElement('img')
  imgElement.src = imgWebpack
  return imgElement
}

window.addEventListener('load', () => {
  document.getElementsByClassName('app')[0].appendChild(createImgElement())
})
