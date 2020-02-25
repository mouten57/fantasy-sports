const staticController = require('../controllers/staticController');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.get('/api/items', staticController.index);
 
};
