import type { Indicador } from '../types/Indicador';

// Esta interface define que o card precisa receber um indicador completo.
// Assim, o TypeScript garante que o componente tenha acesso a nome,
// categoria, prioridade e descrição.
interface IndicadorCardProps {
  indicador: Indicador;
}

// Este componente fica responsável por exibir um indicador individual.
// Com isso, evito repetir o mesmo JSX sempre que precisar listar vários indicadores.
function IndicadorCard({ indicador }: IndicadorCardProps) {
  // Aqui defino a classe visual da prioridade com base no valor do indicador.
  // Essa estratégia deixa o JSX mais limpo e facilita alterar as cores depois.
  const prioridadeClasse = {
    Baixa: 'text-bg-success',
    Média: 'text-bg-warning',
    Alta: 'text-bg-danger',
  }[indicador.prioridade];

  return (
    <article className="card border-0 shadow-sm h-100 indicador-card">
      <div className="card-body">
        <div className="d-flex align-items-start justify-content-between gap-3 mb-3">
          <div>
            {/* A categoria aparece como badge para facilitar a leitura visual do indicador. */}
            <span className="badge text-bg-light border mb-2">
              <i className="bi bi-tag me-1"></i>
              {indicador.categoria}
            </span>

            <h3 className="h5 fw-bold mb-0">{indicador.nome}</h3>
          </div>

          {/* A prioridade recebe uma classe dinâmica conforme o valor informado. */}
          <span className={`badge ${prioridadeClasse}`}>
            {indicador.prioridade}
          </span>
        </div>

        <p className="text-secondary mb-0">{indicador.descricao}</p>
      </div>
    </article>
  );
}

export default IndicadorCard;