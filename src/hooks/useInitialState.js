import { useState } from "react";
import * as sampleData from "../data.json";

const initialState = Array.from(sampleData);

export const useInitialState = () => {
  const [state, setState] = useState(initialState);
  return { state };
};
