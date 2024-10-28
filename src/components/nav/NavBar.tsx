'use client';

import HeartIcon from '../common/icons/HeartIcon';
import ProductIcon from '../common/icons/ProductIcon';
import SearchIcon from '../common/icons/SearchIcon';
import UserIcon from '../common/icons/UserIcon';
import CircleButton from '../common/CircleButton';
import PlusIcon from '../common/icons/PlusIcon';
import UserBrandIcon from '../common/icons/UserBrandIcon';
import SearchBrandIcon from '../common/icons/SearchBrandIcon';
import ProductBrandIcon from '../common/icons/ProductBrandIcon';
import HeartBrandIcon from '../common/icons/HeartBrandIcon';
import NavBarMenu from './NavBarMenu';

const LEFT_MENUS = [
  {
    title: '찜한 상품',
    value: 'favorite',
    path: '/',
    onIcon: <HeartBrandIcon />,
    offIcon: <HeartIcon className="h-5 w-[25.44px]" />,
  },
  {
    title: '상품',
    value: 'product',
    path: '/product-list',
    onIcon: <ProductBrandIcon />,
    offIcon: <ProductIcon />,
  },
];

const RIGHT_MENUS = [
  {
    title: '검색',
    value: 'search',
    path: '/search',
    onIcon: <SearchBrandIcon />,
    offIcon: <SearchIcon />,
  },
  {
    title: '마이페이지',
    value: 'mypage',
    path: '/mypage',
    onIcon: <UserBrandIcon />,
    offIcon: <UserIcon />,
  },
];

export default function NavBar() {
  return (
    <nav className="border-gray-200 bottom-0 left-0 z-40 flex h-16 w-full items-center justify-around border-t border-border bg-white">
      {LEFT_MENUS.map((menu) => (
        <NavBarMenu key={menu.value} menu={menu} />
      ))}
      {/* 중앙의 CircleButton */}
      <div className="relative -translate-y-5">
        <CircleButton
          className="flex items-center justify-center rounded-full bg-black"
          size={'lg'}
        >
          <PlusIcon size={'lg'} />
        </CircleButton>
      </div>
      {RIGHT_MENUS.map((menu) => (
        <NavBarMenu key={menu.value} menu={menu} />
      ))}
    </nav>
  );
}
