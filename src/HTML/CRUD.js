import React from 'react'

function CRUD() {
    
//1.string CRUD
// let str='shravani'  //C
// console.log(str)  //R
// let str2=str.replace('shravani','chinni') //U
// console.log(str2)
// // let str2=str.replace('h','') //D
// let str3= str.slice(0,1) + str.slice(2,str.length);
// let str4 = str + 10;
// console.log(str3);
// console.log(str4); //shravani10 
 


//2.Array CRUD
// let arr1=['a','b','c','d']  //C
//  console.log(arr1[1]) //R
//     arr1[1]='S'  //U
//  console.log(arr1) 
//  arr1.splice(2,1) //D
//  console.log(arr1) 

//  //3.object CRUD

//  let obj={name:'kanny',age:21,nationality:'india'}  //C
//  console.log(obj.name) //R
//      obj.name='varun' //U
//  console.log(obj) 
//      delete obj.nationality //D
//  console.log(obj)


//4.Array of objects CRUD

// let arrobj=[                         //C
//     {id: 1, name:'chinni',age: 18},
//     {id: 2, name:'kanny',age: 19},     
//     {id: 10, name:'kanny',age: 19},     
//     {id: 3, name:'tinku',age:26},
// ]

//  arrobj.forEach((item)=> item.country='india')
// console.log(arrobj)

//   let ind= arrobj.findIndex((obj) => obj.id === 10);
//   console.log(ind);
// console.log(arrobj.splice(ind,1)) 

//  console.log(arrobj[1].name) //R
//    arrobj[1].name='varun'  //U
//  console.log(arrobj)
//    arrobj.splice(1,1)     //D
//   console.log(arrobj)


// for(let i=0; i< arrobj.length; i++){
//     if(arrobj[i].age >= 20){
//         arrobj[i].isAdult= 'Yes'    //forloop
//     }else{
//         arrobj[i].isAdult='No'
//     }
    
//     console.log(arrobj[i])
// }


// for(let person of arrobj){
//     if(person.age >= 20){
//         person.isAdult='Yes'
//     }else{
//         person.isAdult='N0'
//     }
//     console.log(person)
// }


//  let nameArr = [
//  {firstName: 'Shravani', lastName: 'Goud'}, 
//  {firstName: 'Varun', lastName: 'Goud'}, 
//  {firstName: 'Sandeep', lastName: 'Goud'}
// ];
//   console.log(nameArr)
  
//   let convArr=[]
//   for(let i=0; i < nameArr.length; i++ ){
//      convArr.push( nameArr[i].firstName  + nameArr[i].lastName);
//     }
//     console.log(convArr) 
//     console.log(nameArr)
  

// function multiple2(arr){
//     // let mulArr = arr.map((num)=> num * 2)
//     // console.log(mulArr);
//     // console.log(arr);
//     // return mulArr;

//     let mulArr = []
     
//     for(let i=0; i< arr.length; i++){
//         mulArr.push(arr[i] * 2)
//     } 

//     return mulArr
// }
//  console.log(multiple2([1,2,3]))

  return (
    <div>
      
    </div>
  )
}

export default CRUD


