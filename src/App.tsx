import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";
import NavigationBar from "./components/NavigationBar";

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.NAVBAR} element={<NavigationBar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
