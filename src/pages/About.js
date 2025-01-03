import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5' }}>
      {/* Section Title */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#333' }}>about us</h2>
        <p style={{ fontSize: '18px', color: '#666' }}>
        Chiang Mai Polytechnic College Lanna aims to develop youth to be ready to enter the working world.
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
            <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>Activity 1</h4>
            <p style={{ color: '#777', fontSize: '14px' }}>
            Awards received in relation to sports and activities we organize to develop various skills
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
            <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>Activity 2</h4>
            <p style={{ color: '#777', fontSize: '14px' }}>
            Details of tuition fees and branches accepting applications
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
            <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>Activity 3</h4>
            <p style={{ color: '#777', fontSize: '14px' }}>
            Activities we organize to develop various skills
            </p>
          </div>
        </div>
      </div>

      {/* รายละเอียด */}
      <div style={{ textAlign: 'center', color: '#333', maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
        Chiang Mai Polytechnic College is an educational institution that emphasizes practical learning
        and prepares students for the world of work through vocational certificate and higher vocational certificate programs
        in various fields of study.
        </p>

        <h3 style={{ marginTop: '40px', color: '#222', fontSize: '24px', fontWeight: 'bold' }}>Awards received</h3>
        <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
        Chiang Mai Polytechnic College received the award for "Outstanding Institution with Innovative Learning Development" from the Ministry of Education in 2023, 
        which is an honor and inspiration for developing the quality of education.
        </p>
      </div>
    </div>
  );
};

export default About;
