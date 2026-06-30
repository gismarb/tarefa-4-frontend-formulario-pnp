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
  // Estado responsável por armazenar a lista de indicadores exibidos na tela.
  // O useState permite que a interface seja atualizada automaticamente quando a lista mudar.
  const [indicadores, setIndicadores] = useState<Indicador[]>([]);

  // Estado responsável por controlar a exibição do carregamento inicial.
  // Ele simula uma situação real em que os dados ainda estariam sendo buscados de uma API.
  const [carregando, setCarregando] = useState(true);

  // Este useEffect simula a busca inicial de dados.
  // O array vazio faz com que o efeito seja executado apenas uma vez,
  // logo depois da primeira renderização do componente.
  useEffect(() => {
    const temporizador = window.setTimeout(() => {
      setIndicadores(indicadoresIniciais);
      setCarregando(false);
    }, 1200);

    // Esta função de limpeza remove o temporizador caso o componente seja desmontado
    // antes do carregamento terminar, evitando efeito pendente na aplicação.
    return () => {
      window.clearTimeout(temporizador);
    };
  }, []);

  // Este useEffect reage à mudança na quantidade de indicadores.
  // A cada alteração na lista, o título da aba do navegador é atualizado.
  useEffect(() => {
    document.title = `${indicadores.length} indicadores | PNP`;
  }, [indicadores.length]);

  // Enquanto os dados iniciais estão sendo simulados, exibo a tela de loading.
  if (carregando) {
    return (
      <div className="app-page">
        <Header />
        <main className="app-content">
          <Loading />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="app-page">
      <Header />

      <main className="app-content container py-5">
        <section className="mb-5">
          <span className="badge rounded-pill text-bg-success mb-3">
            <i className="bi bi-database-check me-2"></i>
            Simulação de funcionalidade do TCC
          </span>

          <h2 className="section-title fw-bold mb-3">
            Coleta de sugestões para novos indicadores
          </h2>

          <p className="lead text-secondary mb-0">
            Esta tela representa uma funcionalidade simulada em que o usuário pode
            sugerir indicadores relacionados à Plataforma Nilo Peçanha. Os dados
            são controlados pelo React, enviados entre componentes e exibidos
            dinamicamente na interface.
          </p>
        </section>

        <ResumoIndicadores indicadores={indicadores} />

        <section>
          <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3 mb-3">
            <div>
              <h2 className="section-title h4 fw-bold mb-1">
                Indicadores carregados
              </h2>

              <p className="text-secondary mb-0">
                Lista inicial simulada a partir de dados organizados na pasta data.
              </p>
            </div>

            <span className="badge rounded-pill text-bg-light border">
              {indicadores.length} indicadores
            </span>
          </div>

          <div className="row g-4">
            {indicadores.map((indicador) => (
              // O map() transforma cada objeto da lista em um componente visual.
              // A prop key usa o id único do indicador para ajudar o React a controlar a lista.
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