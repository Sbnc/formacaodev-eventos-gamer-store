import { Produto } from "../../../../../../../Users/sabri/Downloads/4051d76e-7204-4838-aaa4-08d3f147f0bc-mercado-gam3r.store-dia-2/gam3r.store/packages/core/src/produto";

export default interface ItemPedido {
  id: number;
  produto: Produto;
  quantidade: number;
  precoUnitario: number;
}
