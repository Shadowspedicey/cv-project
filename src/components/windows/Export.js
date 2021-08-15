import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

class Export extends React.Component
{
	constructor()
	{
		super()

		this.toPDF = this.toPDF.bind(this);
	}

	toPDF = () => 
		html2canvas(document.querySelector(".CV"), {scale: 2})
			.then(canvas =>
			{
				const img = canvas.toDataURL("image/png");
				const doc = new jsPDF();
				const imgProps= doc.getImageProperties(img);
				const pdfWidth = doc.internal.pageSize.getWidth();
				const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
				doc.addImage(img, 'PNG', 0, 0, pdfWidth, pdfHeight);
				doc.save('test.pdf');
			}
		);

	render()
	{
		return(
			<div className="export-window">
				<h1>Download your CV as PDF!</h1>
				<button onClick={this.toPDF}>Download</button>
			</div>
		)
	}
}

export default Export;
