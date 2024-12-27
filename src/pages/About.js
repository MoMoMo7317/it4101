import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5' }}>
      {/* Section Title */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#333' }}>เกี่ยวกับเรา</h2>
        <p style={{ fontSize: '18px', color: '#666' }}>
          วิทยาลัยโปลิเทคนิคลานนาเชียงใหม่ มุ่งมั่นพัฒนาเยาวชนให้พร้อมเข้าสู่โลกการทำงาน
        </p>
      </div>

      {/* รูปภาพการ์ด */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '40px' }}>
        {/* การ์ดรูปภาพ 1 */}
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: '15px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            width: '300px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfQ7lhKy_RcBipcak7YkFUfn7GWe8rrwsw_KUUieU6jqxQNxDkuNLahxX1VD5dVXkj5E&usqp=CAU"
            alt="กิจกรรม 1"
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
            }}
          />
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>กิจกรรม 1</h4>
            <p style={{ color: '#777', fontSize: '14px' }}>
            รางวัลที่ได้รับเกี่ยวกับด้านกีฬาและกิจกรรมที่เราจัดขึ้นเพื่อพัฒนาทักษะต่างๆ
            </p>
          </div>
        </div>

        {/* การ์ดรูปภาพ 2 */}
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: '15px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            width: '300px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          <img
            src="https://www.lannapoly.ac.th/web/gallery/20241121-094109.jpg"
            alt="กิจกรรม 2"
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
            }}
          />
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>กิจกรรม 2</h4>
            <p style={{ color: '#777', fontSize: '14px' }}>
            รายละเอียดค่าเทอมและสาขาที่เปิดรับสมัครนักศึกษา
            </p>
          </div>
        </div>

        {/* การ์ดรูปภาพ 3 */}
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: '15px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            width: '300px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKG0PAuP3-g23avYYe9cTqpMFGv5swuzrvGHPWNef54vRmcHcztNw91VECHmmmUf0zhPY&usqp=CAU"
            alt="กิจกรรม 3"
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
            }}
          />
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>กิจกรรม 3</h4>
            <p style={{ color: '#777', fontSize: '14px' }}>
            กิจกรรมที่เราจัดขึ้นเพื่อพัฒนาทักษะต่างๆ
            </p>
          </div>
        </div>
      </div>

      {/* รายละเอียด */}
      <div style={{ textAlign: 'center', color: '#333', maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
          วิทยาลัยโปลิเทคนิคลานนาเชียงใหม่เป็นสถาบันการศึกษาที่เน้นการเรียนรู้เชิงปฏิบัติ
          และเตรียมนักศึกษาให้พร้อมเข้าสู่โลกแห่งการทำงาน ผ่านหลักสูตร ปวช และ ปวส
          ในหลากหลายสาขาวิชา.
        </p>

        <h3 style={{ marginTop: '40px', color: '#222', fontSize: '24px', fontWeight: 'bold' }}>รางวัลที่ได้รับ</h3>
        <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
          วิทยาลัยโปลิเทคนิคลานนาเชียงใหม่ได้รับรางวัล "สถาบันการศึกษาที่มีการพัฒนานวัตกรรมการเรียนรู้ดีเด่น"
          จากกระทรวงศึกษาธิการ เมื่อปี 2023 ซึ่งถือเป็นเกียรติและแรงบันดาลใจในการพัฒนาคุณภาพการศึกษา.
        </p>
      </div>
    </div>
  );
};

export default About;
