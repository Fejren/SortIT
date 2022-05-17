import React, {useEffect, useState} from 'react';
import axios from 'axios';

const SearchInput = () => {
  const [trashes, setTrashes] = useState([])
    useEffect(() => {
    const fetchData = async () => {
      const trashes = await axios(
        'http://127.0.0.1:8000/api/trash/trashes/',
      );
      console.log(trashes.data)
      setTrashes(trashes.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {trashes.map(trash => (
        <div key={trash.id}>{trash.name}</div>
      ))}
    </div>
  );
};

export default SearchInput;
