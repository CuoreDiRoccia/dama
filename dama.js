
var righeDama = [1,2,3,4,5,6,7,8];
var colonneDama = [1,2,3,4,5,6,7,8];
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

var correzzioneMossa = function(possibileErrore){
    var procedi;
    if (possibileErrore == [true,true]){
        procedi = true;
    } else { procedi = false }
    return procedi;
};


// le righe vanno da 1 a 8 verso l'alto
// le colonne vanno da 1 a 8 verso dx
var pedina = {
    riga:    1,
    colonna: 2,
    posizioneCorrente: function (riga, colonna){
        console.log("Mi trovo in ", riga, colonna);
    }
};

//pedina.riga = 4;

/*
var posizionePedina = function(pedina) {
    var colonna = convertiColonna(pedina.colonna);
    console.log(colonna + pedina.riga);    // 'B1'
}

var convertiColonna = function(colonna) {
    
    return 'B';
}
*/
pedina.posizioneCorrente(pedina.riga, pedina.colonna);

