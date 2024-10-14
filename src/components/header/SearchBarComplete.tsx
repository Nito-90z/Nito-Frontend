'use client';
import CheckBox from '../common/CheckBox';
import SearchBar from './SearchBar';

export default function SearchBarComplete() {
  return (
    <div>
      <SearchBar />
      <div className='w-full py-1 px-4 bg-white text-sm'>
        <div className='flex items-center gap-1 text-gray-text mb-4'>
          <button onClick={() => {}} className='px-1 py-2 rounded'>
            할인율순
          </button>
          |
          <button onClick={() => {}} className='px-1 py-2 rounded'>
            낮은 가격순
          </button>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='flex justify-between items-center gap-6 text-gray-text'>
            <p>전체(12)</p>
            <div className='flex gap-2'>
              <CheckBox>역대 최저가</CheckBox>
              <CheckBox>품절 제외</CheckBox>
            </div>
          </div>
          <div className='flex items-center gap-6 text-gray-text'>
            <p>All(12)</p>
            <CheckBox>Lowest Ever</CheckBox>
            <CheckBox>Excluding out of stock</CheckBox>
          </div>
        </div>
      </div>
    </div>
  );
}
