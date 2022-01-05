const router = require('express').Router();

const apiRoutes = require('./api');

// add `/api` to all of the api routes
router.use('/api', apiRoutes);

// 404 Status error message
router.use((req, res) => {
    res.status(404).send('Error...');
  });

module.exports = router;