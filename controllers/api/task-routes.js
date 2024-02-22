const router = require('express').Router();
const { User, Task, TaskStatus } = require('../../models');


// The `/api/tasks` endpoint

// GET all tasks
router.get('/', async (req, res) => {
  try {
    const taskData = await Task.findAll(
      //{include: [{ model: Task }]}
    );
    res.status(200).json(taskData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one task
router.get('/:id', async (req, res) => {
  try {
    const taskData = await Task.findByPk(req.params.id, {
     // include: [{ model: Task }]
    });
    if (!taskData) {
      res.status(404).json({ message: 'No task with this id!' });
      return;
    }
    res.status(200).json(taskData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new task
router.post('/', async (req, res) => {
  try {
    const taskData = await Task.create(req.body);
    res.status(200).json(taskData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE a task
router.put('/:id', async (req, res) => {
  try {
    const taskData = await Task.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!taskData[0]) {
      res.status(404).json({ message: 'No task with this id!' });
      return;
    }
    res.status(200).json(taskData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a task
router.delete('/:id', async (req, res) => {
  try {
    const taskData = await TaskSatus.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!taskData) {
      res.status(404).json({ message: 'No task with this id!' });
      return;
    }
    res.status(200).json(taskData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
