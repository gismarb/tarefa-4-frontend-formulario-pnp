import type { Indicador } from '../types/Indicador';

// Esta interface define quais dados o componente de resumo espera receber.
// Neste caso, ele recebe a lista completa de indicadores para calcular os totais.
interface ResumoIndicadoresProps {
  indicadores: Indicador[];
}

// Este componente calcula e exibe informações resumidas sobre os indicadores.
// A ideia é mostrar que um componente pode receber dados por props
// e gerar uma visualização derivada desses dados.
function ResumoIndicadores({ indicadores }: ResumoIndicadoresProps) {
  // Aqui calculo o total geral de indicadores sugeridos.
  const totalIndicadores = indicadores.length;

  // Aqui filtro apenas os indicadores de prioridade alta.
  // Esse cálculo é feito a partir da lista recebida pelo componente pai.
  const totalAltaPrioridade = indicadores.filter(
    (indicador) => indicador.prioridade === 'Alta',
  ).length;

  return (
    <section className="row g-3 mb-4">
      <div className="col-12 col-md-6">
        <article className="card border-0 shadow-sm h-100">
          <div className="card-body d-flex align-items-center gap-3">
            {/* Este bloco visual usa ícone para destacar o total de indicadores. */}
            <div className="summary-icon">
              <i className="bi bi-clipboard-data"></i>
            </div>

            <div>
              <p className="text-secondary small mb-1">Indicadores sugeridos</p>
              <strong className="fs-4">{totalIndicadores}</strong>
            </div>
          </div>
        </article>
      </div>

      <div className="col-12 col-md-6">
        <article className="card border-0 shadow-sm h-100">
          <div className="card-body d-flex align-items-center gap-3">
            {/* Este bloco destaca quantos indicadores foram marcados como prioridade alta. */}
            <div className="summary-icon summary-icon-danger">
              <i className="bi bi-exclamation-triangle"></i>
            </div>

            <div>
              <p className="text-secondary small mb-1">Prioridade alta</p>
              <strong className="fs-4">{totalAltaPrioridade}</strong>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ResumoIndicadores;