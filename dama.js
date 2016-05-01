// le righe vanno da 1 a 8 verso l'alto
// le colonne vanno da 1 a 8 verso dx

// volgiamo una funzione che crea una pedina


var pedina = function(riga, colonna) {
    
    this.convertiColonna = function (colonna) {
        return String.fromCharCode(colonna + 64);
    };
    
    this.riga = riga;
    this.colonna = colonna;
    
    this.nellaScacchiera = function(){
        var nellaScacchiera = false;
        if (this.riga >= 1 && this.riga <=8 && this.colonna >= 1 && this.colonna <= 8){
            nellaScacchiera = true;
        }
        return nellaScacchiera;
    };
    
    this.nelQuadratoNero = function(){
        var nelQuadratoNero = false;
        if ((this.colonna % 2 == 0 && this.riga % 2 == 0) ||(this.colonna % 2 != 0 && this.riga % 2 == 0)){
            nelQuadratoNero = true;
        }
        return nelQuadratoNero;
    };
    
    this.locazioneValida = function(){
        var locazioneValida = false;
        if (this.nellaScacchiera() == true && this.nelQuadratoNero() == true){
            locazioneValida = true;
        }
        return locazioneValida;
    };
    
    this.locazione = function(){
        return (this.convertiColonna(this.colonna) + this.riga);
    };
};




var pedina1 = new pedina(4,4);


//console.log(pedina1.locazione());

pedina1.riga = 4;

//console.log(pedina1.locazione());



//console.log(pedina1.nellaScacchiera());

//console.log(pedina1.nelQuadratoNero());
console.log(pedina1.locazioneValida());





















