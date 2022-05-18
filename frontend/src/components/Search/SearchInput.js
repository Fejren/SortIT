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
    // <div>
    //   {trashes.map(trash => (
    //     <div key={trash.id}>{trash.name}</div>
    //   ))}
    // </div>
    <>
    <div style={{backgroundColor: "#379E6B"}} class="flex flex-wrap rounded -mx-3 mb-6 text-white w-2/4">
      <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-xs text-gray-700 font-bold mt-3 mb-3" for="search">
          Nazwa odpadu
        </label>
        <input class="appearance-none block w-full text-gray-700 bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="search" type="text" placeholder="np. butelka" />
        <p class="text-xs italic text-gray-700 mt-3 mb-3">Jeżeli nie znajdziesz czego potrzebujesz, proszę o kontakt</p>
      </div>
    </div>
    </>
  );
};

export default SearchInput;
