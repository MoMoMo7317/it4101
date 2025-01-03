import React from 'react';

const Contact = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Contact us</h2>
      <p style={styles.description}>If you have any questions about the course or any other information, please contact us at:</p>
      <div style={styles.contactInfo}>
        <p style={styles.contactItem}><strong>Email:</strong> stu67319010026@lannapoly.ac.th</p>
        <p style={styles.contactItem}><strong>Phone:</strong> 0966913331</p>
        <p style={styles.contactItem}><strong>Address:</strong> 2 Sukkasem Road, Chang Phueak Subdistrict, Mueang Chiang Mai 50300</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    backgroundColor: '#f4f4f9',  // สีพื้นหลังที่ดูอ่อนโยน
    borderRadius: '12px',
    maxWidth: '600px',
    margin: '50px auto',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',  // จัดข้อความทั้งหมดให้กึ่งกลาง
  },
  title: {
    fontSize: '2.2rem',
    fontWeight: '600',
    color: '#2d3748',  // สีตัวอักษรเข้มเพื่อให้อ่านง่าย
    marginBottom: '15px',
    fontFamily: 'Poppins, sans-serif',  // ฟอนต์ที่มีความทันสมัย
  },
  description: {
    fontSize: '1.1rem',
    color: '#718096',  // สีอ่อนเพื่อไม่ให้ดูเข้มเกินไป
    marginBottom: '30px',
    fontFamily: 'Poppins, sans-serif',
  },
  contactInfo: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    marginTop: '20px',  // เว้นระยะจากข้อความบน
  },
  contactItem: {
    fontSize: '1rem',
    color: '#4a5568',  // สีอักษรที่ไม่เข้มเกินไป
    margin: '15px 0',
    lineHeight: '1.8',
    fontFamily: 'Poppins, sans-serif',
    textAlign: 'left',  // จัดข้อความให้ชิดซ้าย
  },
  strong: {
    fontWeight: '600',  // ทำให้คำว่า "Email", "Phone", "Address" หนากว่า
    color: '#2d3748',
  }
};

export default Contact;
