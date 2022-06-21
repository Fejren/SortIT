import React from 'react'

import Logo from '../../assets/images/logo.svg'

const Contact = () => {
  return (
    <>
    <p className='text-5xl font-medium text-center'>Nie znalazłeś odpowiedzi?</p>
    <div className='p-10 grid grid-cols-1  gap-5'>
        <div style={{backgroundColor: "#379E6B"}} className="p-10 gap-5 rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                
            <form class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3" action="#">
              <div className='text-center'>
                  <p className='text-5xl font-medium mb-2'>Pomóż nam rozwinąć wyszukiwarkę</p>
                  <p className="text-gray-700 text-base">
                    Prześlij nam informację o tym czego szukałeś i zostaw nam swój adres e-mail. Wrócimy do Ciebie z odpowiedzią i dodamy ten przedmiot do naszej bazy.
                  </p>
              </div>
              <div className='grid grid-cols-1 gap-5 '>
              <div className='mr-3'>
                  <label for="item" class="block text-base text-gray-700 mb-1">Szukany przedmiot</label>
                  <input
                    type="text"
                    name="item"
                    id="item"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                    rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
                    p-2.5 dark:placeholder-gray-400 dark:text-dark"
                    placeholder="Wpisz nazwę szukanego przedmiotu"
                    required
                  />
                </div>
                <div>
                <label for="email" class="block text-base text-gray-700 mb-1">Twój e-mail</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                    rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
                    p-2.5 dark:placeholder-gray-400 dark:text-dark"
                    placeholder="Podaj adres e-mail"
                    required
                  />
                </div>
                  <button class="bg-gray-700 hover:bg-gray-600 text-white font-bold w-full py-2 px-4 rounded">
                    Wyślij
                  </button>
                 
              </div>
              <div>
              <p className='text-5xl font-medium text-center mb-2'>Informacja</p>
                <p className="text-gray-700 text-base text-center">
                  Wysyłając zgadasz się na przetwarzanie danych osobowych (e-mail)
                </p>
              </div>
            </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact