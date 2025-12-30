
function steamrollArray(arr) {
  const flattenedArray = [];

  // Loop through the array
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // If it's an array, we "steamroll" it again recursively
      // We use the spread operator (...) to push the individual items
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      // If it's not an array, just push the value
      flattenedArray.push(arr[i]);
    }
  }

  return flattenedArray;
}

