import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

import { Home } from "../pages/Home";

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index path="/" element={<Home />}></Route>
      </Routes>
    </HashRouter>
  );
};
