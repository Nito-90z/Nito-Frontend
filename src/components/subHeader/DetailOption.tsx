'use client';

import React, { useState } from 'react';
import MoreUpIcon from '../common/icons/MoreUpIcon';
import MoreDownIcon from '../common/icons/MoreDownIcon';

export default function DetailOption() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('옵션');

  const options = [
    { label: 'Size 6 / 7131-dark Blue', price: '10,800', soldOut: true },
    { label: 'Size 6 / 7131-medium Blue', price: '10,800', soldOut: false },
    { label: 'Size 6 / 7131-medium Blue', price: '10,800', soldOut: true },
    { label: 'Size 6 / 7131-light Blue', price: '10,800', soldOut: false },
    { label: 'Size 8 / 7131-dark Blue', price: '10,800', soldOut: false },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: { label: any; price: any; soldOut: any; }) => {
    if (!option.soldOut) {
      setSelectedOption(`${option.label} - ${option.price}`);
      setIsOpen(false);
    }
  };

  return (
    <div className='relative inline-block w-full'>
      <button
        onClick={toggleDropdown}
        className={`flex w-full items-center justify-between px-4 py-3 border border-border rounded-sm bg-white text-sm focus:outline-none ${
          isOpen ? 'border-b-0' : ''
        }`}
      >
        <span>{selectedOption}</span>
        <span>{isOpen ? <MoreUpIcon /> : <MoreDownIcon />}</span>
      </button>

      {isOpen && (
        <div className='w-full rounded-sm bg-white border-t-0 border border-border max-h-60 absolute overflow-auto'>
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              className={`px-4 py-2 text-sm cursor-pointer ${
                option.soldOut ? 'text-gray cursor-not-allowed' : 'text-black'
              }`}
            >
              <div
                className={`${
                  option.soldOut ? 'font-normal' : 'font-semibold'
                }`}
              >
                {option.label}
              </div>
              <div
                className={`${
                  option.soldOut ? 'text-gray-400' : 'text-black'
                } mt-1`}
              >
                <span className='font-bold'>{option.price}원</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
