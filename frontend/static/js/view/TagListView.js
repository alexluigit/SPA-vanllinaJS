import ViewMeta from './ViewMeta.js'
export default class extends ViewMeta {
  constructor(params) {
    super(params)
    console.log("from taglist")
  }
  async getHtml() {
    return `<h1>from taglist</h1>`
  }
}

