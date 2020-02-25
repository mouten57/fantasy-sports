module.exports = {
  init(app) {
    require('../routes/staticRoutes')(app);
    require('../routes/playerRoutes')(app);
  }
};
