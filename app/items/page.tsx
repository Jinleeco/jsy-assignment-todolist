"use client";
import { usePathname } from "next/navigation";
import ChecklistDetail from "@/app/components/ChecklistDetail";

const ItemsPage = () => {
  const pathname = usePathname(); // 현재 경로 가져오기
  const segments = pathname.split("/"); // "/"로 경로를 분리
  const itemId = segments[segments.length - 1]; // 마지막 세그먼트 추출

  if (!itemId || isNaN(Number(itemId))) {
    return <p>Invalid or missing Item ID</p>; // 잘못된 itemId 처리
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      <ChecklistDetail id={Number(itemId)} />
    </main>
  );
};

export default ItemsPage;