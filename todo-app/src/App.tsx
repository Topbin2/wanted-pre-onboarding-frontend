import { Route, Routes } from "react-router-dom";

import { Login, Signup, Todo } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  );
};

export default App;
