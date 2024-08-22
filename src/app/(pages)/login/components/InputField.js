
export default function InputField({placeHolder,className}) {
  
    return (
        <div className = {`${className} rounded-[9.21px] border-[1.5px] border-textColor-primary`}>
        <p className = "font-NotoSansKRMedium text-[17px] ml-[27.64px] mt-[15px]">{placeHolder}</p>
        </div>
    );
  }
  