import { useRoutes } from "react-router-dom";
import { router } from "./router";
import  Header  from "./components/Header";
import ProductProvider from "./contexts/productContext";
function App() {
  const routes = useRoutes(router);

  return (
    <div className="App">
      <ProductProvider>
      <Header />
      {routes}
      </ProductProvider>
    </div>
  );
}

export default App;
