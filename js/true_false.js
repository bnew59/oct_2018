let unsorted = ["John", "Mary", "Alex", "Steve", "Mary", "John"]

let sorted = []

for (i = 0; i < unsorted.length; i++) {
    if (sorted.includes(unsorted[i])) {
        return "False"
            // sorted.push(unsorted[i])
    } else {
        return "True"
            // sorted.push(unsorted[i])
    }
}

console.log(sorted)




// let unsorted = ["John", "Mary", "Alex", "Steve", "Mary", "John"]

// function removeDups(array) {
//     let sorted = []
//     for (i = 0; i < array.length; i++) {
//         if (sorted.includes(array[i])) {
//             continue
//         } else {
//             sorted.push(array[i])
//         }
//     }
//     return sorted
// }

// console.log(removeDups(unsorted))