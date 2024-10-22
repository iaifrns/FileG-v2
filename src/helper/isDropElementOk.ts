const isDropElementOk = (
  files: FileList,
  setMessage: (a: string) => void,
  boxRef: React.RefObject<HTMLDivElement>
) => {
  let rs = false;
  const keys = Object.keys(files);
  for (let n in keys) {
    const type = files[parseInt(keys[n])].type;
    let i = 0;
    if (type.includes("csv")) i++;
    if (type.includes("xlsx")) i++;
    if (i < 1) {
      rs = true;
      break;
    }
  }

  if (rs) {
    setMessage("Please only CSV or XLSX files are allowed");
    boxRef.current?.classList.add("border-error");
  } else {
    setMessage("");
    boxRef.current?.classList.remove("border-error");
  }

  return rs;
};

export default isDropElementOk;
