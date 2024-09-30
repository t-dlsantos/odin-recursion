function fibs(n) {
  const fibonacci = [];

  for(i = 0; i < n; i++) {

      if (i == 0 || i == 1)
          fibonacci.push(i);
      else
          fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }

  return fibonacci;
}

function fibsRec(n, array=[0, 1]) {
  if (array.length >= n)
      return array.slice(0, n)
  
  array.push(array[array.length - 1] + array[array.length - 2]);
  
  return fibsRec(n, array);
}

