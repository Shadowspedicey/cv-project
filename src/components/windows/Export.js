import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Export = props =>
{
	const toPDF = () =>
	{
		window.scrollTo(0,0)
		document.querySelector(".CV").classList.add("print-ready");
		setTimeout(() =>	document.querySelector(".CV").classList.remove("print-ready"), 0);
		html2canvas(document.querySelector(".CV"), {scale: 2})
			.then(canvas =>
			{
				const img = canvas.toDataURL("image/png");
				const doc = new jsPDF();
				const imgProps= doc.getImageProperties(img);
				const pdfWidth = doc.internal.pageSize.getWidth();
				const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
				doc.addImage(img, 'PNG', 0, 0, pdfWidth, pdfHeight);
				doc.save('CV.pdf');
			}
		);
	};

	return(
		<div className="export-window">
			<h1>Download your CV as PDF!</h1>
			<button onClick={toPDF}>Download</button>
		</div>
	)
}

export default Export;
