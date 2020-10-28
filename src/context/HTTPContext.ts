import { createContext } from "react";

const request = () => {};

export const HTTPContext = createContext({
  loading: false,
  request,
});
