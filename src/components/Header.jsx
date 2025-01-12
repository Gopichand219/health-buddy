import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-2 bg-white shadow">
      <div className="flex items-center space-x-2">
        <button className="text-black-500 text-lg">
          <span className="material-icons">arrow_back</span>
        </button>
        <div>
          <h2 className="text-sm font-bold text-grey-800 flex items-center">
            Billekahalli
            <span className="material-icons text-black-300 ml-1">place</span>
          </h2>
          <p className="text-xs text-gray-600 truncate">
            Sarvabhoumanagar Billekahalli...
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative">
          <span className="material-icons text-black-500 text-3xl">account_balance_wallet</span>
          <span className="absolute -top-1 right-0 text-sm bg-blue-500 text-white rounded-full px-1.5 py-0.5">
            4529
          </span>
        </button>
        <button className="relative">
          <span className="material-icons text-light-500 text-3xl">shopping_cart</span>
          <span className="absolute -top-1 right-0 text-sm bg-blue-500 text-white rounded-full px-1.5 py-0.5">
            1
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
