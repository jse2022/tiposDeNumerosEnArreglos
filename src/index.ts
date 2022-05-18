import "./styles.css";

let dimensionArreglo: number = Number(prompt(`Ingrese dimension del arreglo`));
let arregloNumeros: number[] = new Array(dimensionArreglo);
let b: number = 0;
let contador: number = 1;
let contadorCero: number = 0;
let contadorPositivos: number = 0;
let contadorNegativos: number = 0;
for (let x = 0; x < dimensionArreglo; x++) {
  let numeroArreglo: number = Number(
    prompt(`Ingrese Numero: ${contador} de ${dimensionArreglo}`)
  );

  arregloNumeros[x] = numeroArreglo;
  contador++;

  if (numeroArreglo === 0) {
    contadorCero++;
  }
  if (numeroArreglo > 0) {
    contadorPositivos++;
  }
  if (numeroArreglo < 0) {
    contadorNegativos++;
  }
}
console.log(`Arreglo: ${arregloNumeros}`);
console.log(`Se ingreso ${contadorCero} ceros`);
console.log(`Se ingreso ${contadorPositivos} positivos`);
console.log(`Se ingreso ${contadorNegativos} negativos`);
