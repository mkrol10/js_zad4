var a = prompt('Podaj pierwsza liczbe: ');
var b = prompt('Podaj druga liczbe:')
var value = (a * a) + (2 * a * b) - (b * b);

console.log('Wynik operacji: ' + value);

if (value < 0) {
    console.log('Wynik jest ujemny')
} else if (value > 0) {
    console.log('Wynik jest dodatni')
} else if (value == 0) {
    console.log('Liczba rowna sie zero')
} else {
    console.log('Cos poszlo nie tak')
}