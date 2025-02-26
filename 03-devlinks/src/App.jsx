import Perfil from "./components/perfil/perfil";
import Switch from "./components/switch/Switch";
import Links from "./components/links/links";

import "./App.css";
import fotoLigth from "./img/IMG_4160.jpg";
import fotoDark from "./img/5bb8b70c-e092-48ce-bdf7-a45d6ad286f2.jpg"


import SocialLinks from "./components/socialLinks/socialLinks";
import Rodape from "./components/rodape/Rodape";
import { useState } from "react";

const App = () => {
  const [isLight, setIsLight] = useState(false);

  const troca = () => {
    setIsLight(!isLight);
  };

  return (
    <div id="App" className={isLight ? "light" : ""}>
      <Perfil fotoperfi={isLight ? fotoDark : fotoLigth}> Pedro Araújo</Perfil>

      <Switch troca={troca} isLight={isLight} />
      <div id="container">
      <ul>    

        <Links link={"https://GitHub.com/PedrooAraujosz"}>GitHub</Links>
        <Links link={"https://https://www.instagram.com/"}>Intragam</Links>
        <Links link={"https://TikTok.com"}>TikTok</Links>
        <Links link={"https://linkedin.com/"}>Linkedin</Links>
      </ul>
      </div>

      <div id="socialLinks">
        <SocialLinks
          link={"https://github.com/PedrooAraujosz"}
          icon={"logo-github"}
        />
        <SocialLinks
          link={"https://https://www.instagram.com/"}
          icon={"logo-instagram"}
        />
        <SocialLinks link={"https://TikTok.com"} icon={"logo-TikTok"} />
        <SocialLinks link={"https://linkedin.com/"} icon={"logo-linkedin"} />
      </div>

      <div id="Rodape">
        <Rodape>PedroAraujosz👺</Rodape>
      </div>
    </div>
  );
};

export default App;
