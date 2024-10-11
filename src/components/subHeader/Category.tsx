'use client';
import React, { useState } from 'react';
import MoreUpIcon from '../common/icons/MoreUpIcon';
import MoreDownIcon from '../common/icons/MoreDownIcon';
import CheckBox from '../common/CheckBox';

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Cateogry');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: React.SetStateAction<string>) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = [
    'Electronics',
    'Computers',
    'Smart Home',
    'Arts & Craft',
    'Automotive',
    'Baby',
    'Beauty and Personal Care',
    `Women's Fashion`,
    `men's Fashion`,
  ];

  return (
    <div>
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
          <div
            className={`w-full rounded-sm bg-white border border-t-0 border-border max-h-40 absolute overflow-auto`}
          >
            {options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleSelect(option)}
                className='px-4 py-2 text-sm text-gray cursor-pointer'
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className='w-full px-2 bg-white py-4'>
        <div className='flex flex-col gap-3'>
          <div className='flex justify-between items-center'>
            <p>전체(12)</p>
            <div className='items-center'>
              <button onClick={() => {}} className='pr-2 rounded'>
                할인율순
              </button>
              |
              <button onClick={() => {}} className='pl-2 rounded'>
                낮은 가격순
              </button>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <CheckBox>역대 최저가</CheckBox>
            <CheckBox>품절 제외</CheckBox>
          </div>
          <div className='flex items-center gap-2'>
            <CheckBox>Lowest Ever</CheckBox>
            <CheckBox>Excluding out of stock</CheckBox>
          </div>
        </div>
      </div>
    </div>
  );
}
