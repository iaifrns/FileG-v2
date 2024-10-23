import React, { useContext } from "react";
import { FileComponentType } from "../../../types/fileComponentType";
import { images } from "../../../constants/images";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { ContextProp } from "../../../hooks/useProperties";

const FileComponent: React.FC<FileComponentType> = ({ name, size, index }) => {
    const webContext = useContext(ContextProp)
    const handleDeleteFile = () => {
        webContext.removeFile(index)
    }
  return (
    <div className="flex py-2 justify-between items-center h-fit border-b-2">
      <div className="flex gap-4 items-center ">
        <img src={images.FILEIMG} alt="file image" className="w-[76px]" />
        <div className="flex flex-col justify-between">
          <p className="text-primary">{name}</p>
          <p className="text-st-color">{size}</p>
        </div>
      </div>
      <div className="flex flex-col items-center h-[70px] justify-between ">
        <Icon icon="maki:cross" className="text-lg cursor-pointer" onClick={handleDeleteFile} />
        <Icon
          icon="teenyicons:tick-circle-solid"
          className="text-green-600 text-lg"
        />
      </div>
    </div>
  );
};

export default FileComponent;
