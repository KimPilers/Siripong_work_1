import React from 'react';
import RoomCard from '../components/RoomCard';
import './HomeDetails2.css';

function getRooms() {
  return [
    {
      title: 'ห้องซูพีเรีย เตียงแฝด',
      details: ['2 เตียงเดี่ยว', 'ขนาดห้อง: 20 ตารางเมตร'],
      price: '500',
      image: 'img/imgroom1.jpg',
    },
    {
      title: 'ห้องดีลักซ์ สำหรับ 3 คน',
      details: ['1 เตียงใหญ่ และ 1 เตียงเดี่ยว', 'ขนาดห้อง: 25 ตารางเมตร'],
      price: '700',
      image: 'img/imgroom2.jpg',
    },
    {
      title: 'ห้องพักสำหรับครอบครัว',
      details: ['2 เตียงใหญ่ และ 1 เตียง 2 ชั้น', 'ขนาดห้อง: 35 ตารางเมตร'],
      price: '1000',
      image: 'img/imgroom3.jpg',
    },
  ];
}

function HomeDetails2() {
  const rooms = getRooms();

  return (
    <div className="home-details">
      <h2>เลือกประเภทห้องพัก</h2>
      {rooms.map((room, index) => (
        <RoomCard
          key={index}
          title={room.title}
          details={room.details}
          price={room.price}
          image={room.image}
        />
      ))}
    </div>
  );
}

export default HomeDetails2;