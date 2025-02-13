import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../Utils/appStore";
import Header from "./Header";

function App() {
  return (
    <Provider store={appStore}>
      {/* Header should be common for all pages.So creating Outlet and provide children elemnts in Main.jsx */}
      <Header className="styleApp" />
      <Outlet className="styleApp" />
    </Provider>
  );
}

export default App;
