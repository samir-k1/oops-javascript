
 
//  const number=[1,2,3,4];

//  const nums=number.filter((num)=>{
//     return num>2;
//     console.log(nums)

//  })

//  const box=[]


// myNum.array.forEach(nums => {
//    if (nums>2) {
//       return nums
//    }
// });


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// const newNums= myNums.map((num)=> num+10)
//                .map((num)=>num*10)
//                .map((num)=>num-1)
// console.log(newNums);


const startNum=myNums.reduce((acc,cur)=>{
   console.log(`the acc value is ${acc} and cur value is ${cur}`)
   return ( acc+cur)
 },0  )
 console.log(startNum)

 





// const books = [
//    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//  ];


//  const choose= books.filter((bk)=>bk.genre==='History'&&bk.publish===1986)
//  console.log(choose)



