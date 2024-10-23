import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import ContextInitialiser from "./hooks/useProperties";

const App = () => {
  return (
    <BrowserRouter>
      <ContextInitialiser>
        <Routes />
      </ContextInitialiser>
    </BrowserRouter>
  );
};

export default App;
