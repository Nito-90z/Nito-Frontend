"use client";

import Button from "@/components/common/Button";
import SelectHeader from "@/components/header/SelectHeader";
import ProductList from "@/components/products/ProductList";
import NullProductList from "@/components/products/wishList/NullProductList";
import Main from "@/components/subHeader/Main";
import { FavoriteProduct } from "@/models/product";
import { useState } from "react";

// 찜한 상품 리스트
const PRODUCTS: FavoriteProduct[] = [
  {
    id: 1,
    product: {
      id: 101,
      title: {
        enTitle: "Wireless Headphones",
        koTitle: "무선 헤드폰",
      },
      image:
        "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
      presentPrice: "99.99",
      isLowestPriceEver: true,
      isOutOfStock: false,
      discountRate: 10,
      isStopSelling: true,
    },
    isAlarm: true,
  },
  {
    id: 2,
    product: {
      id: 102,
      title: {
        enTitle: "Smartphone",
        koTitle: "스마트폰",
      },
      image:
        "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
      presentPrice: "599.99",
      isLowestPriceEver: false,
      isOutOfStock: false,
      discountRate: 15,
      isStopSelling: false,
    },
    isAlarm: false,
  },
  {
    id: 3,
    product: {
      id: 103,
      title: {
        enTitle: "Bluetooth Speaker",
        koTitle: "블루투스 스피커",
      },
      image: null,
      presentPrice: "49.99",
      isLowestPriceEver: true,
      isOutOfStock: false,
      discountRate: 5,
      isStopSelling: false,
    },
    isAlarm: true,
  },
  {
    id: 4,
    product: {
      id: 104,
      title: {
        enTitle: "Gaming Mouse",
        koTitle: "게이밍 마우스",
      },
      image:
        "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
      presentPrice: "29.99",
      isLowestPriceEver: false,
      isOutOfStock: false,
      discountRate: 20,
      isStopSelling: false,
    },
    isAlarm: false,
  },
  {
    id: 5,
    product: {
      id: 105,
      title: {
        enTitle: "4K Monitor",
        koTitle: "4K 모니터",
      },
      image: null,
      presentPrice: "399.99",
      isLowestPriceEver: true,
      isOutOfStock: false,
      discountRate: 25,
      isStopSelling: false,
    },
    isAlarm: true,
  },
];

export default function HomePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [selected, setSelected] = useState<number[]>([]);
  const selectedCount = selected.length;

  const handleSelect = (id: number) => {
    if (selected.includes(id)) {
      setSelected((prev) => prev.filter((item) => item !== id));
    } else {
      setSelected((prev) => [...prev, id]);
    }
  };
  const handleEditing = () => {
    setIsEditing((prev) => !prev);
    setSelected([]);
  };
  const handleDelete = () => {
    if (selectedCount === 0) return;
    // API : 찜한 상품 목록 업데이트
    setSelected([]);
  };
  return (
    <section className="pb-4 h-full overflow-y-auto">
      {isEditing ? (
        <SelectHeader
          mainText={
            selectedCount === 0
              ? "상품 선택"
              : `${selectedCount}개의 상품 선택됨`
          }
          buttonText="완료"
          onClick={handleEditing}
        />
      ) : (
        <Main count={PRODUCTS.length} onEditing={() => setIsEditing(true)} />
      )}
      {PRODUCTS.length === 0 ? (
        <NullProductList />
      ) : (
        <ProductList
          products={PRODUCTS}
          isEditing={isEditing}
          selected={selected}
          onSelect={handleSelect}
        />
      )}
      {isEditing && (
        <div className="z-50 absolute -bottom-16 p-5 left-0 w-full bg-white">
          <Button disabled={selectedCount === 0} onClick={handleDelete}>
            삭제
          </Button>
        </div>
      )}
    </section>
  );
}
