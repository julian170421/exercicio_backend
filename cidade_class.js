class Cidade{
    constructor(nome,estado,numPopulacao,numMulheres,numHomens){
        this.nome = nome
        this.estado = estado
        this.numPopulacao = numPopulacao
        this.numMulheres = numMulheres
        this.numHomens = numHomens
    }

    percentualHomens(){
        let percentual = 0.0
        percentual = (this.numHomens / this.numPopulacao) * 100.0
        return percentual
        
    }
    percentualMulheres(){
        let percentual = 0.0
        percentual = (this.numMulheres / this.numPopulacao) * 100.0
        return percentual
        
    }
} module.exports = Cidade