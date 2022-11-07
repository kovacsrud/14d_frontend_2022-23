import Header from "./components/Header";
import {IpProvider} from "./context/IpContext";
import Info from "./components/Info";
import Mapbox from "./components/Mapbox";

function App() {
  return (
    <div className="container">
      <IpProvider>
      <Header headerText={"Ip információk"} />
      <Info />
      <Mapbox />
      </IpProvider>
    </div>
  );
}

export default App;
