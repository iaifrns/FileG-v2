import React, { createContext, useState } from "react";

export interface ContextType {
  files: File[];
  addFiles: (a: File[]) => void;
  removeFile: (a: number) => void;
}

interface ContextInitialiserType {
  children: React.ReactNode;
}

const initiliser: ContextType = {
  files: [],
  addFiles: (e: File[]) => e,
  removeFile: (e: number) => e,
};

export const ContextProp = createContext<ContextType>(initiliser);

const ContextInitialiser: React.FC<ContextInitialiserType> = ({ children }) => {
  const [files, setFiles] = useState<File[]>([]);

  const addFiles = (filelist: File[]) => {
    setFiles([...files, ...filelist]);
  };

  const removeFile = (index:number) => {
    const newArr = files.filter((_,ind) => ind != index)
    setFiles(newArr)
  };

  return (
    <ContextProp.Provider value={{ files, addFiles, removeFile }}>
      {" "}
      {children}{" "}
    </ContextProp.Provider>
  );
};

export default ContextInitialiser;
