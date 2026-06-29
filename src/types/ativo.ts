export type TipoAtivo = "acao" | "fii";

export interface Ativo {
  id: String;
  ticker: String;
  tipo: TipoAtivo;
  quantidade: number;
  precoMedio: number;
  precoAtual: number;
}
