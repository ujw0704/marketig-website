import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function Dashboard() {
  const { imageData} = useParams();
  const [imageVisible, setImageVisible] = useState(false);

  const toggleImageVisibility = () => {
    setImageVisible(!imageVisible);
  };

  return (
    <div>
      <button onClick={toggleImageVisibility}>Toggle Image</button>
      {imageVisible && (
        <img
          src={decodeURIComponent(imageData)}
          alt="Clicked Image"
          style={{ height: '200px', width: '200px' }}

        />
      )}
    </div>
  );
}

export default Dashboard;


