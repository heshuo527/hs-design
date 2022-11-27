function arrayIsEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  var newArr1 = JSON.parse(JSON.stringify(arr1)).sort();
  var newArr2 = JSON.parse(JSON.stringify(arr2)).sort();

  for (var i = 0; i < newArr1.length; i++) {
    if (newArr1[i] !== newArr2[i]) {
      return false;
    }
  }

  return true;
}

export default arrayIsEqual;