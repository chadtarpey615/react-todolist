import Button from "./components/button/button"
import Header from "./components/header/header"
import AddTask from "./components/add-task/addTask"
import Task from "./components/task/Task"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AddTask />
      <Button />
      <Task />
    </div>
  );
}

export default App;
