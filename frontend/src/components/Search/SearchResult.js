import React from 'react';

const SearchResult = query => {
  const result = query.query
  return (
  <>
    <div className='p-10 grid grid-cols-1 gap-5 w-full'>
        <div style={{backgroundColor: "#379E6B"}} className="p-10 gap-5 rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className='text-center'>
                <p className='text-5xl font-medium'>Znaleziono wyniki dla twojego wyszukiwania!</p>
                <p className='text-2xl font-medium mt-4 text-gray-700'>
                  {result.name} należy wyrzucić do pojemnika {result.trash_container.toUpperCase()}
                </p>
              </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default SearchResult;