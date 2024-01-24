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

//function to not remove the same team element
function reddish(){
  document.querySelectorAll('.box').forEach(i1 => {
    if (i1.style.backgroundColor == 'blue'){
      document.querySelectorAll('.box').forEach(i2 => {
        if (i2.style.backgroundColor == 'greenyellow' && i2.innerText.length !== 0) {
          greenyellowtext =i2.innerText
          bluetext = i1.innerText

          bluecolor = ((Array.from(bluetext)).shift()).toString()

          getId = i2.id
          arr = Array.from(getId)
          arr.shift()
          aside = eval(arr.pop())
          aup = eval(arr.shift())
          a = aside + aup

          if (a % 2 == 0 && bluecolor == greenyellowcolor) {
            i2.style.backgroundColor = 'rgb(232 235 239)'
          }
          if (a % 2 !== 0 && bluecolor == greenyellowcolor){
            i2.style.backgroundColor = 'rgb(125 135 150)'
          }
        }
      })
    }
  })
}

//reset button


let tog = 1

document.querySelectorAll('.box').forEach(item => {


  item.addEventListener('click',function(){
    if (item.style.backgroundColor == 'greenyellow' && item.innerText.length == 0) {
      t = tog + 1
    }
    else if (item.style.backgroundColor == 'greenyellow' && item.innerText.length !== 0) {
      document.querySelectorAll('.box').forEach(i => {
        if (i.style.backgroundColor == 'blue') {
          blueId = i.id
          bluetext = i.innerText

          document.getElementById(blueId).innerText = ''
          item.innerText = bluetext
          coloring()
          insertImages()
          tog = tog + 1
        }
      })
    }

    let getId = color.id
     let  arr = Array.from(getId)
      arr.shift()
     arr.push('0')
     let aside = eval(arr.pop())
     let aup = eval(arr.shift())
     let  a = aside + aup
    
    //function to display available paths for all the pieces

    function whosturn(toggle){
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
      //King
      if(item.innerText == `${toggle}king`) {
         if (aside < 8) {
        document.getElementById(`b${a + 1}`).style.backgroundColor = 'greenyellow'
         }
        if (aside > 1) {
          document.getElementById(`b${a - 1}`).style.backgroundColor = 'greenyellow'
        }
        if (aup < 800) {
           document.getElementById(`b${a + 100}`).style.backgroundColor = 'greenyellow'
        }
        if (aup > 100) {
          document.getElementById(`b${a - 100}`).style.backgroundColor = 'greenyellow'
        }
        if (aup > 100 && aside < 8) {
          document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'greenyellow'
        }
        if(aup > 100 && aside > 1) {
          document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'greenyellow'
        }
        if (aup < 800 && aside < 8) {
          document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'greenyellow'
        }
        if(aup < 800 && aside > 1) {
          document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'greenyellow'
        }
        item.style.backgroundColor = 'blue'
      }
    }

    //Toggling the turn

    if (tog % 2 !== 0){
      document.getElementById('tog').innerText = "White's turn"
      whosturn('W')
    }
    if (tog % 2 == 0) {
      document.getElementById('tog').innerText = "Black's turn"
      whosturn('B')
    }
    reddish()
        }
      
    )}
                                         
)

//Moving the element
document.querySelectorAll('.box').forEach(hathitest => {
  hathitest.addEventListener('.click', function () {
    if (hathitest.style.backgroundColor == 'blue'){
      blueId = hathitest.id
      bluetext = hathitest.innerText

      document.querySelectorAll('.box').forEach(hathitest2 => {

        hathitest2.addEventListener('.click', function () {
          if (hathitest2.style.backgroundColor == 'greenyellow' && hathitest2.innerText.length == 0) {
            document.getElementById(blueId).innerText = ''
            hathitest2.innerText = bluetext
            coloring()
            insertImages()
          
          }
        })
      })
    }
  })
})
