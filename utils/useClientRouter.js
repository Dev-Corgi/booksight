"use client";

import { useRouter } from 'next/navigation';
import { Suspense } from 'react';

export function ClientRouterWrapper({url = null,isback = false, children}) {
  const router = useRouter();

  return(
    <Suspense>
        <div className = "flex" onClick = {() => {
          if(url != null){
            router.push(url)
          }
          else if(isback){
            router.back()
          }
          }}>
            {children}
        </div>
    </Suspense>
  )
}