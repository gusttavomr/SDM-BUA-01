let numeros = [10 , 20 , 30 , 40 , 50]
console.log(numeros[2])

let frutas = ["maça","abacaxi","uva"];

frutas.push((frutas,index) => {
    console.log(`${index}: ${fruta}`);
    });

frutas.push("laranja")

frutas.unshift("melão")

console.log(frutas)

frutas.pop( );
frutas.shift();

frutas.splice(2,1)
console.log(frutas)


let mapa = new Map()

mapa.set("carlos","joana")
mapa.set(42,"idade")

console.log(mapa.get("carlos"))
