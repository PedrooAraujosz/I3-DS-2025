import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Promotion from "./components/Promotion";
import CarrinhoOffCanvas from "./components/CarrinhoOffCanvas";

function App() {
  const [carrinhoItem, setCarrinhoItem] = useState([]);

  useEffect(() => {
    localStorage.setItem("carrinho-devsteam", JSON.stringify(carrinhoItem));
  }, [carrinhoItem]);
  
  useEffect(() => {
    const salvaCarrinho = localStorage.getItem("carrinho-devsteam");
    salvaCarrinho && setCarrinhoItem(JSON.parse(salvaCarrinho));
  }, []);


  const handleAddCarrinho = (produto) => {
    setCarrinhoItem((itemAnterior) => {
      const existe = itemAnterior.find((item) => item.id === produto.id);
      if (existe) {
        return itemAnterior.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        return [...itemAnterior, { ...produto, quantidade: 1 }];
      }
    });
  };

  console.log(localStorage.getItem("carrinho-devsteam"));
  return (
    <>
      <Header contadorJogos={carrinhoItem.length} />
      <Promotion
        onAddCarrinho={handleAddCarrinho} //adicionando o click para promoção
        />
        <div>CarrinhoOffCanvas</div>
    </>
  );
}

export default App;
