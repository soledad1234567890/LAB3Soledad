(() => {

  /* Excercises */

  /* First excercise */
  
      // [2, 4, 6, 8]
   let numbers = [1, 2, 3, 4, 5]; 
      let multiply = numbers.map(element => element * 5);
        console.log(multiply);
  

  /* Multiplique los numeros del arreglo por 5 */

  /*Resultado esperado: [5, 10, 15, 20, 25] */

  /* First excercise */

  /* Second excercise */
 


// el array a ordenar

let names = ["Jhosep", "Daniel", "Rodrigo", "Veronica"];
      names.sort((a, b) => {
        if (a == b) {
        return 0;
       }
           if (a < b) {
           return -1;
           }
            return 1;
});
console.log(names);

 /* Ordernar los nombres alfabeticamente */
 
  /* Resultado esperado: ["Daniel", "Jhosep", "Rodrigo", "Veronica"] */

  /* Second excercise */

  /* Thrid excercise */

  const data = ['a', 'b', 'z', 'r', 'a', 'c', 'r', 'a'];
  let result = [...new Set(data)];
  console.log( result);

  /* Dado un arreglo, crear otro sin letras repetidas */
  /* Resultado esperado: ['a', 'b', 'z', 'r', 'c'] */

  /* Thrid excercise */

  /* Fourth excercise */

  const largeWord = "abcdabcdABCD";
  


  /* Dado un string mostrar cuantas veces se repite cada letra*/
  /* Resultado: 
    {
      a: 2,
      b: 2,
      c: 2,
      d: 2,
      A: 1,
      B: 1,
      C: 1,
      D: 1
    }
  */

  /* Fourth excercise */

})();
