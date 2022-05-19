import React, {useEffect, useState} from 'react';
import RulesOfSegregation from '../components/RulesOfSegregation/RulesOfSegregation';
import SearchInput from "../components/Search/SearchInput";
import axios from "axios";
import InfoPanel from "../components/LeftInfoPanel/InfoPanel";
import {AppContext} from "../AppContext/AppContext";

const Home = () => {
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
    <>
    <AppContext.Provider value={{trashes}}>
      <InfoPanel />
      <SearchInput />
      <RulesOfSegregation />
    </AppContext.Provider>
    </>
  );
};

export default Home;