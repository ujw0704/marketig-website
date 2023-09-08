import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { context } from '../App'

function Dashboard() {
  const { image } = useParams();
  const { src } = useContext(context)
  console.log(image)
  const [imageVisible, setImageVisible] = useState(false);
  const [matchingImage, setMatchingImage] = useState('');

  const toggleImageVisibility = () => {
    setImageVisible(!imageVisible);
  };

  useEffect(() => {
    const findImage = () => {
      const match = src.find((sr) => {
        return sr.id ===  Number(image)
      })
      setMatchingImage(match.image)
    }
    findImage()
  }, [imageVisible])


  return (
    <div>
      <button onClick={toggleImageVisibility}>Toggle Image</button>
      {imageVisible && (
        <img
          src={matchingImage}
          alt=""
          style={{ height: '200px', width: '200px' }}

        />
      )}

    </div>
  );
}

export default Dashboard;


