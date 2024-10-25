import { useContext } from "react";
import { DefaultButton, OutlinedButton } from "../../components/Buttons";
import Divider from "../../components/Divider";
import TopBar from "./components/TopBar";
import UploadBox from "./components/UploadBox";
import { ContextProp } from "../../hooks/useProperties";
import FileComponent from "./components/FileComponent";
import fileSizeInKB from "../../helper/fileSize";

const UploadPage = () => {
  const webContext = useContext(ContextProp);

  console.log(webContext.files.length < 1)

  return (
    <div className="w-full flex flex-col gap-16 items-center">
      <TopBar />
      <div className="w-[80%] flex flex-col gap-[24px]">
        <p className="text-xl text-h-color font-semibold">
          Add a new file (csv/xlsx)
        </p>
        <UploadBox />
        <div className="flex flex-col w-full max-h-[250px] overflow-y-auto">
          {webContext.files.length > 0 ? (
            <div>
              {webContext.files.map((file, index) => (
                <FileComponent
                  key={index}
                  name={file.name}
                  size={fileSizeInKB(file.size)}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <p className="text-st-color w-full text-center">No file uploaded</p>
          )}
        </div>
        <Divider />
        <div className="flex justify-between w-full">
          <OutlinedButton text="Cancel" />
          <DefaultButton text="Import" disable={webContext.files.length<1}/>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
