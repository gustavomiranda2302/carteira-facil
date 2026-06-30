export type TipoAtivo = "acao" | "fii";

export interface Ativo {
  id: string;
  ticker: string;
  tipo: TipoAtivo;
  quantidade: number;
  precoMedio: number;
  precoAtual: number;
}
