import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

function DownloadPDF() {
  const downloadPDF = async () => {
    const element = document.getElementById("cvHolder");

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    const image = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: canvas.width > canvas.height ? "landscape" : "portrait",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(image, "PNG", 0, 0, canvas.width, canvas.height);

    pdf.save("my-document.pdf");
  };

  return (
    <>
      <button id="downloadButton" onClick={downloadPDF}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          height="24px"
          width="24px"
        >
          <path d="M12,16L7,11L8.4,9.55l2.6,2.6V4h2v8.15l2.6-2.6L17,11l-5,5ZM6,20q-0.82,0-1.41-0.59T4,18V15H6v3H18V15h2v3q0,0.82-0.59,1.41T18,20H6Z" />
        </svg>
      </button>
    </>
  );
}

export default DownloadPDF;
