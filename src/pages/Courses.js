import React, { useState } from 'react';
import './Courses.css'; // นำเข้าไฟล์ CSS
import { Worker } from '@react-pdf-viewer/core'; // สำหรับการประมวลผล PDF
import '@react-pdf-viewer/core/lib/styles/index.css'; // สไตล์พื้นฐาน
import '@react-pdf-viewer/default-layout/lib/styles/index.css'; // สไตล์ Layout เริ่มต้น
import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';

// ข้อมูลไฟล์ PDF
const pdfFiles = [
  { title: 'สาขาวิชาเทคโนโลยีสารสนเทศ 1', file: '/itpoly_4101/pdf/1.pdf' },
  { title: 'สาขาวิชาคอมพิวเตอร์โปรแกรมเมอร์ 1', file: '/itpoly_4101/pdf/2.pdf' },
  { title: 'สาขาวิชาเทคโนโลยีสารสนเทศ 2', file: '/itpoly_4101/pdf/3.pdf' },
  { title: 'สาขาวิชาคอมพิวเตอร์โปรแกรมเมอร์ 2', file: '/itpoly_4101/pdf/4.pdf' },
];

function Courses() {
  const [selectedPDF, setSelectedPDF] = useState(null);

  return (
    <div className="container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid">
          {pdfFiles.map((pdf, index) => (
            <div key={index} className="card">
              <h3 className="title">{pdf.title}</h3>
              <button
                className="button"
                onClick={() => setSelectedPDF(index === selectedPDF ? null : index)}
              >
                {selectedPDF === index ? 'ซ่อน PDF' : `ดู ${pdf.title}`}
              </button>
              {selectedPDF === index && (
                <div className="pdf-viewer">
                  <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                    <Viewer
                      fileUrl={pdf.file}
                      defaultScale={SpecialZoomLevel.PageWidth}
                    />
                  </Worker>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
