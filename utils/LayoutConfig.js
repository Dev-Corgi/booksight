"use client"
import { usePathname } from 'next/navigation';
import Header from '@/app/components/Header';
import SubLayout from '@/app/components/SubLayout';

export default function LayoutConfig() {
  const pathName = usePathname();

  const subLayout = ["/librarysearch","/mypage","/searchresult"];

   return (
    <>
   {subLayout.some(p => pathName.startsWith(p)) && <SubLayout pathName = {pathName}/>}
   </>
   )
}