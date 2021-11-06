console.log('This is color changer')
// variable assigning
const body = document.body
const h1 = document.querySelector('h1')
const spanColor = document.querySelector('.color')
// event
document.querySelector('#click').addEventListener('click', () => {
  console.log('clicked')
  const colorAndSum = rgb()
  const [color, sum] = colorAndSum
  if (sum < 550) {
    h1.style.backgroundColor = 'white'
  } else {
    h1.style.backgroundColor = 'black'
  }
  body.style.backgroundColor = color
  h1.style.color = color;
  spanColor.textContent=color;
})
// seperate function
function rgb () {
  let r = Math.floor(Math.random() * 255)
  let g = Math.floor(Math.random() * 255)
  let b = Math.floor(Math.random() * 255)
  return [`rgb(${r},${g},${b})`, r + g + b]
}

// const body=document.body;
// const span= document.querySelector('.color');
// const h1=  document.querySelector('h1')
// document.querySelector("#click").addEventListener("click",function(){
//     let makeColorReturnArray=makeColor();
//     let[colorCombination,...sumOfArray]=makeColorReturnArray;
//     let sum=sumOfArray.reduce((sum,current)=>sum+current);
//     body.style.backgroundColor=colorCombination;
//     document.querySelector('.color').textContent=colorCombination;
//     document.querySelector('h1').style.color=colorCombination;
//       if(sum>500){
//      document.querySelector('h1').style.backgroundColor="black";
//       }else{
//         document.querySelector('h1').style.backgroundColor="white";
//       }
// })
// function makeColor(){
//     let r=Math.floor(Math.random()*255);
//     let g=Math.floor(Math.random()*255);
//     let b=Math.floor(Math.random()*255);
//     return [`rgb(${r},${g},${b})`,r,g,b];
// }
