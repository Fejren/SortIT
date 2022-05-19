import React from 'react';

const InfoPanel = () => {
  return (
    <div className='grid place-items-start ml-9 mt-7'>
      <p className='text-sm font-normal text-gray-700 mb-1'>WYSZUKIWARKA ODPADÓW</p>
      <p className='text-5xl font-medium'>Co gdzie wyrzucić?</p>
      <p className='text-xs font-light mt-4 text-gray-700'>
        Jeśli nie wiesz, gdzie wyrzucić dany odpad, skorzystaj z mojej wyszukiwarki. <br />
        Wpisz nazwę przedmiotu i sprawdź, gdzie możesz go wyrzucić.
      </p>
    </div>
  );
};

export default InfoPanel;
