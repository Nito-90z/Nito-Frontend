import NullSearchResultIcon from "../common/icons/NullSearchResultIcon";

export default function NullProductList() {
  return (
    <div className="flex flex-col justify-center items-center text-center max-h-[calc(100%-82px)] h-full text-[#555555]">
      <NullSearchResultIcon />
      <p className="leading-7">검색 결과가 없어요!</p>
    </div>
  );
}
