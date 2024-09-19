'use client'

export default function PurchaseButton({book}){
    const handlePurchaseButtonClick = () =>{
      if(book != undefined){
        window.open(book.link);
      }
    }

    return(
         <div className="flex items-center justify-center w-[118px] lg:w-[11.52vw] h-[42px] lg:h-[4.1vw] rounded-[13px] lg:rounded-[1.27vw] bg-white" onClick = {handlePurchaseButtonClick}>
              <p className="font-NotoSansKRSemiBold text-[14px] lg:text-[1.37vw] text-black">
                구매하기
              </p>
            </div>
    )
}