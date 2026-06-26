// TWo sum problem : one array of numbers two of the numbers that equal too target sum -->

export const nested_arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
export const Two_level_nested_array =[
  [
    [1, 2],
    [3, 4]
  ],
  [
    [5, 6],
    [7, 8]
  ]
];
export const Mixed_nested_example =  [
  [1, 2, [3, 4]],
  [5, 6, [7, 8]]
];
export let words =[
      "Apple",      // A
      "Banana",     // B
      "Cat",        // C
      "Dog",        // D
      "Elephant",   // E
      "Fox",        // F
      "Guitar",     // G
      "House",      // H
      "Ice",        // I
      "Jacket",     // J
      "Kite",       // K
      "Lion",       // L
      "Monkey",     // M
      "Notebook",   // N
      "Orange",     // O
      "Pizza",      // P
      "Queen",      // Q
      "Rabbit",     // R
      "Sun",        // S
      "Tiger",      // T
      "Umbrella",   // U
      "Violin",     // V
      "Wolf",       // W
      "Xylophone",  // X
      "Yak",        // Y
      "Zebra"       // Z
    ];


export const Loops = () => {
    let arr = [4, 1, 7, 2, 3, 5, 6, 9, 10, 8], sum = 6.5;

    // // write two sum problem in :

    // // while loop
    // function whileLoop(arg = [], target) {
    //     let i = 0
    //     mainLoop : while ( arg.length > i ){
    //         let j = i +1
    //            while (arg.length > j){
    //             let targetSum = (arg[i]+arg[j])/2
    //             if(targetSum === target ){
    //                 console.log(`${arg[i]}&${arg[j]}`)
    //                 break mainLoop;
    //             }
    //             j++
    //            }
    //         i++
    //     }
    // };
    // whileLoop(arr, sum);

    // // for loop 
    // function forLoop(arg = [], target) {
    //     mainLoop:for(let i = 0 ; arg.length > i ; i++){
    //         for(let j = i+1 ; arg.length > j ; j++){
    //              let targetSum = (arg[i]+arg[j])/2

    //              if(targetSum === target ){
    //                    console.log(`${arg[i]}&${arg[j]}`)

    //                 break mainLoop;
    //              }

    //         }
    //     }

    // };
    // forLoop(arr, sum);



    // function forOfLoop(arg = [], target) {
    //     mainLoop:for(let i of arg){
    //         for(let j of arg){
    //             let targetSum = (i+j)/2
    //             if(targetSum === target ){
    //                    console.log(`${i}&${j}`)
    //                    break mainLoop;
    //              }

    //         }
    //     }
    // };
    // forOfLoop(arr, sum);


    // // for in loop


    // function forInLoop(arg = [], target) {

    // }
    // forInLoop(arr)
}


export const Objects_what_do_they_Know_do_they_know_things_lets_find_Out = () => {

    //     let obj = new Object('congratulation')
  


    //     function spellOut( string , arg =[]){

    //         for (let i = 0 ; i < string.length ; i++){
    //            for(let j = 0 ; j < arg.length ; j++){
    //                 let spelled = arg[j].split('') 
    //                 if (spelled[0] === string[i].toUpperCase()){
    //                   console.log(`${string[i]} as in ${arg[j]}`)
    //                 }
    //            }
    //         }

    //     }

    //     spellOut(obj, words)



    // let o = { r : 'has a positive number for raduis'}
    //     let o1 = Object.create(o)
    //     o1.r1  = 6
    //     let o2 = Object.create(o1)
    //     o2.r2 = 7
    //     let o3 = Object.create(o2)
    //     o3.r3 = 8

    //     console.log( o1.r1 + o3.r2 )


    

    // console.log(Arr_from)


    // to Edit an arrey ------>
        let arr=['a','b','c','d','e']
        let insetThis = 'f'
            //1) asign an  index
            // // arr[arr.length] = insetThis ;
            //2) unshift() & shift()  methode 
            // arr.unshift(insetThis);
            // arr.shift()
            //* adds and removes at [0] 
            //3) pop() & push() methode
            //* adds and removes at arr[arr.length]
            //4)*splice()
    //to iterate over an arrey --->
        // 1)destructs value and index
        // for( let [index,value] of arr.entries()){
        //     console.log(index,value)
        // }
        //2)for each methode 
                    //callBack arrow function
            // arr.forEach(a => (
            //    console.log( a.toUpperCase())
            // ))




}