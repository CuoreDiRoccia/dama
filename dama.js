

var righeDama = [0,1,2,3,4,5,6,7];
var colonneDama = [0,1,2,3,4,5,6,7];
//DB = dama bianca

var movimentoDestroDB = function (riga,colonna){
    var nuovaRiga = riga+1;
    //console.log(nuovaRiga);
    var nuovaColonna = colonna+1;
    //console.log(nuovaColonna);
    var mossa = [nuovaRiga,nuovaColonna];
    return mossa;
    
};

var movimentoSinistroDB = function (riga,colonna){
    var nuovaRiga = riga+1;
    //console.log(nuovaRiga);
    var nuovaColonna = colonna-1;
    //console.log(nuovaColonna);
    var mossa = [nuovaRiga,nuovaColonna];
    return mossa;
};

var mossaDecisa = function (movDx,movSx){
    var mossaDaFare;
    var mossaCasuale = Math.ceil(Math.random() * 2);
    if (mossaCasuale == 1) {
        mossaDaFare = movDx;
    } else {
        mossaDaFare = movSx;
    }
    return mossaDaFare;
};

var possibileErroreDB = function (mossa){
    var movimentoDestroPossibile;
    var movimentoSinistroPossibile;
    var mossaPossibile = [];
    if (mossa[1] == -1){
        movimentoSinistroPossibile = false;
        movimentoDestroPossibile = true;
    } else if (mossa[1] == 8){
        movimentoSinistroPossibile = true;
        movimentoDestroPossibile = false;
    } else {
        movimentoSinistroPossibile = true;
        movimentoDestroPossibile = true;
    }
    //console.log(movimentoDestroPossibile,movimentoSinistroPossibile);
    return mossaPossibile = [movimentoSinistroPossibile,movimentoDestroPossibile];
};

var correzzioneMossa = function(mossaDecisa,possibileErrore){
    var procedi;
    if (possibileErrore == [true,true]){
        procedi = true;
    } else { procedi = false }
    return procedi;
};






