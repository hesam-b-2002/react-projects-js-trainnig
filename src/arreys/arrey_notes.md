```javascript
import { nested_arr , Mixed_nested_example ,words, Two_level_nested_array } from "./trainnigScript";

export const ArreyMethodes = () => {
        // ways to create Arreys
        // comma seperated inside a sqeer braket : 
let Arr = ['a','b','c','d']
        Arrey constructor
let Arr_con = new Array(1)
        Arrey from methode
        
let str = 'congratulation'
let Arr_from = Array.from(str)
console.log(Arr_from)
        // benefit of Arrey.From :
let str = 'string'
function toCase(arg,arr=[]){
arr.push(arg.toUpperCase())
console.log(arg)
}

    let Arr_from = Array.from(str,toCase(str))



                //  multidimensional arrey ---->

                let table = new Array(10) //creates an arrey with 1 - 9 index with th val of undefined

                for(let i = 0 ; table.length > i ; i++){
                    table[i] = new Array(10) // creates a nested arrey for each undefined value
                                            arrey with 1-9 index with val of undifined
                }

                for(let row = 0 ; table.length > row ; row++ ){
                    go through main table arrey
                    for(let col = 0 ; table[row].length > col  ; col++  ){
                        go through nested table arrey and fills them with row * col which are just indexes
                        table[row][col] = row * col
                    }
                }
                console.log(table[6][7])


            arrey methodes ---->
                     strings are treated like arreys
                             but , their value is still string and
                            is.Arrey() methode returnes false on them

             Array Iterator Methods ---- >
                they iterate over an arrey and acept a function which is invoked as
                a methode for each element



                map()
        let newArrey = words.map((value , index , arrey ) => {
                return(
                        {
                                value : value ,
                                index : index ,
                                OriginalArreyLength : arrey.length
                        }
                )
        })
        console.log(newArrey)

                forEach()
                words.forEach(
                        the callBack  invoked is called with three args , value , index , arrey its self
                        (value , index , arrey) =>
                                console.log(
                                        `value:${value} | index:${index} | arrey:${arrey}`
                                ));
                filter()
        the function  in filter() methode and it returnes an arrey filled with
        elements that return true after being compared to the predict

            let newArrey = words.filter(( value , index , arrey )=> value.length < 5 );
                                                                returns 5 letter  words
        console.log(newArrey)

        if u pass a spars arrey to filter() it skips the miising elements
        so to make an arrey dense(with no missing or undifined elements) :
        let arr=[1,,3,,5,,6,,7,,8,,,9]
        let denseArr = arr.filter(() => true );
        console.log(arr.length) //output : 14
        console.log(denseArr)  //output : [1,3,5,6,7,8,9] length:7


                findIndex() | find()
        same shit as filter but they stop after finding the first element that
        returns true compared to their predict function
        let apple = words.find((word) => word.toLowerCase() === 'apple') // finds element
        let appleIndex = words.findIndex((word) => word.toLowerCase() === 'apple') // finds its index
        console.log(`value = ${apple} , index = ${appleIndex}`) // value = Apple , index = 0
        if not found , output  would be :
        value = undifined , index = -1


        every() | some()
        has predict function like find() & findIndex()

        every() :
        only iterates the whole shit if it's all evaluates to true

        u know since it has to make sure if all the shit evaluates to true and then retuns true

        stops the momment one liitle shit evaluates to false

        let do_All_Of_Them_Really_Start_With_Capital_Letter = words.every((word)=>
                word[0] === word[0].toUpperCase())// returns true and iterates the whole shit

        some() :
        only iterates the whole shit if  all little shits (arrey elements) evaluate
                 to false and then returns false
        stops when a little shit evaluates to true  ,like 'shit my job is done here'

        let do_Some_Of_Them_Really_Start_With_Lower_Case_Letter =  words.some((word)=>
                word[0] === word[0].toLowerCase()) //returns false and iterates the whole shit

                reduce() | reduceRight()
                        reduce() :
                                combines all little shits till it one remains
                                takes two args :
                                         1) a function (reduction function)
                                         2) an optional argument that u pass to the reduction function

                               let arrWords = words.reduce( ( acumilator , value , index , arrey ) => {
                                console.log(`value:${value} | index:${index} | arrey:${arrey.length}`)
                                        value , index and arrey come after first argument
                                        which is the value to be combined or blended
                                        return(acumilator.concat(value))
                                } , words[0] // by stating words[0] ur telling it to treat the
                                                liitle shit with index 0 as initial value
                                                otherwise the index[0] is skipped and not
                                                iterated bc js is an asshole
                        )
                                so reduce arguments  :
                                1) reduction function( acumilator , value , index , arrey )
                                2) initial value u pass to reduce so
                                        the first little shit doesnt get skipped like arr[0] or
                                        another initail value
                        reduceRight()
                        same shit but starts at last index arr[arr.lenhth-1]
                                let arr_words = words.reduceRight((acumilator,value , index , arrey) =>{
                                        console.log(`value:${value} | index:${index} | arrey:${arrey.length}`)
                                        return ( acumilator.concat(value) )
                                })
                                console.log(arr_words)
             Flattening arrays with flat() and flatMap() ---->
                flat():
                        .flat() methode retutnes a new arrey if the little shits
                                in the arrey are arreys themselves it flattens them
                                        nested_arr = [[1, 2, 3],[4, 5, 6],  [7, 8, 9]];
                        let flattenArr = nested_arr.flat()
                                        flatenArr = [1,2,3,4,5,6,7,8,9]
                        to flat an arrey nested in n amount of arreys u pass a number as an argument
                                        Two_level_nested_array = [
                                          [
                                            [1, 2],
                                            [3, 4]
                                          ],
                                          [
                                            [5, 6],
                                            [7, 8]
                                          ]
                                        ];

                         let flatenTwoLevelArr = Two_level_nested_array.flat(2)
                                       output : (8) [1, 2, 3, 4, 5, 6, 7, 8]
                .flatMap()
                        same as a.flat(f).map(f)
                let flattenMap = Mixed_nested_example.flatMap((one_depth_flaten_componant)=>{
                        return one_depth_flaten_componant
                })
             Subarrays with slice(), splice(), fill(), and copyWithin() ---->



                        .slice() :
                                does not mutate
                                takes two args :
                                        let slicedWords = words.slice(22,[words.length])
                                        console.log(slicedWords)
                                        creates a subarrey containing elements from the first arg up to arg two
                                        but not containing it
                                if its invoked with 1 argument it returnes all little shits from that point
                                treats it like the first  argument
                                let partialySlicedWords = words.slice(words.length-1) //returnes last element
                                        console.log(partialySlicedWords)



                .splice() methode removes , inserts  and all the shits
                        if used for removing splice insets deleted little shits into a new arrey MUTATING ORG SHIt
                        the first arrey
                fisrt arg is the start index and second arg is delete count
                words.splice( 0 , 20 )
                        console.log(words) // is mutated and contains last 6 little shits
                let splicedWords = words.splice(0,20)
                        console.log(splicedWords)  //contains deleted little shits
                         words.splice( 0 , 20 , 'little shit')
                by following secomd argument by desired little shit u add the little shit instead of fitrst arguments index
                and if u have more little shits it follows the little shit
                        let insertedBySplice = words.splice(0 , words.length , ...words)
                        this first removes all 26 elements then adds all into it again
                        console.log(insertedBySplice)

                .fill(arg , start index , end index ) :
                        fills the arrey with its arg
                        no example for this shit since its easy




             Array Searching and Sorting Methods ---->
                        indexOf() || lastIndexOf()
                                index searches the  arr ( start to end) returnes the first little shits index
                                        let first_index = words.indexOf('Zebra' , 24)
                                        let last_index = words.lastIndexOf('Apple',0)
                                the optional second argument is where the search starts
                                u can abuse this methode to make these methodes search and iterate the wole shit
                                and return an arrey of results
                                thats possible by switching the second arg(start index ) dynamically

                                function words_that_have_x_in_them ( x , arg = []) {
                                        let results = [] , len = 0

                                        while( arg.length > len ){

                                                let pos = arg[len].lastIndexOf( x , len )

                                                if( arg[len][pos] === x ){
                                                        results.push(arg[len])

                                                }

                                                len++
                                        }

                                        console.log(results)

                                };

                                words_that_have_x_in_them('a' , words)

                                indexOf() searches the arr( end to start ) returnes the first little shits index

                        includes() ---- >
                                takes a single argument retuens true or false
                                the diffrence wuth indexof() is it detects (NAN) and index does not


                        sort() takes a compersion function arg that takes two args :
                                a.sort(function( a , b ) => {})

                                let a = ["ant", "Bug", "cat", "Dog"];

                                let sorted = a.sort( (a,b) =>{
                                       a - b
                                })
                                console.log(sorted)



                arrey to string conversion ----->
                        join() :
                                join methode converts all arrey little shits into strings and concatenates them
                                can be used for creating logs and error messages
                        let joined_words = words.join('  ')
                        console.log(joined_words)
                                u can pass an a seperator to the methode if not comma is used




                        arrey like objects ---- >
                        arrey are special objects that have indexes under the hood
                        if u can give an object numeric keys and a length u can treat it almostly like an arrey

                                let a = {} // empty object
                                let i  = 0 // index
                        while( i < 10){
                                a[i] = i

                                i++
                        } // creates numeric indexes
                        a.length = i // gives it length property
                for ( let j = 0 ; a.length > j ; j++){
                        let total = j // iterates through a like an arrey
                }

                concat() ---- >
                        concat returns an arrey without changing the orginal one it's invoked on
                                words.concat()
                        u can pass an arrey or single little shits to it as arguments
                                and it adds them to the returned arrey :
                                let words_and_numbers = words.concat(1,2,3,4,5) // adds 1,2,3... to the returned arrey
                                let words_and_nested_arreys = words.concat([1,2,3,4,[5]]) // flattens the arrey passed to it by depth of one
                                        output = [...words ,1,2,3,4,[5]]
                                let otherShits = ['other shits ']
                                let words_and_another_arrey = words.concat(otherShits)
                                        output : [...words , 'other shits']

                to mutate an arrey
                        add to an arrey :
                                push() & unshift() :
                        push():
                                adds it's argument to the end of an arrey
                                it does not flatten it unless u use .push(...arr) mthode
                        unshift() :
                                adds to the start and nodges indexes to higher ones
                        remove from an arrey :
                                pop() & shift() :
                        pop() :
                                removes from the end of an arrey
                        shift():
                                reomves the firs element of the orginal arrey


};

```