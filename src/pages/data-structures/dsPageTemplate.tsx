import Prism from "prismjs";
import "prismjs/components/prism-java";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect, useRef } from "react";
import { HiOutlineClipboard } from "react-icons/hi2";
import BackArrow from "../../components/BackArrow";
import HomeButton from "../../components/HomeButton";
import MenuOption from "../../components/MenuOption";

function DsPage({
  header,
  description,
  code,
  algoOptions,
  algoOptionsImagePaths,
  algoOptionsPaths,
}: {
  header: string;
  description: string;
  code: string;
  algoOptions: string[];
  algoOptionsImagePaths: string[];
  algoOptionsPaths: string[];
}) {
  const textRef = useRef<HTMLPreElement>(null);
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText((textRef.current?.textContent as string) || "")
      .then(() => {
        console.log("Code copied!");
      })
      .catch(() => {
        console.log("Error Copying");
      });
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="wrapper justify-between">
        <BackArrow path="/ds/arrays-lists" />
        <h1 className="header">
          {header}
          <span className="line-ds"></span>
        </h1>
        <HomeButton />
      </div>

      <div className="flex w-11/12 flex-row items-center justify-between gap-10">
        <p>{description}</p>
        <div className="flex flex-col items-end">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-500 hover:bg-dark-tertiary"
            onClick={copyToClipboard}
          >
            <HiOutlineClipboard className="h-8 w-8" />
          </button>
          <pre className="rounded-xl" ref={textRef}>
            <code className="language-java">{code}</code>
          </pre>
        </div>
      </div>

      <ul className="justify-left flex w-11/12 flex-grow flex-row flex-wrap gap-6">
        {algoOptions.map((algo, index) => {
          return (
            <MenuOption
              header={algo}
              icon={algoOptionsImagePaths[index]}
              color="blue"
              path={algoOptionsPaths[index]}
              size="small"
            />
          );
        })}
      </ul>
    </div>
  );
}

export default DsPage;
