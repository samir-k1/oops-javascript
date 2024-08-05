// const array=[1,2,3,4,5,6];
// array.forEach(num => {
//     if (array==5) {
//         console.log("best number ");
        
        
//     }
//     console.log(num)
    
// });
// const array=[1,2,3,4,5,6];

// for (let i = 0; i < 6; i++) {
//     if (array[i]==3) {
//         console.log("three is the  number ")
//     continue;
        
//     }
//     const element = array[i];
// console.log(element )
    
// }


// let index=10;
// while (index<2) {
//     console.log(`value of index ${index}`)
//     index=index+2;
// }
// let myArray = ['flash', "batman", "superman"]


// let arr=0
// while (arr<myArray.length) {
    

// console.log(`value of ${myArray[arr]} `)

// arr= arr+1; 
// }

// let index= 0
// do {
//     console.log(`value od index ${index}Map`)
//     index++;
// } while (index<=10);



const greeting= "helloworld"
for (const greet of greeting) {
    console.log(greet)
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// for (const [key,value] of map) {
//     console.log(key,value)
    
// }
for (const key in Map) {
    if (Map.hasOwnProperty.call(Map, key)) {
        const element = Map[key];
        
    }
}


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
for (const [key,value] of myObject) {
    console.log(key,value)
    
}