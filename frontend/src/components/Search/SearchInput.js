import React, {useContext, useState} from 'react';
import "react-widgets/styles.css";
import Combobox from "react-widgets/Combobox";
import {AppContext} from "../../AppContext/AppContext";
import SearchResult from "./SearchResult";

const SearchInput = () => {
  const {trashes} = useContext(AppContext)
  const [query, setQuery] = useState('')

  console.log(query.name)
  // console.log(query.trash_container)


  return (
    <>
    <div className='grid place-items-center rounded m-10 align-middle'>
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
            value={query}
            onChange={query => setQuery(query)}
          />
          <p className="text-xs italic text-gray-700 mt-3 mb-3">
            Jeżeli nie znajdziesz czego potrzebujesz, proszę o kontakt
          </p>
        </div>
      </div>
      {query.name && <SearchResult query={query} />}
    </div>
    </>
  );
};

export default SearchInput;
