import React, { useCallback, useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);

  const transformTasks = useCallback((tasksObject) => {
    const loadedTasks = [];

    for (const taskKey in tasksObject) {
      loadedTasks.push({ id: taskKey, text: tasksObject[taskKey].text });
    }

    setTasks(loadedTasks);
  }, []);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp(transformTasks);

    useEffect(() => {
      fetchTasks({
        url: "https://customhooks-f2f4e-default-rtdb.firebaseio.com/tasks.json"
      });
    }, [fetchTasks]);

    const taskAddHandler = (task) => {
      setTasks((prevTasks) => prevTasks.concat(task));
    };

    return (
      <React.Fragment>
        <NewTask onAddTask={taskAddHandler} />
        <Tasks
          items={tasks}
          loading={isLoading}
          error={error}
          onFetch={fetchTasks}
        />
      </React.Fragment>
    );
  }

export default App;
