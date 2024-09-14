"use client";

import { useRouter } from 'next/navigation';
import { Suspense } from 'react';

export function ClientRouterWrapper({url,children}) {
  const router = useRouter();

  return(
    <Suspense>
        <div className = "flex" onClick = {() => {
          router.push(url)
          }}>
            {children}
        </div>
    </Suspense>
  )
}