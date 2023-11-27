import React from "react";

const PdfViewerButton = ({ pdfUrl }) => {
  const openPdfInNewTab = () => {
    window.open(pdfUrl, "_blank");
  };

  return <button onClick={openPdfInNewTab}>Open PDF</button>;
};

export default PdfViewerButton;
