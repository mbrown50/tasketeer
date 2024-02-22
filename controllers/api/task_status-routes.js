const router = require('express').Router();
const { User, Task, TaskStatus } = require('../../models');


// The `/api/statuses` endpoint

// GET all task statuses
router.get('/', async (req, res) => {
  try {
    const taskStatusData = await TaskStatus.findAll(
      //{include: [{ model: TaskStatus }]}
    );
    res.status(200).json(taskStatusData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one task
router.get('/:id', async (req, res) => {
  try {
    const taskStatusData = await TaskStatus.findByPk(req.params.id, {
      //include: [{ model: TaskStatus }]
    });
    if (!taskStatusData) {
      res.status(404).json({ message: 'No task status with this id!' });
      return;
    }
    res.status(200).json(taskStatusData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new task
router.post('/', async (req, res) => {
  try {
    const taskStatusData = await TaskStatus.create(req.body);
    res.status(200).json(taskStatusData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE a task
router.put('/:id', async (req, res) => {
  try {
    const taskStatusData = await TaskStatus.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!taskStatusData[0]) {
      res.status(404).json({ message: 'No task status with this id!' });
      return;
    }
    res.status(200).json(taskStatusData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a task
router.delete('/:id', async (req, res) => {
  try {
    const taskStatusData = await TaskStatus.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!taskStatusData) {
      res.status(404).json({ message: 'No task status with this id!' });
      return;
    }
    res.status(200).json(taskStatusData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;