function ticoTeco(targetNumber) {
  const result = [];

  for (let i = 1; i < targetNumber; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      result.push('TicoTeco');
    } else if (i % 3 == 0) {
      result.push('Tico');
    } else if (i % 5 == 0) {
      result.push('Teco');
    } else {
      result.push(i);
    }
  }

  console.log(result);
}

ticoTeco(100);
