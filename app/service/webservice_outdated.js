const Service = require('egg').Service

class WebServiceOutdatedService extends Service {
  async action(params) {
    return params
  }

  async getReceiptBill() {
    return 'getReceiptBill'
  }

  async getStockBill() {
    return 'getStockBill'
  }

  async addProducts(products) {
    return products
  }
}

module.exports = WebServiceOutdatedService
