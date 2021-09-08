import React from 'react';
import pic1 from './coverpage.jpg';
import pic2 from './coverpage.jpg';
import pic3 from './coverpage.jpg';
import pic4 from './coverpage.jpg';
import pic5 from './coverpage.jpg';
import pic6 from './coverpage.jpg';

/*
import pic2 from '/images/img1.jpg'
import pic3 from '/images/img2.jpeg'
import pic4 from '/images/img3.jpg'
import pic5 from '/images/img4.jpg'
import pic6 from '/images/img5.jpg'
*/


class component extends React.Component {


  constructor(props) {
    super(props)
    
      }
  


  componentWillMount(){

    const pictureArray = [{pic1}, {pic2}, {pic3}, {pic4},{pic5},{pic6}];
    const randomIndex = Math.floor(Math.random() * pictureArray.length);
    const selectedPicture = pictureArray[randomIndex];
   
  }


  render() {

    return < div  className="body">
        <h2>Home!</h2>
        <p>Welcome to the Book's web Home page.</p>
        <p>Here you will find all about books</p>
        <img className='coverimage' src='{this.selectedPicture}' alt="Book's Home"/>
    
    </div>
  }
}




export default component;