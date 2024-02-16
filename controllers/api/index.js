const router = require('express').Router();
const userRoutes = require('./user-routes');
const taskRoutes = require('./task-routes');
const task_statusRoutes = require('./task_status-routes')

router.use('/users', userRoutes);
router.use('/tasks', taskRoutes);
router.use('/statuses', task_statusRoutes);


module.exports = router;
