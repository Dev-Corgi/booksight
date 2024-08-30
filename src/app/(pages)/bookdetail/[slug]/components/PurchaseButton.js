'use client'

export default function PurchaseButton({book}){
    const handlePurchaseButtonClick = () =>{
      if(book != undefined){
        window.open(book.link);
      }
    }

    return(
         <div className="flex items-center justify-center w-[165px] h-[58px] rounded-[18px] bg-white" onClick = {handlePurchaseButtonClick}>
              <p className="font-NotoSansKRSemiBold text-[19px] text-black">
                구매하기
              </p>
            </div>
    )
}