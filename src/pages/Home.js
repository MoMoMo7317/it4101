import React, { useState, useEffect } from 'react';

const Home = () => {
  // ข้อมูลรูปภาพที่ต้องการแสดง
  const imageUrls = [
    'https://uat-backend.thaisisterhood.com/public/uploads/place/13/original/654c65f35a0a11699505651.jpg',
    'https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/466343057_1089522579840500_2364853303705937585_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ypLnqvYwMIIQ7kNvgH0RwX-&_nc_oc=Adh_ENo-rEaw1DgGc3zNNweOsPoSRD8BaxyaKOM3oYvveca3awYoIk3jGD2ODM5yNDk&_nc_zt=23&_nc_ht=scontent.fcnx3-1.fna&_nc_gid=AwI6prqsGNcc9V4BVA4G21K&oh=00_AYA4msoa22vl5aMkZ5BKaAUocGxJnbWGFAxbVWT7NQNYaA&oe=677D31AC',
    'https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/471228618_1119621556830602_2667945275902902802_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=j8rtzXKDHHkQ7kNvgGxrVJ_&_nc_oc=Adge0WhpbsXGc6CeMmzOT102_Ai3H_A3z0RBwrvogtKq1JxKmRCZLOpTbepXpVshQmA&_nc_zt=23&_nc_ht=scontent.fcnx3-1.fna&_nc_gid=A1DFpZM2nHXisMPYN17Mc0K&oh=00_AYC2Bub5jNglJ5Cp4-3ivCROPOiLIherfYG7vi5GUm-qmw&oe=677D3799'
  ];

  // สถานะเพื่อเก็บรูปภาพที่จะแสดง
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // ฟังก์ชันที่จะเปลี่ยนรูปภาพทุกๆ 3 วินาที
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % imageUrls.length);
    }, 3000); // เปลี่ยนทุกๆ 3 วินาที

    // ทำความสะอาด interval เมื่อคอมโพเนนต์ไม่ถูกใช้งาน
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#fafafa' }}>
      {/* ชื่อหรือหัวข้อ */}
      <h2 style={{
        textAlign: 'center', 
        color: '#333', 
        fontSize: '2rem', 
        fontWeight: 'normal',
        marginBottom: '30px',
      }}>
      </h2>

      {/* แสดงรูปภาพที่เปลี่ยนได้ */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
      }}>
        <div style={{
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        }}>
          <img 
            src={imageUrls[currentImageIndex]} 
            alt={`หลักสูตร ${currentImageIndex + 1}`} 
            style={{
              width: '100%', 
              height: 'auto',
              objectFit: 'cover',
              borderRadius: '8px',
            }} 
          />
        </div>
      </div>

      {/* ปุ่ม */}
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button 
          style={{
            backgroundColor: '#ffffff',
            color: '#333',
            padding: '12px 24px',
            border: '2px solid #333',
            borderRadius: '30px',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
          onClick={() => alert('ไปที่หน้าเรียนต่อ')}
        >
          About Us
        </button>
      </div>
    </div>
  );
};

export default Home;
