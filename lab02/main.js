function sumator(...args) {
    console.log("Suma liczb:", args, "wynosi", args.reduce((sum, a) => sum += a))
}

sumator(1, 2, 3);
sumator(1, 2, 3, 4);

const listaZadan = [
    {
        id: 1,
        tekst: "Zrobienie zakupów",
        zrealizowano: true
    },
    {
        id: 2,
        tekst: "Przegląd techniczny samochodu",
        zrealizowano: false
    },
    {
        id: 3,
        tekst: "Wizyta u dentysty",
        zrealizowano: false
    },
];

listaZadan.forEach(element => {
    console.log(element.tekst)
});

let nowaLista = listaZadan.map((element) => element.tekst)

console.log(nowaLista)

let filtrowanaLista = listaZadan.filter(element => element.zrealizowano);

console.log(filtrowanaLista)

const poniedzialek = [
    {
        'nazwa': 'Przygotowania do zajęć z AI',
        'czas': 180
    },
    {
        'nazwa': 'Realizacja projektu z AI',
        'czas': 120
    }
]

const wtorek = [
    {
        'nazwa': 'Rozbudowa swojego bloga',
        'czas': 240
    },
    {
        'nazwa': 'Administrowanie serwisem szkoly',
        'czas': 180
    },
    {
        'nazwa': 'Sluchanie koncertu online',
        'czas': 240
    }
]

const tt = [poniedzialek, wtorek]
    .reduce((lista, a) => lista.concat(a))
    .map(element => {
        element.czas = element.czas / 60
        return element
    })
    .filter(element => element.czas > 2)
    .map(element => {
         element.czas *= 35
         return element
    })
    .reduce((suma, element) => {
        return [(+suma) + (+element.czas)]
    }, 0)
    .map(element => element += ",00 PLN")
    .reduce(element => element)


console.log(tt)

const firmy = [
    { nazwa: "Abasco", kategoria: "IT", poczatek: 1999, koniec: 2010 },
    { nazwa: "Redis", kategoria: "IT", poczatek: 1993, koniec: 1998 },
    { nazwa: "Komp", kategoria: "IT", poczatek: 2003, koniec: 2018 },
    { nazwa: "Bosco", kategoria: "Technologie", poczatek: 2011, koniec: 2014 },
    { nazwa: "CCA", kategoria: "IT", poczatek: 1991, koniec: 1995 },
    { nazwa: "Autosan", kategoria: "Auto", poczatek: 2009, koniec: 2018 },
    { nazwa: "Broke", kategoria: "Finanse", poczatek: 1990, koniec: 1992 },
    { nazwa: "Funds", kategoria: "Finanse", poczatek: 2000, koniec: 2021 }
]

const IT = firmy.filter(el => el.kategoria == "IT")
console.log(IT)
const lata90 = firmy.filter(el => el.koniec < 2000 && el.koniec > 1989)
console.log(lata90)
const lat10 = firmy.filter(el => el.koniec - el.poczatek > 10)
console.log(lat10)

import {default as modo} from './calc.js';

console.log(modo.calc(10,20,'+'))
console.log(modo.calc(20, 10, '/'))