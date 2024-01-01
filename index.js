/*1. Declara o clasa prin care sa reprezinți obiectul numit Mașina. O mașină are următoarele proprietăți:
- `marca` (ex: Volvo, Mazda, Dacia)
- `model` (ex: XC-60, CX-5, BIGGSTER)
- `culoare` (ex Negru, Verde, Albastru)
- `kilometraj` (ex 234 000, 111 000, 20 000)

Pentru aceasta clasa definește un `constructor` care sa inițializeze proprietățile clasei folosind `this`.

Pe lângă constructor, definește o metodă de tip `getter` (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) numita `proprietati` care va returna proprietățile mașinii sub forma

`Masina[marca=VOLVO, model=XC-60, culoare=Negru, kilometraj=234 000]`

La final, definește separat o funcție numită main, in care se vor crea 3 `instanțe` ale clasei mașina folosind operatorul `new`. Fiecare instanță va fi memorata Într-o variabilă separată și va avea proprietăți diferite. Afișează proprietățile mașinilor instanțiate folosind getter-ul `proprietati`.

Pentru mașinile date in exemplu programul va afișa

`Masina[marca=VOLVO, model=XC-60, culoare=Negru, kilometraj=234 000]`

`Masina[marca=Mazda, model=CX-5, culoare=Verde, kilometraj=111 000]`

`Masina[marca=Dacia, model=BIGGSTER, culoare=Albastru, kilometraj=20 000]`
*/

class Masina {
  constructor(marca, model, culoare, kilometraj) {
    this.marca = marca;
    this.model = model;
    this.culoare = culoare;
    this.kilometraj = kilometraj;
  }

  proprietati() {
    return (
      "Masina[marca=" +
      this.marca +
      ", model=" +
      this.model +
      ", culoare=" +
      this.culoare +
      ", kilometraj=" +
      this.kilometraj +
      "]"
    );
  }
}

function main() {
  const masina1 = new Masina("Volvo", "XC-60", "Negru", "234 000");
  const masina2 = new Masina("Mazda", "CX-5", "Verde", "111 000");
  const masina3 = new Masina("Dacia", "BIGGSTER", "Albastru", "20 000");

  return (
    console.log(masina1.proprietati()) +
    "\n" +
    console.log(masina2.proprietati()) +
    "\n" +
    console.log(masina3.proprietati())
  );
}

main();

/*
2. Definește încă o clasa numita `MasinaDeCurse`. Această clasă va moșteni clasa `Masina` definita la exercițiul 1, folosind cuvantul cheie `extends` si va avea un constructor in care se va apela `this.super()` (adica superconstructorul).

`MasinaDeCurse` va avea o metoda suplimentara numita `participaLaCampionat`, metoda ce va primi un parametru numit `pozitiaInCampionat` (un numar). Metoda va afisa “Am castigat locul ” urmat de valoarea parametrului `pozitiaInCampionat`. Metoda va verifica daca pozitiaInCampionat este un numar mai mare ca 0, iar in cazul in care numarul este mai mic sau egal cu 0, se va afisa mesajul “Nu am castigat niciun premiu”.

Ex:

```
const m1 = new MasinaDeCurse("Toyota", "Turbo", "Rosu", 100000);
m1.participaLaCampionat(30);
//Va afisa mesajul: Am castigat locul 30

m1.participaLaCampionat(-1);
//Va afisa mesajul: Nu am castigat niciun premiu

```

La final defineste o functie in care sa instantiezi doua masini de curse, prima va paricipa la campionat si va castiga locul 2, iar a doua nu va participa la campionat(folosind metoda definita). De asemenea afiseaza proprietatiile masinilor ca si la exercitiul 1.
*/

class MasinaDeCurse extends Masina {
  constructor(marca, model, culoare, kilometraj) {
    super(marca, model, culoare, kilometraj);
  }
  participaLaCampionat(pozitiaInCampionat) {
    if (pozitiaInCampionat > 0) {
      console.log("Am castigat locul " + pozitiaInCampionat);
    } else {
      console.log("Nu am castig niciun premiu");
    }
  }
}

function campionat() {
  const m1 = new MasinaDeCurse("Toyota", "Turbo", "Rosu", "100 000");
  const m2 = new MasinaDeCurse("BMW", "X5", "Alb", "200 000");

  return (
    console.log(m1.proprietati()) +
    "\n" +
    m1.participaLaCampionat(2) +
    "\n" +
    console.log(m2.proprietati()) +
    "\n" +
    m2.participaLaCampionat(0)
  );
}

campionat();
