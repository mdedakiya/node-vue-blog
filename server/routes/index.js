const userController = require('../controllers/user');
const blogController = require('../controllers/post');

const authChecker = require('../utils/auth');

module.exports = (app) => {
  
	//users
  app.post('/api/register', userController.create);
  app.post('/api/login', userController.login);
  app.get('/api/user', userController.list);
  
	app.post('/api/blog', authChecker.checkToken, blogController.create);
	app.get('/api/blog', blogController.list);
	app.get('/api/blog/:id', blogController.index);
	
	app.post('/api/blog/:id/comment', authChecker.checkToken, blogController.createComment);
	app.get('/api/blog/:id/comment', blogController.comment);
};