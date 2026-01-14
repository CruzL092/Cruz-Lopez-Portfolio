interface HeaderProp {
  text: string;
}
const Headers = ({ text }: HeaderProp) => {
  return (
    <div className="text-left text-4xl w-4/5 md:w-3/5  lg:w-2/5 mb-8 font-bold bg-linear-to-r from-[#635656] via-[#8f8e8e] to-[#8E8E8E] text-transparent bg-clip-text">
      {text}
    </div>
  );
};

export default Headers;
