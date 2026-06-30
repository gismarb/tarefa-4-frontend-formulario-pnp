import { useEffect, useState } from 'react';

import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import IndicadorCard from './components/IndicadorCard';
import Loading from './components/Loading';
import ResumoIndicadores from './components/ResumoIndicadores';
import { indicadoresIniciais } from './data/indicadoresIniciais';
import type { Indicador } from './types/Indicador';

function App() {
  // Aqui mantenho a lista de indicadores no componente principal.
  // Essa lista será carregada inicialmente por uma simulação de API
  // e depois também receberá os novos indicadores enviados pelo formulário.
  const [indicadores, setIndicadores] = useState<Indicador[]>([]);

  // Este estado controla se a aplicação ainda está em carregamento.
  // Ele permite exibir o componente Loading antes de mostrar o conteúdo principal.
  const [carregando, setCarregando] = useState(true);

  // Este useEffect simula uma busca inicial de dados.
  // O array vazio no final indica que esse efeito deve executar apenas uma vez,
  // logo após a primeira renderização do componente App.
  useEffect(() => {
    const temporizador = window.setTimeout(() => {
      setIndicadores(indicadoresIniciais);
      setCarregando(false);
    }, 1200);

    // Esta função de limpeza remove o temporizador caso o componente seja desmontado
    // antes da simulação terminar. Isso evita efeitos pendentes na aplicação.
    return () => {
      window.clearTimeout(temporizador);
    };
  }, []);

  // Este segundo useEffect atualiza o título da aba do navegador
  // sempre que a quantidade de indicadores mudar.
  // Isso mostra um exemplo de efeito reagindo a uma mudança específica de estado.
  useEffect(() => {
    document.title = `${indicadores.length} indicadores | PNP`;
  }, [indicadores.length]);

  // Enquanto os dados iniciais estão sendo carregados, exibo apenas a tela de loading.
  if (carregando) {
    return (
      <div className="app">
        <Header />
        <Loading />
        <Footer />
      </div>
    );
  }

  return (
    <div className="app">
      <Header />

      <main className="container py-5">
        <section className="mb-5">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-7">
              <span className="badge rounded-pill text-bg-primary mb-3">
                <i className="bi bi-database-check me-2"></i>
                Simulação de funcionalidade do TCC
              </span>

              <h2 className="display-6 fw-bold mb-3">
                Coleta de sugestões para novos indicadores
              </h2>

              <p className="lead text-secondary mb-0">
                Esta tela representa uma funcionalidade simulada em que o usuário
                pode sugerir indicadores relacionados à Plataforma Nilo Peçanha.
                Os dados são controlados pelo React, enviados entre componentes
                e exibidos dinamicamente na interface.
              </p>
            </div>

            <div className="col-12 col-lg-5">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="summary-icon">
                      <i className="bi bi-lightning-charge"></i>
                    </div>

                    <div>
                      <h3 className="h5 fw-bold mb-1">Conceitos aplicados</h3>
                      <p className="text-secondary mb-0">
                        useState, props, callback, onSubmit, useEffect,
                        TypeScript e Bootstrap.
                      </p>
                    </div>
                  </div>

                  <p className="small text-secondary mb-0">
                    O carregamento inicial foi simulado com useEffect para representar
                    uma possível consulta a uma API ou base de dados externa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ResumoIndicadores indicadores={indicadores} />

        <section>
          <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
            <div>
              <h2 className="h4 fw-bold mb-1">Indicadores carregados</h2>
              <p className="text-secondary mb-0">
                Lista inicial simulada a partir de dados organizados na pasta data.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {indicadores.map((indicador) => (
              <div className="col-12 col-md-6 col-xl-4" key={indicador.id}>
                <IndicadorCard indicador={indicador} />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;