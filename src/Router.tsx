import {
  createBrowserRouter,
} from "react-router-dom";

export const Test = () => {
  return <h1>o</h1>
}
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Test />, 
  },
]);


