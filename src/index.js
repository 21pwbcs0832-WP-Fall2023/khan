import React from 'react';
import ReactDom from 'react-dom';
import App from './App';  /*component base*/ 
import './index.css';


ReactDom.render(<App/>,document.getElementById('root'));

// const fullnsme = ['sajjad ' , 'Khan'];
// const biodata = [1 , ...fullnsme , 'male'];
// console.log(fullnsme);
// console.log(biodata);
// const fullnsme = {
//     sname: 'Sajjad',
//     lname: 'Khan'
// }
// const biodata = {
//     id: 1,
//  ...fullnsme,
//     gender:'male'
// }
// console.log(fullnsme);
// console.log(biodata);

// In the above piece of code , I use spread oprator (...).















// task 02 
// const cssStyle = { }

// let curDate = new Date(2024, 2, 4, 21 );
// curDate= curDate.getHours();
// let greeting = '';
// if(curDate >=1 && curDate <12){
//   greeting = 'Good Morning';
//   cssStyle.color = 'brown';
// }
// else if(curDate >=12 && curDate < 19){
//   greeting = 'Good Afternoon';
//   cssStyle.color = ' green';
// }
// else {
//   greeting = 'Good Night';
//   cssStyle.color = 'red';
// }

// ReactDom.render(
//   <>
//   <div className='div-class'>
//     <h1>Hello sir ,<span style = {cssStyle}> {greeting}</span></h1>
//     </div>
//   </>,
//   document.getElementById('root')
// );









 
// task 01 

// const name = 'Sajjad';
// const lname = 'Khan'
// const img1 = 'https://picsum.photos/250/300' 
// const img2 = 'https://picsum.photos/300/300' 
// const img3 = 'https://picsum.photos/350/300' 
// const img4 = 'https://picsum.photos/200'
// const img5 = 'https://picsum.photos/200/300.jpg'
// const img6 = 'https://picsum.photos/200/300.webp'
// const link = 'https://github.com/21pwbcs0832-WP-Fall2023/2nd_Project1'

// const heading = {
//   padding: '80px 0px',
//   textAlign: 'center',
//   font: 'bold',
//   textTransform: 'capitalize',
//   color: '#c63434',
//   textShadow: '0px , 0px 3px #ffecff',
//   fontFamily: 'Josefin Sans , sans-serif'
// };

// ReactDom.render(
//     <>
//   <h1 style = {heading}>My name is {name +' '+ lname}</h1> 
//   <div className='div_image'>
//   <img src={img1} alt = 'randomimage' />
//   <img src={img2} alt = 'randomimage' />
//   <a href={link} target='_khan'>
//   <img src={img3} alt = 'randomimage' />
//   </a>
//   <img src={img4} alt = 'randomimage' />
//   <img src={img5} alt = 'randomimage' />
//   <img src={img6} alt = 'randomimage' />
//   </div> 
//   </>,
//   document.getElementById('root')
// );








// import { jsx as _jsx } from "react/jsx-runtime";
// ReactDOM.render( /*#__PURE__*/_jsx("h1", {
//   children: "Hello World!!"
// }), document.getElementById('root'));

// const h1 = document.createElement('h1');
// h1.innerHTML = 'Hello World!';
// document.getElementById('root').appendChild(h1);





