import React from 'react'
import HeaderElement from './HeaderElement';

function LeftHeaderGroup() {

  // var nameArr = ["Our Mission", "Meet The Team", "Sponsors"];
  // var childrenArr = [];

  // for(var x = 0; x < nameArr.length; x++) {
  //   childrenArr.push(<HeaderElement key={x} text={nameArr[x]}> </HeaderElement>);
  // }

    
  return (
    <div className='leftHeaderGroup'>
        {/* {childrenArr} */}
        <a href="https://www.instagram.com/stocks_investingclub/"> <img className= "socials" src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new--v1.png"/> </a>
    </div>
  )
}

export default LeftHeaderGroup