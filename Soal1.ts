const bubbleSort = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

// Contoh penggunaan
const array = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(array);

console.log("Array yang diurutkan: " + sortedArray.join(", "));
