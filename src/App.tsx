const App = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="rounded-xl h-[45rem] w-[28.125rem] m-12 bg-blue-50">
        <img src="/illustration-hero.svg" className="rounded-t-xl" alt="Hero" />
        <div className="p-4">
          <div className="p-4 space-y-6">
            <h1 className="text-center text-4xl font-bold">Order Summary</h1>
            <p className="text-center px-6 text-gray-600 font-medium text-xl">
              You can now listen to millions of songs, audiobooks, and podecasts
              on any device anywhere you like!
            </p>
          </div>
          <div>
            <div className="flex my-12 px-10 items-center justify-between">
              <div className="flex gap-6">
                <img src="/icon-music.svg" className="size-14" alt="Music" />
                <div>
                  <h1 className="text-lg font-bold">Annual Plan</h1>
                  <span className="text-gray-600 font-semibold">
                    $59.99/year
                  </span>
                </div>
              </div>
              <a href="#" className="font-bold text-blue-700 underline">
                Change
              </a>
            </div>
            <div className="flex items-center justify-between mx-4 h-28 flex-col">
              <button className="text-lg text-white font-bold flex-1/2 bg-blue-700 w-full h-full rounded-xl shadow-2xl">
                Proceed to Payment
              </button>
              <button className="pt-8 text-md font-bold text-gray-600 flex-1/2">
                Cancel Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
