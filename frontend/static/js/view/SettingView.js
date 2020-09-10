import ViewMeta from './ViewMeta.js'
export default class extends ViewMeta {
  constructor(params) {
    super(params)
    console.log("from settings")
  }
  async getHtml() {
    return `<h1>settings</h1>`
  }
}
