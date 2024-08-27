import BookSection from "./components/BookSection";
import DescriptionSection from "./components/DescriptionSection";
import ReviewSection from "./components/ReviewSection";
import BooklistSection from "@/app/components/BooklistSection";
import aladinISBNSearchHandler from "@handler/aladinISBNSearchHandler";

export default async function BookDetailPage({ params }) {
  const isbn13 = params.slug;

    async function  fetchBook(){
    const result = await aladinISBNSearchHandler(isbn13);
    return result
    }

    const book = await fetchBook();
    

  return (
    <div className="w-full mt-[111px] flex flex-col items-center justify-center">
      <BookSection book={book}></BookSection>
      <div className="flex flex-col w-[85vw] -mt-[5px] gap-y-[62px]">
        <DescriptionSection disc = {book.description}></DescriptionSection>
        <ReviewSection></ReviewSection>
        <BooklistSection title = "작가의 다른책"></BooklistSection>
        <BooklistSection title = "이런책은 어떠세요?"></BooklistSection>
      </div>
    </div>
  );
}
