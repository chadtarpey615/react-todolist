import Header from "./components/header/header"
import AddTask from "./components/add-task/AddTask"
import Task from "./components/task/Task"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AddTask />
      <Task />
    </div>
  );
}

export default App;
