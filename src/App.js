import Navbar from './components/navbar';
// import './fonts/UKIJRu.woff';

function App() {
  return (
    <div className="dark:text-dark-text text-light-text dark:bg-dark-background bg-light-background  min-h-screen flex flex-col items-center ">
      <Navbar />
      {/* <header className="flex flex-col items-center justify-center">
        <img src='./favicon.ico.png' className="App-logo" alt="Logo" />
        <br />
        <p className='font-extrabold text-dark-text text-5xl'>Portfolio Coming Soon !!</p>
      </header> */}
    </div>
  );
}

export default App;
