export default function getScore(book){


   if(book == undefined){return undefined}

    // if(book.subInfo.ratingInfo.ratingCount <= 0){return undefined}
    
    return book.customerReviewRank;
}