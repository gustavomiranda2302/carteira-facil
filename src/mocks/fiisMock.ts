import type { Ativo } from "../types/ativo";

export const acoesMock: Ativo[] = [
  {
    id: "1",
    ticker: "CPLE3",
    tipo: "acao",
    quantidade: 60,
    precoMedio: 8.5,
    precoAtual: 9.1,
  },
  {
    id: "2",
    ticker: "SAPR11",
    tipo: "acao",
    quantidade: 25,
    precoMedio: 22.3,
    precoAtual: 21.8,
  },
  {
    id: "3",
    ticker: "ITSA4",
    tipo: "acao",
    quantidade: 30,
    precoMedio: 10.2,
    precoAtual: 11.05,
  },
];
