import { useState } from 'react';

import type { Indicador } from '../types/Indicador';

// Este tipo representa os dados preenchidos no formulário antes de o App gerar o id.
// Separei o id porque ele será criado no componente pai, no momento em que o indicador
// for adicionado à lista principal.
type NovoIndicador = Omit<Indicador, 'id'>;

// Esta interface define a comunicação entre o formulário e o componente pai.
// A função onAdicionarIndicador será recebida por props e chamada no envio do formulário.
interface IndicadorFormProps {
  onAdicionarIndicador: (indicador: NovoIndicador) => void;
}

// Estado inicial do formulário.
// Mantive esse objeto separado para conseguir limpar os campos depois do envio.
const formularioInicial: NovoIndicador = {
  nome: '',
  categoria: 'Ensino',
  prioridade: 'Média',
  descricao: '',
};

function IndicadorForm({ onAdicionarIndicador }: IndicadorFormProps) {
  // Estado responsável por armazenar o que o usuário digita em cada campo.
  // Como os campos usam value e onChange, este é um formulário controlado pelo React.
  const [formulario, setFormulario] = useState<NovoIndicador>(formularioInicial);

  // Estado simples para exibir uma mensagem de validação quando algum campo obrigatório
  // ainda não foi preenchido corretamente.
  const [erro, setErro] = useState('');

  // Esta função atualiza campos de texto e textarea.
  // Uso o atributo name do campo para saber qual propriedade do estado deve ser alterada.
  function handleCampoTextoChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;

    setFormulario((estadoAtual) => ({
      ...estadoAtual,
      [name]: value,
    }));
  }

  // Esta função atualiza os campos select do formulário.
  // Mantive separada para deixar mais claro que categoria e prioridade possuem listas fechadas.
  function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const { name, value } = event.target;

    setFormulario((estadoAtual) => ({
      ...estadoAtual,
      [name]: value,
    }));
  }

  // Esta função captura o envio do formulário.
  // O preventDefault evita o recarregamento da página, permitindo tratar os dados pelo React.
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nome = formulario.nome.trim();
    const descricao = formulario.descricao.trim();

    // Validação simples para garantir que a sugestão tenha as informações principais.
    if (!nome || !descricao) {
      setErro('Preencha o nome do indicador e a descrição antes de enviar.');
      return;
    }

    // A chamada abaixo envia os dados para o componente pai.
    // Esse é o ponto principal da comunicação filho -> pai por callback via props.
    onAdicionarIndicador({
      ...formulario,
      nome,
      descricao,
    });

    setFormulario(formularioInicial);
    setErro('');
  }

  return (
    <section className="card shadow-sm mb-5">
      <div className="card-body p-4">
        <div className="d-flex align-items-center gap-3 mb-4">
          <div className="info-icon">
            <i className="bi bi-send-plus"></i>
          </div>

          <div>
            <h2 className="section-title h4 fw-bold mb-1">
              Sugerir novo indicador
            </h2>

            <p className="text-secondary mb-0">
              Preencha os campos abaixo para simular o envio de uma nova sugestão
              de indicador para análise no projeto PNP.
            </p>
          </div>
        </div>

        {erro && (
          <div className="alert alert-warning" role="alert">
            <i className="bi bi-exclamation-triangle me-2"></i>
            {erro}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-12 col-lg-6">
              <label htmlFor="nome" className="form-label fw-semibold">
                Nome do indicador
              </label>

              <input
                id="nome"
                name="nome"
                type="text"
                className="form-control"
                placeholder="Ex.: Taxa de permanência estudantil"
                value={formulario.nome}
                onChange={handleCampoTextoChange}
              />
            </div>

            <div className="col-12 col-lg-3">
              <label htmlFor="categoria" className="form-label fw-semibold">
                Categoria
              </label>

              <select
                id="categoria"
                name="categoria"
                className="form-select"
                value={formulario.categoria}
                onChange={handleSelectChange}
              >
                <option value="Ensino">Ensino</option>
                <option value="Gestão">Gestão</option>
                <option value="Permanência">Permanência</option>
                <option value="Oferta">Oferta</option>
                <option value="Eficiência">Eficiência</option>
              </select>
            </div>

            <div className="col-12 col-lg-3">
              <label htmlFor="prioridade" className="form-label fw-semibold">
                Prioridade
              </label>

              <select
                id="prioridade"
                name="prioridade"
                className="form-select"
                value={formulario.prioridade}
                onChange={handleSelectChange}
              >
                <option value="Baixa">Baixa</option>
                <option value="Média">Média</option>
                <option value="Alta">Alta</option>
              </select>
            </div>

            <div className="col-12">
              <label htmlFor="descricao" className="form-label fw-semibold">
                Descrição da sugestão
              </label>

              <textarea
                id="descricao"
                name="descricao"
                className="form-control"
                rows={4}
                placeholder="Explique por que esse indicador seria útil para análise dos dados da PNP."
                value={formulario.descricao}
                onChange={handleCampoTextoChange}
              ></textarea>
            </div>
          </div>

          <div className="d-flex justify-content-end mt-4">
            <button type="submit" className="btn btn-success">
              <i className="bi bi-send me-2"></i>
              Enviar sugestão
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default IndicadorForm;