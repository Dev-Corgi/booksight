import Center from "./components/Center";
import CategoryList from "./components/CategoryList";
import CommentaryList from "./components/CommentaryList";
import BooklistSection from "@/app/components/BooklistSection";
export default function HomePage() {


  return (
    <div className="w-full h-screen flex flex-col  items-center overflow-x-clip">
      <Center className="mt-[6.46vw] st:mt-[93px]"></Center>
      <div className = "flex flex-col w-full ml-[6.39vw] mt-[3.19vw] st:ml-[108px] st:mt-[46px] gap-[60px]">
      <BooklistSection title="베스트 셀러"></BooklistSection>
      <BooklistSection title="요즘 뜨는 책"></BooklistSection>
      <CategoryList></CategoryList>
      <CommentaryList></CommentaryList>
      </div>
      
    </div>
  );
}
