// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var sum=0;
    for(i=1;i<=10;i++){
      sum+=i;
    }
    return sum;
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  var arr=[];
  for(i=0,j=0;i<array.length;i++){
    if(array[i]%2===0){
      arr[j]=array[i];
      j++;
    }
  }
  return arr;
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  var arr=[];
  for(i=0;i<array.length;i++){
    arr[i]=Math.pow(array[i],2);
  }
  return arr;
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
 /* var sum=0;
  for(i=0;i<array.length;i++) sum+=array[i];
  return sum;*/
  // Otra solucion:
    var suma=0;
    for(var element of array) suma+=element;
    return suma;
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  for(i=0;num/Math.pow(10,i)>=1;i++){}
  return i;
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
