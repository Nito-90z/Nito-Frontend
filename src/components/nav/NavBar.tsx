"use client";

import HeartIcon from "../common/icons/HeartIcon";
import ProductIcon from "../common/icons/ProductIcon";
import SearchIcon from "../common/icons/SearchIcon";
import UserIcon from "../common/icons/UserIcon";
import CircleButton from "../common/CircleButton";
import PlusIcon from "../common/icons/PlusIcon";
import UserBrandIcon from "../common/icons/UserBrandIcon";
import SearchBrandIcon from "../common/icons/SearchBrandIcon";
import ProductBrandIcon from "../common/icons/ProductBrandIcon";
import HeartBrandIcon from "../common/icons/HeartBrandIcon";
import NavBarMenu from "./NavBarMenu";
import { useRouter } from "next/navigation";

const LEFT_MENUS = [
  {
    title: "찜한 상품",
    value: "favorite",
    path: "/",
    onIcon: <HeartBrandIcon />,
    offIcon: <HeartIcon className="w-[25.44px] h-5" />,
  },
  {
    title: "상품",
    value: "product",
    path: "/product-list",
    onIcon: <ProductBrandIcon />,
    offIcon: <ProductIcon />,
  },
];

const RIGHT_MENUS = [
  {
    title: "검색",
    value: "search",
    path: "/search",
    onIcon: <SearchBrandIcon />,
    offIcon: <SearchIcon />,
  },
  {
    title: "마이페이지",
    value: "mypage",
    path: "/mypage",
    onIcon: <UserBrandIcon />,
    offIcon: <UserIcon />,
  },
];

export default function NavBar() {
  const router = useRouter();

  return (
    <nav className="bottom-0 left-0 z-40 w-full h-16 bg-white border-t border-border border-gray-200 flex items-center justify-around">
      {LEFT_MENUS.map((menu) => (
        <NavBarMenu key={menu.value} menu={menu} />
      ))}
      {/* 중앙의 CircleButton */}
      <div className="relative -translate-y-5">
        <CircleButton
          className=" bg-black rounded-full flex items-center justify-center"
          size={"lg"}
        >
          <PlusIcon size={"lg"} />
        </CircleButton>
      </div>
      {RIGHT_MENUS.map((menu) => (
        <NavBarMenu key={menu.value} menu={menu} />
      ))}
    </nav>
  );
}
