import ViewMeta from './ViewMeta.js'
export default class extends ViewMeta {
  constructor(params) {
    super(params) 
    console.log("from tag")
  }
  async getHtml() {
    return `<h1>from tag</h1>`
  }
}

