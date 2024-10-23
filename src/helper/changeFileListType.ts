const changeFileListToFile = (fileList: FileList) => {
  const files: File[] = [];
  const keys = Object.keys(fileList);
  for (let i in keys) {
    files.push(fileList[parseInt(keys[i])]);
  }
  return files;
};

export default changeFileListToFile;
