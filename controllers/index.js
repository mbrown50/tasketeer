const router = require('express').Router();

const homeRoutes = require('./homeRoutes');

router.use('/',homeRoutes);

module.export = router;