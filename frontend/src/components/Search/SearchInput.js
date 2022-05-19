import React, {useEffect, useState} from 'react';
import "react-widgets/styles.css";
import axios from 'axios';
import Combobox from "react-widgets/Combobox";

const SearchInput = () => {
  const [trashes, setTrashes] = useState([])
  const [selectedTrash, setSelectedTrash] = useState(trashes[0])
  const [query, setQuery] = useState('')

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
    <>
    <div style={{backgroundColor: "#379E6B"}} className="flex flex-wrap rounded -mx-3 mb-6 text-white w-2/4">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-xs text-gray-700 font-bold mt-3 mb-3" htmlFor="rw_4_input">
          Nazwa odpadu
        </label>
        <Combobox
          data={trashes}
          key={'id'}
          placeholder="np. butelka"
          textField={'name'}
          messages={{
            emptyList: "Podana nazwa nie istnieje w bazie danych"
          }}
        />
        <p className="text-xs italic text-gray-700 mt-3 mb-3">Jeżeli nie znajdziesz czego potrzebujesz, proszę o
          kontakt</p>
      </div>
    </div>
    </>
  );
};

export default SearchInput;
