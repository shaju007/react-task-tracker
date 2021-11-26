import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState, useEffect } from 'react';
import loadingImage from './img/Rolling-1.5s-48px.svg';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import app from './util/firebase';

function App() {
  const [deleteCounter, setDeleteCounter] = useState(0);
  useEffect(() => {
    //console.log(deleteCounter);
  });
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTasks = async () => {
      setLoading(true);
      const tasksFromServer = await fetchTasks();
      setLoading(false);
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  // Fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  };

  // Delete a task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    });
    setTasks(tasks.filter((task) => task.id !== id));
    setDeleteCounter(deleteCounter + 1);

    //console.log(deleteCounter);
  };

  // Fetch a single task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  // Toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, reminder: data.reminder } : task;
      })
    );
  };

  // Add task
  const addTask = async (task) => {
    // increment id by one
    const id = 1 + tasks.length + deleteCounter;
    const newTask = { ...task, id };

    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newTask),
    });

    const data = await res.json();

    const createTask = () => {
      const taskRef = app.
    };

    setTasks([...tasks, data]);
  };
  useEffect(() => {
    //console.log(tasks);
  });

  return (
    <Router>
      <div className='container'>
        <Header
          smth='ss'
          toggleAddForm={() => setShowAddTask(!showAddTask)}
          showAddTaskValue={showAddTask}
        />

        <Route
          path='/'
          exact
          render={(props) => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {loading ? (
                <div style={{ textAlign: 'center' }}>
                  <img src={loadingImage} />
                </div>
              ) : tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                'No Tasks to Show'
              )}
            </>
          )}
        />

        <Route path='/about' component={About} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
