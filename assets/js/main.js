const darkModeButton = document.getElementById("darkModeButton");
darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark_mode");
});
//  ab hier Code Übung
console.log("%c===== lev1_1: JavaScript this =====", "background-color:green");
var person = {
  vorname: "Anton",
  nachname: "Fish",
  fullName: function () {
    return this.vorname;
  },
};
console.log(person.fullName());

console.log("%c===== lev1_2: Objects =====", "background-color:green");
// Erstelle ein Objekt und speichere es als Variable person
// Deklariere die Eigenschaft name mit dem Wert deines Namens,
// Deklariere die Eigenschaft alter mit dem Wert deines Alters,
// Deklariere die Methode (Funktion) sagNameAlter im Objekt
// Nutze den Befehl alert() im Funktionskörper um name, alter anzuzeigen.
// Gib in der Konsole name und alter aus.
// Rufe die Funktion sagNameAlter aus dem Objekt auf.

let person1 = {
  nameEins: "Anton",
  alter: 7,
  sagNameAlter: function () {
    alert(this.nameEins + ", " + this.alter);
  },
};
console.log(person1.nameEins);
console.log(person1.alter);
person1.sagNameAlter();

console.log(
  "%c===== lev1_4: Objects Accessing while =====",
  "background-color:green"
);
// Lev1_4
// In dieser Übung lernen wir, wie man auf die Objekte zugreift.

// Verwende den Code aus dem Kommentarbereich.
// Greife auf die Werte dieses Objekts zu:
// "Nala"
// "Droopy"
// und lasse dir einmal alle Hundenamen anzeigen
// Erstelle eine Methode, mit der man die Hundenamen ändern kann und rufe diese Methode auf.

let unsereHaustiere = [
  {
    tiertyp: "Katze",
    names: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    names: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
];
console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);
console.log(unsereHaustiere[0].names);
console.log(unsereHaustiere[1].names);

delete unsereHaustiere[1].names;
unsereHaustiere[1].names = [];
unsereHaustiere[1].names[0] = "Balu";
unsereHaustiere[1].names[1] = "Snoopy";
console.log(unsereHaustiere[1].names);

// lev1_5: Objects Accessing
console.log(
  "%c===== lev1_5: Objects Accessing =====",
  "background-color:green"
);
// In dieser Übung lernen wir wie man auf die Objekt-Inhalte zugreift.
// Verwende den Code aus dem Kommentar.
// Greife auf die Eigenschaften dieses Objekts zu und gib folgende Werte in der Konsole aus:
// Geheimnisse
// Cola
// Hefter

let unserLager = {
  schreibtisch: {
    schublade: "Hefter",
  },
  schrank: {
    "Obere Schublade": {
      Ordner1: "Dokumente",
      Ordner2: "Geheimnisse",
    },
    "Untere Schublade": "Cola",
  },
};
console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);
// lev1_6: Objects Arrays Accessing
console.log(
  "%c===== lev1_6: Objects Arrays Accessing =====",
  "background-color:green"
);
// In dieser Übung lernen wir, wie man auf die Objekte zugreift.
// Verwende den Code aus dem Kommentarbereich.
// Füge zu dem Objekt Deine Lieblingsmusik hinzu.
// Greife mit console.log auf die Werte dieses Objekts zu:
// "The Beatles"
// Von Pink Floyd: "Download"
// Von Pink Floyd: true
// 1971 und 1983
// Von Metallica: "MC"
// Von Metallica das Wort: Ride
// Von Led Zeppelin das Wort: IV:
// Von Pink Floyd das Wort: Floyd

let myMusic = [
  {
    artist: "The Beatles",
    title: "Abbey Road",
    release_year: 1969,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
  {
    artist: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_year: 1978,
    medium: ["CS", "CD", "LP", "Download"],
    gold: true,
  },
  {
    artist: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_year: 1971,
    medium: ["CS", "LP", "Download"],
    gold: true,
  },
  {
    artist: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_year: 1983,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
];
console.log(myMusic);
console.log(myMusic[0].artist);
console.log(myMusic[1].medium[3]);
console.log(myMusic[1].gold);
console.log(myMusic[2].release_year);
console.log(myMusic[3].release_year);
console.log(myMusic[3].medium[2]);
console.log(myMusic[3].title.slice(17, 21));
console.log(myMusic[2].title.slice(13, 15));
console.log(myMusic[1].artist.slice(5, 10));
"%c===== lev1_2: JavaScript this [object Object] =====",
  "background-color:green";

let person3 = {
  vorname: "Anton",
  nachname: "Nüssler",
  alter: 34,
  familienstand: "ledig",
  groesse: "178cm",
  profil: function () {
    return this.person;
  },
};
//gib das Profil von Anton mit diesem Code im Element mit der "person" aus.
// document.getElementById("person").innerHTML = person.profil();
