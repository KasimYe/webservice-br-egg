const Service = require('egg').Service

class ChangDianService extends Service {
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

module.exports = ChangDianService
