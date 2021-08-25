// // const funkcja = () => {
// //     for (let i=1; i<101; i++){
// //         if (i%3===0 && i%5===0){
// //             console.log("FizzBuzz")
// //         }
// //         else if (i%3===0){
// //             console.log("Fizz");
// //         }
// //         else if (i%5===0){
// //             console.log("Buzz")
// //         }
// //
// //     }
// // }
// //
// // const name="Łukasz";
// // const surname="graś";
// // const nameUpper = (name) => {
// //         console.log(name.toUpperCase());
// // }
// // nameUpper(name);
// // nameUpper(surname);
//
// //funkcje
// //Math.floor(Math.random() * 99) + 1;
// //napisz funkcje ktora doda 10 losowych liczb z przedzialu od 1 do 100, do tablicy
// //napisz funkcje ktora wyznaczy srednia liczb,najmniejsza liczbe oraz najwieksza liczbe
//
//
// //
// // const tab = [];
// // const addToTab= (tab) => {
// //     for(let i=0; i<10; i++){
// //         let number = Math.floor(Math.random() * 99) + 1;
// //         tab.push(number);
// //     }
// // };
// // addToTab(tab);
// // console.log(tab);
// // console.log(Math.min(...tab));
// // console.log(Math.max(...tab));
// // let sum = 0;
// // const average = (tab, sum) => {
// //     for(let i=0; i<tab.length; i++){
// //         sum += tab[i];
// //     }
// //     sum= sum/tab.length;
// //     console.log(sum);
// // }
// // average(tab,sum);
// //
//
//
// /*
//   1. Napisać funkcje która dany string przekształci na tablice i odwrotnie.
//   2. Napisać funkcje która będzie podłączona pod klika i każde jej wywołanie będzie oznaczało zmienianie globalnej zmiennej o +1. Zmienna globalna na początku wynosi 0.
//   3. Uzupełnij tablicę 15 losowymi liczbami z przedziału 1-100 i wypisz wszystkie liczby większe od 40 ale mniejsze od 60.
//   4. Do zadania trzeciego dodaj element który będzie pokazywał ile jest liczb z zakresu 40-60
// * 5. Uzupełnij tablicę 50 losowymi liczbami z przedziału 0-10 a  następnie posortuj ją rosnąco i wyświetl.
// */
// console.log("Zadanie 1:")
// const tab= ["aga","aha"];
// const str = "aha,aga";
// const stringArray = (tab, str) => {
//     tab= tab.toString();
//     console.log("Tab to string: ", tab);
//     str= str.split(',');
//     console.log("String to array: ", str);
// };
// stringArray(tab, str);
//
//
// console.log("Zadanie 3 i 4:")
// const tab3= [];
// let numberOfDigits=0;
// const addToTab= (tab3) => {
//     for(let i=0; i<15; i++){
//         let number = Math.floor(Math.random() * 99) + 1;
//         tab3.push(number);
//
//         if(number>40 && number<60){
//             console.log(number);
//             numberOfDigits++;
//
//         }
//     }
// };
// console.log("Liczby od 40 do 60: ");
// addToTab(tab3);
//
// console.log(tab3);
// console.log("Liczba wystąpień:", numberOfDigits);
//
//
//
//
// console.log("Zadanie 5:");
// const tab4= [];
// const addToTab2= (tab4) => {
//     for(let i=0; i<50; i++){
//         let number = Math.floor(Math.random() * 10) + 1;
//         tab4.push(number);
//     }
//     addToTab2(tab4);
//     const sortNum= (a, b) => {
//         return b-a;
//     };
//     console.log(tab4);
//     tab4.sort(sortNum);
//
//     console.log(tab4);
// };
//
const name = document.getElementById("name");
const pe = document.querySelector(".err");
const passErr = document.querySelector(".pass");
const pass = document.querySelector("#password");
// console.log(name);
console.log(pe);
let nameValue;
name.addEventListener("keypress", (e) => {
    // console.log(e.target.value);
    nameValue= e.target.value;
    if( nameValue.length<5 ){
        pe.style.display= "block";
    }
    else{
        pe.style.display= "none";
    }
} );


name.addEventListener("change", (e) => {
    // console.log(e.target.value);
    e.target.value= e.target.value.trim();

} );

pass.addEventListener("keypress", (e) => {
    // console.log(e.target.value);
    if( e.target.value.length< 8){
        passErr.style.display= "block";
    }
    else{
        passErr.style.display= "none";
    }
} );

