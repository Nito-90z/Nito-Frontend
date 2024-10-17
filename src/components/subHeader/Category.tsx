import { useState } from "react";
import { twMerge } from "tailwind-merge";
import MoreUpIcon from "../common/icons/MoreUpIcon";
import MoreDownIcon from "../common/icons/MoreDownIcon";

const OPTIONS = [
  "Electronics",
  "Computers",
  "Smart Home",
  "Arts & Craft",
  "Automotive",
  "Baby",
  "Beauty and Personal Care",
  `Women's Fashion`,
  `men's Fashion`,
];

type Props = {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
};

export default function Category({ selectedOption, setSelectedOption }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div className="relative inline-block mb-4 w-full">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={twMerge(
          "flex w-full items-center justify-between px-4 py-[10px] border border-border rounded-sm bg-white text-sm focus:outline-none",
          isOpen && "border-b-0"
        )}
      >
        <span>{selectedOption}</span>
        <span>{isOpen ? <MoreUpIcon /> : <MoreDownIcon />}</span>
      </button>
      {isOpen && (
        <ul className="w-full rounded-sm bg-white border border-t-0 border-border max-h-60 absolute overflow-auto z-30">
          {OPTIONS.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              className="px-4 py-[10px] text-sm text-gray cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
