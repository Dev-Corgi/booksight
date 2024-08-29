
import TitleTag from "./TitleTag";
import Booklist from "./Booklist";
export default function BooklistSection({
  title,
  books
}) {

  return (
        <div className={"w-full h-min"}>
          <TitleTag title={title}></TitleTag>
          <Booklist className = "flex flex-row w-min h-min ml-[28px] mt-[14px] gap-[45px]"  books = {books}></Booklist>
        </div>
  );
}
