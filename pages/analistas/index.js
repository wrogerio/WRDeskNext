import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "../../components/shared/header";
import Legenda from "../../components/shared/legenda";
import { NumbersTwoDigits } from "../../utils/Funcoes";

export const getStaticProps = async () => {
  const res = await fetch("https://wrdesk.vercel.app/api/analistas");
  const data = await res.json();
  return {
    props: {
      analistas: data,
    },
    revalidate: 300,
  };
};

const Index = (props) => {
  const [analistas, setAnalistas] = useState([]);

  // Load Analistas
  useEffect(() => {
    setAnalistas(props.analistas);
  }, []);

  return (
    <div className="px-2">
      <Header
        estilo="success"
        titulo="Analistas"
        qtd={analistas && NumbersTwoDigits(analistas.length)}
        url="/analistas/adicionar"
        textoBt="Adicionar"
        className="no-select"
      />
      <div className="row mb2 no-select">
        <div className="col px-0">
          <table className="table table-sm table-bordered">
            <thead>
              <tr className="bg-success text-white">
                <th className="py-2">Nome</th>
              </tr>
            </thead>
            <tbody>
              {analistas &&
                analistas.map((analista) => (
                  <tr className="filterText" textsearch="Gerar Recursos compradosMoisésReuniãoCetekAndamento">
                    <td className="align-middle" title="Gerar Recursos comprados">
                      <div className="d-flex justify-content-between align-items-center bgmoiza">
                        <Link className="text-success" href={"/analistas/" + analista.id}>
                          {analista.nome}
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Index;
