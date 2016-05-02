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
        if ((this.colonna % 2 == 0 && this.riga % 2 == 0) ||(this.colonna % 2 != 0 && this.riga % 2 != 0)){
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


var pedina1B = new pedina(1,1);
var pedina2B = new pedina(1,3);
var pedina3B = new pedina(1,5);
var pedina4B = new pedina(1,7);
var pedina5B = new pedina(2,2);
var pedina6B = new pedina(2,4);
var pedina7B = new pedina(2,6);
var pedina8B = new pedina(2,8);
var pedina9B = new pedina(3,1);
var pedina10B = new pedina(3,3);
var pedina11B = new pedina(3,5);
var pedina12B = new pedina(3,7);

var pedina1N = new pedina(6,2);
var pedina2N = new pedina(6,4);
var pedina3N = new pedina(6,6);
var pedina4N = new pedina(6,8);
var pedina5N = new pedina(7,1);
var pedina6N = new pedina(7,3);
var pedina7N = new pedina(7,5);
var pedina8N = new pedina(7,7);
var pedina9N = new pedina(8,2);
var pedina10N = new pedina(8,4);
var pedina11N = new pedina(8,6);
var pedina12N = new pedina(8,8);

var pedine = [[],[]];

pedine[0] = [pedina1B.locazione(),pedina2B.locazione(),pedina3B.locazione(),pedina4B.locazione(),
    pedina5B.locazione(),pedina6B.locazione(),pedina7B.locazione(),pedina8B.locazione(),
    pedina9B.locazione(),pedina10B.locazione(),pedina11B.locazione(),pedina12B.locazione()];

pedine[1] = [pedina1N.locazione(),pedina2N.locazione(),pedina3N.locazione(),pedina4N.locazione(),
    pedina5N.locazione(),pedina6N.locazione(),pedina7N.locazione(),pedina8N.locazione(),
    pedina9N.locazione(),pedina10N.locazione(),pedina11N.locazione(),pedina12N.locazione()];





console.log(pedine);


















