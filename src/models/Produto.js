import conversorData from "@/utils/conversor-data";
import conversorMonetario from "@/utils/conversor-monetario";

export default class Produto {
    constructor(obj){
        obj = obj || {};
        
        this.id = obj.id;
        this.nome = obj.nome;
        this.valor = conversorMonetario.aplicarMascaraParReal( obj.valor || 0);
        this.quantidadeEstoque = obj.quantidadeEstoque || 0;
        this.dataCadastro = obj.dataCadastro && conversorData.aplicarMascaraEmDataIso(obj.dataCadastro);
    }

}