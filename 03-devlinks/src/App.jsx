import Perfil from "./components/perfil/perfil";
import Switch from "./components/switch/Switch";
import Links from "./components/links/links";

import "./App.css";
import SocialLinks from "./components/socialLinks/socialLinks";
import Rodape from "./components/rodape/Rodape";

const App = () => {
  return (
    <div id="App" className="">
      <Perfil />
      <Switch />
      <ul>
        <Links />
        <Links />
        <Links />
        <Links />
      </ul>

      <div id="socialLinks">
        <SocialLinks />
        <SocialLinks />
        <SocialLinks />
        <SocialLinks />
      </div>

      <div id="Rodape"  >
        <Rodape />
      </div>
    </div>
  );
};

export default App;
