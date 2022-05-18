const RulesOfSegregation = () => {
    return (
        <>
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div style={{backgroundColor: "#379E6B"}} class="rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Zasada nr 1</div>
            <p class="text-gray-700 text-base">
                Pojemniki i worki na odpady są oznaczone różnymi kolorami. Każdy kolor oznacza inny rodzaj odpadów.
            </p>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#pojemniki</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#worki</span>
        </div>
        </div>
        <div style={{backgroundColor: "#379E6B"}} class="rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Zasada nr 2</div>
            <p class="text-gray-700 text-base">
                Meble i inne odpady wielkogabarytowe wrzucamy do specjalnych kontenerów. Odpady wielkogabarytowe można również zawieźć do PSZOKu.
            </p>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#meble</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#odpady wielkogabarytowe</span>
        </div>
    </div>

    <div style={{backgroundColor: "#379E6B"}} class="rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Zasada nr 3</div>
        <p class="text-gray-700 text-base">
            Elektroodpady, gruz lub odpady niebezpieczne zawozimy do PSZOKu.
        </p>
      </div>
        <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#elektroodpady</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#gruz</span>
        </div>
        </div>
    </div>
    </>
    )
}

export default RulesOfSegregation;