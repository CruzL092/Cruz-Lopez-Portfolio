interface HeaderProp {
  text: string;
}
const Headers = ({ text }: HeaderProp) => {
  return (
    <div className="text-left text-4xl w-2/3 lg:w-1/5 mb-8 font-bold bg-gradient-to-r from-[#635656] via-[#8f8e8e] to-[#8E8E8E] text-transparent bg-clip-text">
      {text}
    </div>
  );
};

export default Headers;
