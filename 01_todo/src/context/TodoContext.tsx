import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";
import reducer from "./TodoReducer";

// Initial State
const initialState: State = {
  isDark: false,
  todos: [
    {
      id: 0,
      title: "Prepare dev.to article ✍",
      createdAt: new Date("2024-05-04T12:00:00-06:30"),
      isCompleted: false,
    },
    {
      id: 2,
      title: "Watch season 3 episode 2 of Attack on titans 👀",
      createdAt: new Date("2024-05-04T12:00:00-06:30"),
      isCompleted: false,
    },
  ],
};

const globalContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <globalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export const useGlobalContext: ContextHook = () => {
  const { state, dispatch } = useContext(globalContext);
  return { state, dispatch };
};
