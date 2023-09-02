// import React, {useState}from 'react';
// import img1 from './img/pexels-giorgio-de-angelis-1413412.jpg';
// import img2 from './img/pexels-nishant-aneja-2393835.jpg';
// import img3 from './img/pexels-oliver-sjöström-1122410.jpg';

// import img5 from './img/pexels-pixabay-67557.jpg';
// import img6 from "./img/pexels-saad-khan-3687139.jpg"

// import img7 from "./img/pexels-jody-parks-4668487.jpg"
// import imp8 from "./img/pexels-pixabay-210095.jpg"
//  import {Link} from 'react-router-dom'




// function Body() {

// const images=[

//   {id:1, image:img1},
//   {id:2, image:img2},
//   {id:3, image:img3},
//   // {id:4,image:img4},
//   {id:5, image:img5},
//   {id:6, image:img6},
//   {id:7,image:img7}

// ];

//   return (
//     <div>
//       <section className="container">
//         <h5 style={{ color: "#09876c" }}><b>lets Ride</b></h5>
//         <div className="image-container">
//           {/* /* <Link to="/dashboard">

//           <img src={img1} alt="Image 1" />
//           </Link>
     
      
//           <img src={img2} alt="Image 2" />
//           <img src={img3} alt="Image 3" />
//           {/* <img src={img4} alt="Image 4" /> */}
//            {/* {/* <img src={img5} alt="Image 5" />
//           <img src ={img6} alt="Image 6"/>
//           <img src ={img7} alt="Image 7" /> 
// { */}
//       {

//       images.map((value,index)=>{
//         return <div>
//           <Link key= {`${value}${index}`}to={`/dashbord/${value}`}></Link>
//           <img src={value}>

//           </img>
//         </div>

        
//       })
//     }
            
        
    
      
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Body;
import React from 'react';
import img1 from './img/pexels-giorgio-de-angelis-1413412.jpg';
import img2 from './img/pexels-nishant-aneja-2393835.jpg';
import img3 from './img/pexels-oliver-sjöström-1122410.jpg';
import img5 from './img/pexels-pixabay-67557.jpg';
import img6 from "./img/pexels-saad-khan-3687139.jpg";
import img7 from "./img/pexels-jody-parks-4668487.jpg";
import { Link } from 'react-router-dom';

function Body() {
  const images = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 5, image: img5 },
    { id: 6, image: img6 },
    { id: 7, image: img7 }
  ];

  return (
    <div>
      <section className="container">
        <h5 style={{ color: "#09876c" }}><b>lets Ride</b></h5>
        <div className="image-container">
          {images.map((imageData, index) => (
            <div key={index}>
              {imageData.id} <Link to={`/dashboard/${encodeURIComponent(imageData.image)}`}>
                <img src={imageData.image} alt={`Image ${imageData.id}`} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Body;
