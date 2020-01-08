module.exports = class ExpressRouterAdapter {
  static adapt (router) {
    return async (req, res) => {
      const httpResponse = await router.route(req)
      res.status(httpResponse.statusCode).json(httpResponse.body)
    }
  }
}
