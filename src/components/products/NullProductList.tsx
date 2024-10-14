import React from "react";
import NullProductIcon from "../common/icons/NullProductIcon";

export default function NullProductList() {
  return (
    <div className="flex flex-col justify-center items-center text-center max-h-[calc(100%-232px)] h-full text-text">
      <NullProductIcon />
      <div className="mt-3">
        <p>
          현재 상품 준비중이에요
          <br />
          조금만 기다려주세요!
        </p>
      </div>
    </div>
  );
}
