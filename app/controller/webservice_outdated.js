const Controller = require('egg').Controller
const _ = require('lodash')

class WebServiceOutdatedController extends Controller {
  async index() {
    const { request, response, service } = this.ctx
    try {
      this.ctx.validate(
        {
          n: { type: 'string', required: true },
          m: { type: 'string', required: true },
          j: { type: 'int', required: false },
          z: { type: 'int', required: false },
          p: { type: 'string', required: true },
          id: {
            type: 'string',
            required: false,
            allowEmpty: true,
          },
        },
        request.query
      )
      const query = request.query
      response.body = await service.webserviceOutdated.action(query)
    } catch (error) {
      response.body = error
    }
  }

  async cdget() {
    const { request, response, service } = this.ctx
    try {
      this.ctx.validate(
        {
          method: { type: 'string', required: true },
        },
        request.query
      )
      const query = request.query
      switch (_.toLower(query.method)) {
        case 'receipt':
          response.body = await service.webserviceOutdated.getReceiptBill()
        case 'stock':
          response.body = await service.webserviceOutdated.getStockBill()
          break
        case 'stockreturn':
          response.body = await service.webserviceOutdated.getStockBill()
          break
        case 'sale':
          response.body = await service.webserviceOutdated.getStockBill()
          break
        case 'salereturn':
          response.body = await service.webserviceOutdated.getStockBill()
          break
        case 'inventorycheck':
          response.body = await service.webserviceOutdated.getStockBill()
          break
        default:
          response.body = 'Not Found'
          break
      }
    } catch (error) {
      response.body = error
    }
  }

  async cdpost() {
    const { params, response, service } = this.ctx
    try {
      this.ctx.validate({ method: { type: 'string', required: true } }, params)
      switch (_.toLower(params.method)) {
        case 'product':
          response.body = await service.webserviceOutdated.addProducts(
            params.list
          )
          break
        default:
          break
      }
    } catch (error) {
      response.body = error
    }
  }
}

module.exports = WebServiceOutdatedController
