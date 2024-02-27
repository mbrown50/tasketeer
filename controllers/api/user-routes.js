const router = require('express').Router();
const { User, Task, TaskStatus } = require('../../models');

// The `/api/users` endpoint

// GET all users
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll(
      //   {  include: [{ model: User }]}
    );
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one user
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      // include: [{ model: Product }]
    });
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    /* req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(userData);

    }); */
   } catch (err) {
      res.status(400).json(err);
    }
  });

// UPDATE a user
router.put('/:id', async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!userData[0]) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a user
router.delete('/:id', async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {

  try {

    console.log("login");
    const userData = await User.findOne({
      where: {
        login: req.body.login,
      },
    });
console.log(userData);
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    if(req.body.pw != userData.pw) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    } 

   req.session.save(() => {
    console.log("session save start");
     req.session.loggedIn = true;

      res
        .status(200)
        .json(userData.id);

        console.log("logged in");
      
    });  

    return userData.id;

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
      console.log("logged out")

    });
  } else {
    res.status(404).end();
  }

});



module.exports = router;
