import { Icon } from "@iconify-icon/react";
import React, { useContext, useRef, useState } from "react";
import isDropElementOk from "../../../helper/isDropElementOk";
import { ContextProp } from "../../../hooks/useProperties";
import changeFileListToFile from "../../../helper/changeFileListType";

const UploadBox = () => {
  const webContext = useContext(ContextProp)
  const [errorMessage, setErrorMessage] = useState("");

  const onFileChange = (e: any) => {
    const file = e.target.files;
    webContext.addFiles(changeFileListToFile(file as FileList))
  };

  const onClickUploadLink = () => {
    const clickEvent = document.querySelector(
      "#upload-input"
    ) as HTMLInputElement | null;
    clickEvent?.click();
  };

  const wrapperRef = useRef<HTMLDivElement>(null);

  const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    wrapperRef.current &&
      wrapperRef.current.classList.add(
        "border-primary",
        "bg-primary",
        "bg-opacity-10"
      );
  };

  const onDropEvent = (e: React.DragEvent<HTMLDivElement>) => {
    onDragLeave(e);
    const files = e.dataTransfer.files
    const isFilesOk = isDropElementOk(files, setErrorMessage, wrapperRef)

    if(!isFilesOk){
      webContext.addFiles(changeFileListToFile(files))
    }
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    wrapperRef.current &&
      wrapperRef.current.classList.remove(
        "border-primary",
        "bg-primary",
        "bg-opacity-10"
      );
  };

  return (
    <div
      ref={wrapperRef}
      onDrop={onDropEvent}
      onDragOver={onDragEnter}
      onDragLeave={onDragLeave}
      className="flex flex-col justify-center items-center p-8 border-2 border-dashed border-bd-color gap-[16px]"
    >
      <Icon icon="uil:upload" className="text-[70px]" />
      <p className="text-lg font-semibold">
        Drag & Drop or{" "}
        <a href="#" onClick={onClickUploadLink} className="text-link-color hover:text-primary">
          Choose file
        </a>{" "}
        to upload
      </p>
      <p className="text-st-color text-lg">CSV or XLSX</p>
      <input
        type="file"
        accept=".csv, .xlsx"
        id="upload-input"
        onChange={onFileChange}
        hidden
        multiple
      />
      <p
        className={
          errorMessage.length < 1 ? "hidden" : "text-error text-center w-full"
        }
      >
        {errorMessage}
      </p>
    </div>
  );
};

export default UploadBox;
