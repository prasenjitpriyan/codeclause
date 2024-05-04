import { createContext, Dispatch, ReactNode, useReducer } from "react";
import reducer from "./TodoReducer";

// Initial State
const initialState: State = {
  isDark: false,
  todos: [
    {
      id: 0,
      title: "Prepare dev.to article ✍",
      createdAt: new Date("2021-09-28T12:00:00-06:30"),
      isCompleted: false,
    },
    {
      id: 2,
      title: "Watch season 3 episode 2 of Attack on titans 👀",
      createdAt: new Date("2021-09-30T11:00:00-06:30"),
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
