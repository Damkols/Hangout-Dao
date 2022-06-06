import "./styles/GlobalStyles.scss";
import Loadable from "react-loadable";
import Home from "./components/Home/Home";

function LoadingComponent() {
  return <div />;
}

const HomeLazy = Loadable({
  loader: () => import("./components/Home/Home"),
  loading: LoadingComponent,
});

const App = () => {
  return (
    <>
      <div className="layout">
        <Home />
      </div>
    </>
  );
};

export default App;
