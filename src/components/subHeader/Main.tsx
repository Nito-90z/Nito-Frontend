'use client';

import HeaderAlarmIcon from '../common/icons/HeaderAlarmIcon';

export default function Main() {
  return (
    <div>
      <header className='w-full bg-white p-4 flex items-center justify-between'>
        <h1 className='text-2xl gap-2 font-bold text-black'>찜한 상품(5)</h1>
        <div className='flex items-center'>
          <button>
            <HeaderAlarmIcon />
          </button>
        </div>
      </header>

      <div className='w-full px-3 bg-white flex items-center justify-between'>
        <div className='flex items-center gap-1'>
          <button onClick={() => {}} className='px-1 rounded'>
            할인율순
          </button>
          |
          <button onClick={() => {}} className='px-1 rounded'>
            낮은 가격순
          </button>
        </div>
        <button className='text-sm'>편집</button>
      </div>
    </div>
  );
}
