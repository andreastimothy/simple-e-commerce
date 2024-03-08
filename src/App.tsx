import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";
import NavigationBar from "./components/NavigationBar";
import Shop from "./pages/Shop";
import Login from "./pages/Login";

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.NAVBAR} element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.SHOP} element={<Shop />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
