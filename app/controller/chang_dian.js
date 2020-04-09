const Controller = require("egg").Controller;
const _ = require("lodash");
class ChangDianController extends Controller {
  async get() {
    const { request, response, service } = this.ctx;
    try {
      this.ctx.validate(
        {
          method: { type: "string", required: true },
        },
        request.query
      );
      const query = request.query;
      switch (_.toLower(query.method)) {
        case "receipt":
          response.body = await service.changDian.getReceiptBill();
          break;
        case "stock":
          response.body = await service.changDian.getStockBill();
          break;
        case "stockreturn":
          response.body = await service.changDian.getStockBill();
          break;
        case "sale":
          response.body = await service.changDian.getStockBill();
          break;
        case "salereturn":
          response.body = await service.changDian.getStockBill();
          break;
        case "inventorycheck":
          response.body = await service.changDian.getStockBill();
          break;
        default:
          response.body = "Not Found";
          break;
      }
    } catch (error) {
      response.body = error;
    }
  }

  async post() {
    const { params, response, service } = this.ctx;
    try {
      this.ctx.validate({ method: { type: "string", required: true } }, params);
      switch (_.toLower(params.method)) {
        case "product":
          response.body = await service.changDian.addProducts(
            params.list
          );
          break;
        default:
          break;
      }
    } catch (error) {
      response.body = error;
    }
  }
}

module.exports = ChangDianController;
