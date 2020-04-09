'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app
  router.get('/', controller.home.index)
  router.get('/BRService.asmx/Action', controller.webserviceOutdated.index)
  router.get('/api/v1/changdian', controller.changDian.get)
  router.post('/api/v1/changdian', controller.changDian.post)
}
