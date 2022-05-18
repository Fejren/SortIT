import React from 'react';
import RulesOfSegregation from '../components/RulesOfSegregation/RulesOfSegregation';
import SearchInput from "../components/Search/SearchInput";

const Home = () => {

  return (
    <>
    <div className='grid place-items-start ml-9 mt-7'>
      <p className='text-sm font-normal text-gray-700 mb-1'>WYSZUKIWARKA ODPADÓW</p>
      <p className='text-5xl font-medium'>Co gdzie wyrzucić?</p>
      <p className='text-xs font-light mt-4 text-gray-700'>
        Jeśli nie wiesz, gdzie wyrzucić dany odpad, skorzystaj z mojej wyszukiwarki. <br />
        Wpisz nazwę przedmiotu i sprawdź, gdzie możesz go wyrzucić.
      </p>
    </div>
    {/* Middle container */}
      {/* Form */}
    <div className='grid place-items-center rounded m-10 align-middle'>
      <SearchInput />
    </div>
    {/* End of form */}
    <RulesOfSegregation />
    {/* End of middle container */}
    </>
  );
};

export default Home;