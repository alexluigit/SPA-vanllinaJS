import router from './router.js'

document.addEventListener("DOMContentLoaded", init)
window.addEventListener("popstate", router.render)

function init() {
  document.body.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault()
      router.navigateTo(e.target.href)
    }
  })
  router.render()
}

