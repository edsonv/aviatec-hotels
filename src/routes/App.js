import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
