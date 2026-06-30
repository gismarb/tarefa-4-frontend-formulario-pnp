import type { Indicador } from '../types/Indicador';

// Estes dados simulam uma lista inicial de indicadores já existentes.
// Na prática, eles representam o tipo de informação que poderia vir de uma API,
// de uma base consolidada ou de uma camada de dados do sistema do TCC.
export const indicadoresIniciais: Indicador[] = [
  {
    id: 1,
    nome: 'Taxa de conclusão de curso',
    categoria: 'Ensino',
    prioridade: 'Alta',
    descricao:
      'Indicador sugerido para acompanhar a proporção de estudantes que concluem seus cursos dentro do período previsto.',
  },
  {
    id: 2,
    nome: 'Índice de evasão acadêmica',
    categoria: 'Permanência',
    prioridade: 'Alta',
    descricao:
      'Indicador voltado à análise de estudantes que interrompem sua trajetória acadêmica antes da conclusão.',
  },
  {
    id: 3,
    nome: 'Relação matrícula por eixo tecnológico',
    categoria: 'Oferta',
    prioridade: 'Média',
    descricao:
      'Indicador utilizado para observar a distribuição das matrículas por eixo tecnológico dentro da instituição.',
  },
];