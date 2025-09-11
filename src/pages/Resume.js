import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { BiDownload } from "react-icons/bi";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1200);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="flex items-center justify-center flex-col relative min-h-screen">
      <img
        src="./star.jpg"
        alt=""
        className="h-full w-full object-cover opacity-10 absolute bottom-0"
      />

      {/* Download button top */}
      <a
        href={"../../Yatendra_Resume.pdf"}
        target="_blank"
        rel="noreferrer"
        className="flex items-center z-20 justify-center gap-3 px-6 py-2 rounded shadow-md text-white bg-purple-600 hover:bg-purple-700 transition duration-300 ease-in-out my-3"
      >
        <BiDownload fontSize={20} /> Download CV
      </a>

      {/* PDF container */}
      <div className="py-[50px] flex justify-center flex-col items-center overflow-hidden z-20 min-h-[80vh] w-full">
        {loading && (
          <div className="w-[600px] h-[800px] max-w-full rounded-lg shadow-xl bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse flex flex-col justify-center items-center">
            <div className="w-3/4 h-6 bg-gray-400/40 rounded mb-6"></div>
            <div className="w-5/6 h-4 bg-gray-400/30 rounded mb-3"></div>
            <div className="w-5/6 h-4 bg-gray-400/30 rounded mb-3"></div>
            <div className="w-2/3 h-4 bg-gray-400/30 rounded mb-3"></div>
            <div className="w-4/5 h-4 bg-gray-400/30 rounded mb-3"></div>
            <div className="w-1/2 h-4 bg-gray-400/30 rounded"></div>
          </div>
        )}

        <Document
          file="../../Yatendra_Resume.pdf"
          className={`flex justify-center shadow-xl ${loading ? "hidden" : "block"}`}
          onLoadSuccess={() => setLoading(false)}
          onLoadError={() => setLoading(false)}
        >
          <Page
            pageNumber={1}
            scale={width > 786 ? 1 : 0.4}
          />
        </Document>
      </div>

      {/* Download button bottom */}
      <a
        href={"../../Yatendra_Resume.pdf"}
        target="_blank"
        rel="noreferrer"
        className="flex items-center z-20 justify-center gap-3 px-6 py-2 rounded shadow-md text-white bg-purple-600 hover:bg-purple-700 transition duration-300 ease-in-out my-3"
      >
        <BiDownload fontSize={20} /> Download CV
      </a>
    </div>
  );
}

export default Resume;
