// Esta interface define o formato padrão de um indicador dentro da aplicação.
// A ideia aqui é deixar claro quais informações cada indicador precisa ter
// para ser exibido, cadastrado e manipulado com segurança pelo TypeScript.
export interface Indicador {
  id: number;
  nome: string;
  categoria: string;

  // Aqui limito os valores possíveis da prioridade para evitar textos soltos
  // ou valores diferentes daqueles que fazem sentido para o formulário.
  prioridade: 'Baixa' | 'Média' | 'Alta';

  descricao: string;
}