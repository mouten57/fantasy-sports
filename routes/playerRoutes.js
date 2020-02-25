const playerController = require('../controllers/playerController');


module.exports = app => {
  app.get('/api/ros', playerController.index);
 
};
