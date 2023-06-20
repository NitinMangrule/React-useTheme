import * as React from 'react';

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header = ({ theme, toggleTheme }) => {
  return (
    <>
      <header
        className={`bg-white   ${
          theme === 'dark' ? 'dark shadow shadow-[#696969]' : 'shadow'
        }`}
      >
        <nav className="container mx-auto px-4 py-2 flex justify-between items-center h-20">
          <div>
            <a href="#" className="text-gray-800 font-bold">
              Logo
            </a>
          </div>
          <div className="flex justify-center space-x-8 items-center">
            <a href="#" className="text-gray-600">
              Link 1
            </a>
            <a href="#" className="text-gray-600">
              Link 2
            </a>
            <a href="#" className="text-gray-600 ">
              Link 3
            </a>
            <a href="#" className="text-gray-600 ">
              Link 3
            </a>
          </div>
          <div className="flex justify-end items-center">
            <input
              type="checkbox"
              id="toggleButton"
              className="hidden"
              checked={theme === 'dark'}
              onChange={toggleTheme}
            />
            <label
              htmlFor="toggleButton"
              className="bg-gray-300 w-14 h-7 rounded-full cursor-pointer flex items-center transition duration-300 ease-in-out"
            >
              <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                  theme === 'dark' ? 'translate-x-8' : ''
                }`}
              ></div>
            </label>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
