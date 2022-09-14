function aplicarMascaraParReal(valor){
    if(isNaN(valor)){
        return 0;
    }
    return Number(valor).toLocaleString('pt-BR', {minimumFractionDigits: 2 });
}

function aplicarMascaraParRealComPreFixo(valor){
    if(isNaN(valor)){
        return 0;
    }
    return Number(valor).toLocaleString('pt-BR', { style:'currency', currency: 'BRL' });
}

export default {
    aplicarMascaraParReal,
    aplicarMascaraParRealComPreFixo

}