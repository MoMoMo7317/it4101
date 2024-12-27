import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', backgroundColor: '#fafafa' }}>
      <h2 
        style={{
          textAlign: 'center', 
          color: '#000000',  // เปลี่ยนสีข้อความเป็นสีดำ
          fontSize: '2.5rem', 
          marginBottom: '20px',
          fontWeight: 'bold',
          paddingBottom: '10px',  // เพิ่มช่องว่างด้านล่าง
        }}
      >
      </h2>
      
      {/* กล่องข้อความที่ใส่รูปภาพ */}
      <div 
        style={{
          border: '2px solid #000000', // กรอบสีดำ
          borderRadius: '10px',
          padding: '30px',
          textAlign: 'center',
          marginTop: '40px',
          backgroundColor: '#ffffff',
          boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease-in-out', // เพิ่ม transition สำหรับการเลื่อน
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} // เมื่อเอาเมาส์ไปวางบนกล่อง
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} // คืนสภาพเมื่อเมาส์ออกจากกล่อง
      >
        
        {/* รูปภาพ */}
        <img 
          src="https://uat-backend.thaisisterhood.com/public/uploads/place/13/original/654c65f35a0a11699505651.jpg" 
          alt="หลักสูตร" 
          style={{
            width: '90%', 
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', 
            marginTop: '20px',
            transition: 'transform 0.3s ease-in-out', // การเพิ่มเอฟเฟกต์เมื่อวางเมาส์
          }} 
        />
      </div>
      
      {/* เพิ่มพื้นที่ว่าง */}
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <button 
          style={{
            backgroundColor: '#ffffff',  // สีพื้นหลังของปุ่มเป็นสีขาว
            color: '#000000',  // ตัวหนังสือสีดำ
            padding: '15px 30px',
            border: '2px solid #000000',  // กรอบปุ่มเป็นสีดำ
            borderRadius: '5px',
            fontSize: '1rem',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s ease, transform 0.3s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'} // สีพื้นหลังเปลี่ยนเมื่อเมาส์วาง
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'} // คืนสีพื้นหลังเป็นขาว
          onClick={() => alert('ไปที่หน้าเรียนต่อ')}
        >
          เรียนรู้เพิ่มเติม
        </button>
      </div>
    </div>
  );
};

export default Home;
