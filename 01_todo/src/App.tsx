import "./App.css";
import Headers from "./components/Headers";
import Todo from "./components/Todo";
import TodoProvider from "./context/todoContext";

function App() {
  return (
    <TodoProvider>
      <Headers />
      <Todo />
    </TodoProvider>
  );
}

export default App;
