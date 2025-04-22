import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Promotion from "./components/Promotion";

function App() {

   const [carrinhoItem, setCarrinhoItem] = useState([]);
   const [mostraCarrinho, setMostraCarrinho] = useState(false);

   const adcionarCarrinho = (produto) => {
    setCarrinhoItem((produtoAnteriores)=>{
      const existing = produtoAnteriores.find((item)=>
         item.id === produto.id);
      if(existing){
         return produtoAnteriores.map((item)=>
            item.id === produto.id ? {...item, quantidade: item.quantidade + 1} : item
         )
   
   
    })

    return (
    <>
      <Header contadorJogos={2} />
      <Promotion adcionarcarrinho={adcionarCarrinho}/>
      
    </>
  );
}

export default App;