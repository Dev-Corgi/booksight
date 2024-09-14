import TitleTag from "@/app/components/TitleTag";
export default function ContainerWithTitle({className, children }) {
  return (
    <div className={`${className} flex flex-col`}>
      <TitleTag title="책 살펴보기"></TitleTag>
      <div className="relative w-full h-[250.51px] ml-[28px]">{children}</div>
    </div>
  );
}
