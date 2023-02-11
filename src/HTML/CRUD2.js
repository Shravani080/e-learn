import React from 'react'

function CRUD2() {

    // let arrobj=[
    //     {name:'frobels school' , year:1995},
    //     {name:'prathiba high school', year:2020},
    //     {name:'jeevadhan school', year:2021},
    //     {name:'bhavitha school', year:1998},
    //     {name:'sushu mandhir', year:2022}
    // ]
    // console.log(arrobj)
    
    // let nearrobj = arrobj.filter((item)=> item.year >= 2020)
    // console.log(nearrobj)

    //   let newarrobj=[]
    //  for(let i=0; i<arrobj.length; i++){
    //     if(arrobj[i].year >= 2020){
    //         newarrobj.push(arrobj[i])
    //     } 
    //  } console.log(newarrobj)
   
    let namesArr = ["Sucharitha" , "Shravani", "Varun" , "Tinku", "srinivas", "Ramya" , "Sandeep"];
    // console.log(namesArr)

    let newarr = namesArr.filter((name)=> name.charAt(0).toUpperCase() === "S")
    console.log(newarr)

    let newarray=[]
    for(let i=0; i<namesArr.length;i++){
        if(namesArr[i].charAt(0).toUpperCase() === "S"){
         newarray.push(namesArr[i])
        }
    }console.log(newarray)
   
  return (
    <div>
      
    </div>
  )
}

export default CRUD2
