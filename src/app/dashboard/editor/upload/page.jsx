"use client"

import { useState, useRef } from 'react';

export default function upload() {
  const inputRef = useRef();

  const [selectFile, setSelectFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("select");

  return (
    <div className="">
      <div className="flex items-center justify-center">
        <input
          type="file"
          onChange={(e) => { setSelectFile(e.target.files[0]) }}
          className=""
        />
        <button></button>
        {!selectFile && (
          <button
            className="w-80 h-36 text-lg font-medium flex flex-col items-center justify-center gap-4 text-indigo-500 bg-slate-300 border-2 border-dashed border-indigo-500 rounded-3xl cursor-pointer"
            onClick={() => { }}>
            <span className="material-symbols-outlined">upload</span>
            Upload File
          </button>
        )}
        {selectFile && (
          <div>

          </div>
        )}

      </div>
    </div>
  );
}