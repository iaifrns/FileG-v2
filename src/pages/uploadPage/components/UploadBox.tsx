import { Icon } from "@iconify-icon/react";

const UploadBox = () => {
  const onClickUploadLink = () => {
    const clickEvent = document.querySelector("#upload-input") as HTMLInputElement | null;
    clickEvent?.click();
  };
  return (
    <div className="flex flex-col justify-center items-center p-8 border-2 border-dashed border-bd-color border-opacity-50 gap-[16px]">
      <Icon icon="uil:upload" className="text-[70px]" />
      <p className="text-lg font-semibold">
        Drag & Drop or{" "}
        <a href="#" onClick={onClickUploadLink} className="text-secondary">
          Choose file
        </a>{" "}
        to upload
      </p>
      <p className="text-st-color text-lg">CSV or XLSX</p>
      <input type="file" accept=".csv" id="upload-input" hidden />
    </div>
  );
};

export default UploadBox;
