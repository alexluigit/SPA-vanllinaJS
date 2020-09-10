import ViewMeta from './ViewMeta.js'
export default class extends ViewMeta {
  constructor(params) {
    super(params)
    console.log("from NotFound")
  }
  async getHtml() {
    return `<h1>404</h1>`
  }
}
