// Arrays
export const Arreys_what_do_they_know_do_they_know_things_lets_find_out =()=> {
    // Ways to Create Arrays
    let arr = [];
    // Array literal ([])
    let arr2 = ["a", "b", "c"];
    // new Array()
    let arr3 = new Array(10);
    // Array.from()
    let string = "congratulations";
    let string_arr = Array.from(string);
    // Benefits of Array.from()

    // Multidimensional Arrays
    let arrey = new Array(10);

    for (let table = 0; arrey.length > table; table++) {
      arrey[table] = new Array(10);
    }

    for (let row = 0; arrey.length > row; row++) {
      for (let col = 0; arrey[row].length > col; col++) {
        arrey[row][col] = row * col;
      }
    }

    // Creating nested arrays
    let arr4 = [[...arr], [...arr2], [...arr3]];
    // Accessing nested elements
    let access = arr4[0];
    // Array Methods
    // Strings as array-like values
    // Array Iterator Methods
    // map()
    let mapped_arr5 = arrey.map((value, index, arr_itself) => {
      return `value : ${value} , index : ${index}  , arrLength : ${arr_itself.length}`;
    });
    // forEach()
    let forEach_arr6 = arrey.forEach((value, index, arr_itself) => {
      return `value : ${value} , index : ${index}  , arrLength : ${arr_itself.length}`;
    });
    // filter()

    let filterd_arr7 = arrey.filter((value, index) => value[index] % 2 === 0);
    // Making sparse arrays dense
    let sparse_arr8 = [1, , 2, , 3, , 4, , 5, , 6];
    let dense_arr9 = sparse_arr8.filter(() => true);
    // find()
    let found_arr10 = arrey.find(
      (value, index) => (value[index] % 2 === 0) & (value[index] !== 0),
    );
    // findIndex()
    let found_index_arr11 = arrey.findIndex(
      (value, index) => (value[index] % 2 === 0) & (value[index] !== 0),
    );
    // every()
    let check_if_all_little_shits_are_numbers = arrey.every(
      (value, index) => value[index] === Number(value[index]),
    );
    // some()
    let check_if_some_little_shits_are_strings = arrey.some(
      (value, index) => value[index] === String(value[index]),
    );
    // reduce()
    // Flattening Arrays
    // flat()
    let all_smoshed_togather = arrey
      .flat()
      .reduce((acumilator, value, index, arr_itself) => {
        return acumilator + value;
      }, 0);
    // reduceRight()
    let all_smoshed_togather2 = arrey
      .flat()
      .reduceRight((acumilator, value, index, arr_itself) => {
        return acumilator + value;
      }, 2025);
    
    // flatMap()
      let flatted_mapped_arr12 = arrey.flat().map((value , index , arrItself) => {
        return(value+1)
      })




    // Subarrays & Modification
    // slice()

    let sliced_arr13 = arrey.slice(  3 , 10 )

    // splice()

    let spliced_arr14 = arrey.splice(  0  , 10  , ...arrey )


    // fill()
    let filled_arr16 = arrey.fill( ...arrey , 0 , 10 )
    // copyWithin() (listed, but not really covered)



    // Array Searching & Sorting
    // indexOf()
    let index_of_first_even_number_thats_not_zero = arrey.flat().indexOf(2 , 0)

    // lastIndexOf()
    let index_of_last_even_number_thats_not_zero = arrey.flat().indexOf(81)
    // includes()
    // sort()
    // Array to String Conversion
    let joined_arr17 = arrey.join('----')
    // join()
    // Array-like Objects
    let arr_like_object = { 0 : 'a' , 1 : 'b' , 2 : 'c' , length : 3}
    // Objects with numeric keys
    // length property
    // Iterating array-like objects

    let arr_like_object2 = {} , i = 0 

    while( i < 10 ){
        arr_like_object2[i] =+ i
        i++
    }

    arr_like_object2.length = i

    for( let j = 0 ; arr_like_object2.length > j ; j++){

        arr_like_object2[j] = j + j
    }

    // Concatenation
    // concat()
    let empty_arr18 = []  , concated_arr18 = empty_arr18.concat(arrey)
    // Mutating Arrays
    // Adding elements
    // push()
    // unshift()
    // Removing elements
    // pop()
    // shift()
  };
