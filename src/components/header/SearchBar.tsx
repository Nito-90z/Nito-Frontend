import MoreIcon from '../common/icons/MoreIcon';
import Input from '../common/Input';

export default function SearchBar() {
  return (
    <header className='w-full h-20 bg-white flex items-center justify-between px-4 gap-1'>
      <button className='flex items-center justify-center w-8 h-8'>
        <MoreIcon />
      </button>
      {/* 인풋 박스의 넓이는 임의로 조정함 -> 피그마엔 259px로 되어 있음 */}
      <Input
        placeholder='상품명 검색'
        className='placeholder:text-gray placeholder:font-normal bg-platinum px-4 gap-1 rounded-sm w-72 h-11'
        type='search'
      />
      <button className='flex items-center justify-center h-7 w-7 font-normal text-base'>
        검색
      </button>
    </header>
  );
}
