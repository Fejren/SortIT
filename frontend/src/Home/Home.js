import React, {useEffect, useState} from 'react';
import RulesOfSegregation from '../components/RulesOfSegregation/RulesOfSegregation';
import SearchInput from "../components/Search/SearchInput";
import axios from "axios";
import InfoPanel from "../components/LeftInfoPanel/InfoPanel";
import {AppContext} from "../AppContext/AppContext";
import Footer from "../components/Footer/Footer";

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
    <div className={"min-h-screen"}>
    <AppContext.Provider value={{trashes}}>
      <main>
      <InfoPanel />
      <SearchInput />
      <RulesOfSegregation />
      </main>
    </AppContext.Provider>
    </div>
  );
};

export default Home;