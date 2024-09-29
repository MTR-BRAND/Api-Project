import { useEffect, useState } from 'react';
import Card from "./Card";
import JsonData from "./info.json";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Directly setting data from the imported JSON file
    setData(JsonData);
  }, []);

  return (
    <>
      <div className='flex flex-wrap gap-6 justify-center my-8 p-4'>
        {data.length > 0 ? (
          data.map((item) => (
            <Card
              key={item.id} 
              img={item.img}
              name={item.name}
              age={item.age || 'Unknown'}
              prof={item.profession || 'Not specified'}
            />
          ))
        ) : (
          <div className='text-lg'>Loading...</div>
        )}
      </div>
    </>
  );
}

export default App;
