'use strict';

/**
 * ICS4UC Final Project
 * 
 * Author:
 * Description:
 * 
 */
//inserting the images
function insertImages()
{
 document.querySelectorAll('.box').forEach(image => {
   if (image.innerText.length !== 0){
     if (image.innerText == 'white-pawn' || image.innerText == 'black-pawn' ){
  if (image.innerHTML = `${image.innerText} <img class = 'all-img all-pawn' src ="${image.innerText}.png" alt="">`
      )image.style.cursor = 'pointer'
     } 
     else{
       if (image.innerHTML = `${image.innerText} <img class = 'all-img all-pown' src ="${image.innerText}.png" alt="">`
         )image.style.cursor = 'pointer'
     }
   }
 })
}
insertImages()

//Time to colour the board:)

function coloring()
{
  const color = document.querySelectorAll('.box')

  color.forEach(color =>{
   let getId = color.id
   let  arr = Array.from(getId)
    arr.shift()
   let aside = eval(arr.pop())
   let aup = eval(arr.shift())
   let  a = aside + aup

    if (a % 2 == 0){
      color.style.backgroundColor = 'rgb(232 235 239)'
    }
    if (a % 2 !== 0){
      color.style.backgroundColor = 'rgb(125 135 150)'
    }
  })
}
coloring()

let tog = 1

document.querySelectorAll('.box').forEach(item => {


  item.addEventListener('click',function(){

    let getId = color.id
     let  arr = Array.from(getId)
      arr.shift()
     arr.push('0')
     let aside = eval(arr.pop())
     let aup = eval(arr.shift())
     let  a = aside + aup
    
    //function to display available paths for all the pieces

    function whosturnisit(toggle){
          //For the Pawn

          if (item.innerText.length == `${toggle}pawn`) {
            item.style.backgroundColor = 'blue';

            if (tog % 2!== 0 && aup < 800) {
              // First move for white pawns
              if (document.getElementById(`b${a + 100}` ) .innerText. length == 0) {
              document.getElementById(`b${a + 100}`).style.backgroundColor = 'greenyellow';
              if (document.getElementById(`b${a + 200}`) . innerText.length == 0 && aup < 300) {
              document. getElementById(`b${a + 200}`). style. backgroundColor = 'greenyellow';
              }
              }   
    if (aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0){
      document.getElementById(`b${a + 100 + 1}`).style.backgroungColor = 'greenyellow';
    }
              if (aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0){
                document.getElementById(`b${a +100 - 1}`).style.backgroundColor = 'greenyellow';
              }
            }
         if (tog % 2 == 0 && aup > 100)  {
              // First move for black pawns
              if (document.getElementById(`b${a - 100}`). innerText.length == 0) {
              document.getElementById(`b${a - 100}`). style.backgroundColor = 'greenyellow';
              if (document.getElementById(`b${a - 200}`). innerText.length == 0 && aup > 600) {
              document. getElementById(`b${a - 200}`).style. backgroundColor = 'greenyellow';
              }
              }
              if (aside < 8 && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0) {
              document.getElementById(`b${a - 100 + 1}`).style. backgroundColor = 'greenyellow';
              }
              if (aside > 1 && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0) {
                document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'greenyellow';
              }
         }

            //second move for pawns
            if (tog % 2 !== 0 && aup >= 800) {
           if (document.getElementById(`b${a + 100}`).innerText.length == 0){
             document.getElementById(`b${a + 100}`).style.backgroundColor = 'greenyellow';
           }  
              if (aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length !==0) {
                document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'greenyellow';
              }
              if (aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0) {
                document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'greenyellow';
              }
            }
            if (tog % 2 !== 0 && aup <= 100) {
              if (document.getElementById(`b${a - 100}`).innerText.length == 0) {
                document.getElementById(`b${a - 100}`).style.backgroundColor = 'greenyellow';
              }
              if (aside < 8 && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0) {
                document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'greenyellow';
              }
              if (aside > 1 && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0) {
             document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'greenyellow';   
            }     
          }

            
        }
      })
    })