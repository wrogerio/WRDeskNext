import { useEffect } from "react";
import Header from "../components/shared/header";

const Index = () => {
  useEffect(() => {
    localStorage.removeItem("modo");
  }, []);

  return (
    <>
      <Header titulo="Chamados Ativos" qtd={5} url="/" textoBt="Adicionar" iconeBt="fa-plus" />
      <h1>Start</h1>
    </>
  );
};

export default Index;
