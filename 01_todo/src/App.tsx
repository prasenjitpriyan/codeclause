import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./containers/Todos";
import { GlobalContextProvider } from "./context/TodoContext";

function App() {
  return (
    <GlobalContextProvider>
      <AddTodo />
      <Todos />
    </GlobalContextProvider>
  );
}

export default App;
