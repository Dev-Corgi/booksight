
import StarFill from "@svg/StarFill.svg";
import StarEmpty from "@svg/StarEmpty.svg"; 
import StarHalf from "@svg/StarHalf.svg"; 

export default function ReviewStars({width = "15px",score,className}) {
  const starGuage = score != undefined ? Math.floor(score / 2) : undefined 
  const starExist = score != undefined ? Math.floor(score % 2) : undefined


  return (
    <div className = {`${className} flex flex-row items-center w-min h-min`}
    >
    {Array.from({ length: 5 }, (_, i) => (
        <div key={i} className={`relative ${width} aspect-square text-primary`}>
          {score != undefined ?
          i < starGuage ? <StarFill /> : i == starGuage && starExist ==1 ?  <StarHalf /> : <StarEmpty />
          :
          <StarEmpty className = "text-textColor-secondary"/>
        }
        </div>
      ))}
      </div>
  );
}