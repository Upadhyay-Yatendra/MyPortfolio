import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { BiDownload } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // spinner icon

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
          <div className="flex flex-col items-center justify-center h-full gap-3 animate-pulse">
            <AiOutlineLoading3Quarters className="animate-spin text-purple-600" size={40} />
            <p className="text-gray-600">Loading resume...</p>
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
