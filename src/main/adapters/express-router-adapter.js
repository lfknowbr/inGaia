module.exports = class ExpressRouterAdapter {
  static adapt (router) {
    return async (req, res) => {
      const httpResquest = {
        body: req.body
      }
      const httpResponse = await router.route(httpResquest)
      res.status(httpResponse.statusCode).json(httpResponse.body)
    }
  }
}
