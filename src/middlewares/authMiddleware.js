const authenticateRequest = (req, res, next) => {
    const authHeader = req.headers['authorization'];
  
    if (!authHeader || authHeader !== 'Bearer valid_token') {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    next();
  };
  
  module.exports = authenticateRequest;
  