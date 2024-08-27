"use client"
import { usePathname } from 'next/navigation';
import Header from '@/app/components/Header';
import SubLayout from '@/app/components/SubLayout';

export default function LayoutConfig() {
  const pathName = usePathname();

  const homeLayout = ["/home","/librarysearch","/mypage","/bookdetail","/searchresult"];
  const subLayout = ["/librarysearch","/mypage","/searchresult"];

   return (
   <>
   {homeLayout.some(p => pathName.startsWith(p))  && <Header className="mt-[30px]"/>}
   {subLayout.some(p => pathName.startsWith(p)) && <SubLayout pathName = {pathName}/>}
   </>);
}