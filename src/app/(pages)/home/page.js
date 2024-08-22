import Center from "./components/Center";
import Booklist2 from "@/app/components/Booklist2";
import CategoryList from "./components/CategoryList";
import CommentaryList from "./components/CommentaryList";
export default function HomePage() {
  return (
    <div className="w-full h-screen flex flex-col items-center  overflow-x-clip">
      <Center className="mt-[6.46vw] st:mt-[93px]"></Center>
      <div className = "flex flex-col ml-[7.5vw] mt-[3.19vw] st:mt-[46px] gap-[60px]">
      <Booklist2></Booklist2>
      <Booklist2></Booklist2>
      <CategoryList></CategoryList>
      <CommentaryList></CommentaryList>
      </div>
      
    </div>
  );
}
