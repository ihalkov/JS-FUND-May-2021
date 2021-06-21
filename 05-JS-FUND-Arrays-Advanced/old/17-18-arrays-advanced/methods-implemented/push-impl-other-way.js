function push(arr, ...elements) {
    // ...elements give me like array, rest operator

    let arrLength = arr.length + elements.length;
    for (let i = 0; i < arrLength; i++) {
       arr[arr.length] = elements[i];
    }
    
    return arr.length;
}

push([1, 2, 3], 'a', 3);