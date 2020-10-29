import React from 'react'
import logo from '../../../assets/images/logo.svg'

function App() {
  return (
    <div className="h-screen content-center">
      <header className="bg-gray-900 h-full text-center text-white pt-24">
        <img src={logo} className="h-64 w-64 mx-auto animate-spin-slow" alt="logo" />
        <p>
          <span className="font-medium text-2xl">Edit</span>
          <code className="font-thin"> src/App.js</code>
          <span className="font-medium text-2xl"> and save to reload.</span>
        </p>
        <a
          className="text-blue-300 underline text-2xl"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p className="mt-20 flex justify-center">
          <a
            className="text-blue-300 underline text-2xl hover:text-blue-400 mx-3"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>

          <a
            className="text-blue-300 underline text-2xl hover:text-blue-400 mx-3"
            href="https://eslint.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ESlint
          </a>

          <a
            className="text-blue-300 underline text-2xl hover:text-blue-400 mx-3"
            href="https://github.com/airbnb/javascript"
            target="_blank"
            rel="noopener noreferrer"
          >
            Airbnb Style
          </a>

          <a
            className="text-blue-300 underline text-2xl hover:text-blue-400 mx-3"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TailwindCSS
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
