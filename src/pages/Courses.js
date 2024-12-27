import React, { useState } from 'react';
import './Courses.css'; // นำเข้าไฟล์ CSS

function Courses() {
  const [showCourse1, setShowCourse1] = useState(false);
  const [showCourse2, setShowCourse2] = useState(false);
  const [showCourse3, setShowCourse3] = useState(false);
  const [showCourse4, setShowCourse4] = useState(false);

  return (
    <div className="container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="grid">
          {/* หลักสูตร 1 */}
          <div className="card">
            <h3 className="title">สาขาวิชาเทคโนโลยีสารสนเทศ</h3>
            <p className="description">ประเภทวิชาอุตสาหกรรมดิจิทัลและเทคโนโลยีสารสนเทศกลุ่มอาชีพซอฟต์แวร์และการประยุกต์สาขาวิชาเทคโนโลยีสารสนเทศ</p>
            <button 
              onClick={() => setShowCourse1(!showCourse1)} 
              className="button"
            >
              {showCourse1 ? 'ซ่อน PDF หลักสูตร' : 'ดู PDF หลักสูตร 1'}
            </button>

            {showCourse1 && (
              <iframe 
                src="/pdf/1.pdf"  // ตรวจสอบว่าตำแหน่ง PDF ถูกต้อง
                className="iframe"
                title="หลักสูตร 1"
              />
            )}

            <div className="overlay"></div>
          </div>

          {/* หลักสูตร 2 */}
          <div className="card">
            <h3 className="title">สาขาวิชาคอมพิวเตอร์โปรแกรมเมอร์</h3>
            <p className="description">ประเภทวิชาอุตสาหกรรมดิจิทัลและเทคโนโลยีสารสนเทศกลุ่มอาชีพซอฟต์แวร์และการประยุกต์สาขาวิชาคอมพิวเตอร์โปรแกรมเมอร์</p>
            <button 
              onClick={() => setShowCourse2(!showCourse2)} 
              className="button"
            >
              {showCourse2 ? 'ซ่อน PDF หลักสูตร' : 'ดู PDF หลักสูตร 2'}
            </button>

            {showCourse2 && (
              <iframe 
                src="/pdf/2.pdf"  // ตรวจสอบว่าตำแหน่ง PDF ถูกต้อง
                className="iframe"
                title="หลักสูตร 2"
              />
            )}

            <div className="overlay"></div>
          </div>

          {/* หลักสูตร 3 */}
          <div className="card">
            <h3 className="title">สาขาวิชาเทคโนโลยีสารสนเทศ</h3>
            <p className="description">ประเภทวิชาอุตสาหกรรมดิจิทัลและเทคโนโลยีสารสนเทศกลุ่มอาชีพซอฟต์แวร์และการประยุกต์สาขาวิชาเทคโนโลยีสารสนเทศ</p>
            <button 
              onClick={() => setShowCourse3(!showCourse3)} 
              className="button"
            >
              {showCourse3 ? 'ซ่อน PDF หลักสูตร' : 'ดู PDF หลักสูตร 3'}
            </button>

            {showCourse3 && (
              <iframe 
                src="/pdf/3.pdf"  // ตรวจสอบว่าตำแหน่ง PDF ถูกต้อง
                className="iframe"
                title="หลักสูตร 3"
              />
            )}

            <div className="overlay"></div>
          </div>

          {/* หลักสูตร 4 */}
          <div className="card">
            <h3 className="title">สาขาวิชาคอมพิวเตอร์โปรแกรมเมอร</h3>
            <p className="description">ประเภทวิชาอุตสาหกรรมดิจิทัลและเทคโนโลยีสารสนเทศกลุ่มอาชีพซอฟต์แวร์และการประยุกต์สาขาวิชาคอมพิวเตอร์โปรแกรมเมอร์</p>
            <button 
              onClick={() => setShowCourse4(!showCourse4)} 
              className="button"
            >
              {showCourse4 ? 'ซ่อน PDF หลักสูตร' : 'ดู PDF หลักสูตร 4'}
            </button>

            {showCourse4 && (
              <iframe 
                src="/pdf/4.pdf"  // ตรวจสอบว่าตำแหน่ง PDF ถูกต้อง
                className="iframe"
                title="หลักสูตร 4"
              />
            )}

            <div className="overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
