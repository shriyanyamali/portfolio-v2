import WordRotate from "@/components/magicui/word-rotate";

const WordRotateDemo = () => {
  return (
    <WordRotate
      className="text-4xl xtl:text-3xl lg:!text-4xl font-bold text-black dark:text-white"
      words={["dreamer.", "Delawarean.", "believer.", "innovator.", "leader.", "student.", "programmer.", "writer.",
]}
    />
  );
};

export default WordRotateDemo;
