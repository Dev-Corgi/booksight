
import StarFill from "@svg/StarFill.svg";
import StarEmpty from "@svg/StarEmpty.svg"; 
import StarHalf from "@svg/StarHalf.svg"; 

export default function ReviewStars({width,score,className}) {


  const originWidth = 67.85
  const scale =  width / originWidth
  const starGuage = Math.floor(score / 2)
  const starExist = Math.floor(score % 2)


  return (
    <div className = {`${className} flex flex-row w-min h-min gap-[0.08vw] st:gap-[1.12px] origin-top-left`}
    style={{
        scale: `${scale}`
      }}
    >
    {Array.from({ length: 5 }, (_, i) => (
        <div key={i} className="relative w-[0.89vw] h-[0.89vw] st:w-[12.8px] st:h-[12.8px] text-primary">
          {i < starGuage ? <StarFill /> : i == starGuage && starExist ==1 ?  <StarHalf /> : <StarEmpty />}
        </div>
      ))}
      </div>
  );
}