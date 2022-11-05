import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "../../components/shared/header";
import Legenda from "../../components/shared/legenda";
import { NumbersTwoDigits } from "../../utils/Funcoes";

export const getStaticProps = async () => {
  const res = await fetch("https://wrdesk.vercel.app/api/empresas");
  const data = await res.json();
  return {
    props: {
      empresas: data,
    },
    revalidate: 600,
  };
};

const Index = (props) => {
  const [empresas, setEmpresas] = useState([]);

  // Load Empresas
  useEffect(() => {
    setEmpresas(props.empresas);
  }, []);

  return (
    <div className="px-2">
      <Header
        estilo="success"
        titulo="Empresas"
        qtd={empresas && NumbersTwoDigits(empresas.length)}
        url="/empresas/adicionar"
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
              {empresas &&
                empresas.map((empresa) => (
                  <tr key={empresa.id} className="filterText" textsearch="Gerar Recursos compradosMoisésReuniãoCetekAndamento">
                    <td className="align-middle" title="Gerar Recursos comprados">
                      <div className="d-flex justify-content-between align-items-center bgmoiza">
                        <Link className="text-success" href={"/empresas/" + empresa.id}>
                          {empresa.razaosocial}
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
