<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/todo">To-Do List</a>
      </li>
    </ul>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/auth/logout">Log Out</a>
      </li>
  </ul>
  </div>
</nav>

router.post('/add', async (req, res) => {
    // if there's no tasks in the session, create one
    if (!req.session.tasks) {
      req.session.tasks = [];
    }
  
    // add new task
    const newTask = req.body.taskName;
    req.session.tasks.push(newTask);
  
    res.redirect('/todo');
  });

  router.post('/done/:index', async (req, res) => {
    // get the index of the task to be deleted
    const index = req.params.index
  
    // only delete if there's that task
    if (req.session.tasks && index < req.session.tasks.length) {
      req.session.tasks.splice(index, 1);
    }
  
    res.redirect('/todo');
  });
  