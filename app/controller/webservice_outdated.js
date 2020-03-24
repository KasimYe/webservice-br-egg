const Controller = require("egg").Controller;

class WebServiceOutdatedController extends Controller {
  async index() {
    const { request, response, service } = this.ctx;
    try {
      this.ctx.validate(
        {
          n: { type: "string", required: true },
          m: { type: "string", required: true },
          j: { type: "int", required: false },
          z: { type: "int", required: false },
          p: { type: "string", required: true },
          id: {
            type: "string",
            required: false,
            allowEmpty: true
          }
        },
        request.query
      );
      const query = request.query;
      response.body = await service.webserviceOutdated.action(query);
    } catch (error) {
      response.body = error;
    }
  }
}

module.exports = WebServiceOutdatedController;
