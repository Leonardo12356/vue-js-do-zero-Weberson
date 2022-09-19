import produtoService from "@/services/produto-service";
import Produto from "@/models/Produto";
import conversorDeData from "@/utils/conversor-data";
import conversorMonetario from "../utils/conversor-monetario";

let ProdutoMixin = {
    methods: {
    conversorData(data) {
        return conversorDeData.aplicarMascaraEmDataIso(data);
      },
  
      conversor(valor) {
        return conversorMonetario.aplicarMascaraParaRealComPreFixo(valor);
      },
    },
    data() {
        return {
            
        }
    }
}