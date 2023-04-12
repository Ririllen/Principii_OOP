// Pentru clasa Mașină creați o clasă copil VehiculElectric ce va avea în plus proprietatea baterie (procentaj).
// Creați o metodă accelerează ce crește viteza cu 10 km/h și scade bateria cu 5%.
// Creați o metodă ce descrie mașina: Tesla albă, fabricată în 2018, merge cu 120 km/h și are 40% baterie.
// Creați o metodă încărcare ce va crește bateria cu 10%.
// Creați două obiecte mașini și experimentați cu aceste metode.

class Car {
    constructor(model, culoare, anFabricatie, viteza){
        this.model = model;
        this.culoare = culoare;
        this.anFabricatie = anFabricatie;
        this.viteza = viteza;
    }
    accelereaza(){
        this.viteza += 10;
    }
    franeaza(){
        this.viteza -= 10;
    }
    descrie(){
        return `${this.model} ${this.culoare}, fabricat in ${this.anFabricatie}, viteza initiala: ${this.viteza} km/h.`;
    }
}

class VehiculElectric extends Car {
    constructor(model, culoare, anFabricatie, viteza) {
        super(model, culoare, anFabricatie, viteza);
        this.baterie = 100;
    }   
    
    accelereaza(){
        this.viteza += 10;
        this.baterie -= 5;
    }        

    descrie(){
        return `${this.model} ${this.culoare}, fabricat in ${this.anFabricatie}, viteza initiala: ${this.viteza} km/h, si are ${this.baterie}% baterie`;
    }    

    incarcare(){
        if (this.baterie + 10 <= 100){
            this.baterie += 10;
        } else {
            this.baterie = 100;
        }
    }   
}

const masinaElectrica = new VehiculElectric("Toyota","Alba",2015,80);
const masina = new Car("Nissan","Rosie",2020,70);

masina.accelereaza();
console.log(masina.descrie());


masinaElectrica.accelereaza();
masinaElectrica.incarcare();
console.log(masinaElectrica.descrie());

