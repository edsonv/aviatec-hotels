import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useInitialState } from "../hooks/useInitialState";

import { Home } from "../pages/Home";

export const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <HashRouter>
        <Routes>
          <Route index path="/" element={<Home />}></Route>
        </Routes>
      </HashRouter>
    </AppContext.Provider>
  );
};
