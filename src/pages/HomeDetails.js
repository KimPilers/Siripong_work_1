import React from "react";
import "./HomeDetails.css";

function HomeDetails() {
  return (
    <div className="home-details-container">
      {/* Left Section */}
      <div className="home-details-left">
        <h1 className="title">
          โรงแรมวี บริซ่า เชียงใหม่ (We Briza Hotel Chiangmai)
        </h1>
        <p className="description">
          โรงแรมตั้งอยู่ห่างจากไนท์บาซาร์เชียงใหม่โดยรถยนต์ 10 นาที
          ห่างจากสนามบินนานาชาติเชียงใหม่ 20 นาที
          และห่างจากวัดเจ็ดยอดเพียง 1.2 กิโลเมตร
        </p>
        <p className="description">
          ห้องพักมีทีวี มินิบาร์ ห้องน้ำส่วนตัวพร้อมฝักบัวและเครื่องใช้ในห้องน้ำฟรี
          ผู้เข้าพักสามารถเพลิดเพลินกับการชมวิวเมืองจากห้องพัก
        </p>
        <p className="description">
          มีสิ่งอำนวยความสะดวกและการบริการ ได้แก่ แผนกต้อนรับ 24 ชั่วโมง
          โต๊ะบริการทัวร์ บริการซักรีด และที่จอดรถฟรี
        </p>
        <button className="btn-details">ดูรายละเอียดห้องพัก</button>
      </div>

      {/* Right Section */}
      <div className="home-details-right">
        <h2 className="popular-title">ที่เที่ยวยอดนิยม</h2>
        <ul className="popular-list">
          <li>ประตูท่าแพ - 1.4 กม.</li>
          <li>เชียงใหม่ไนท์บาซาร์ - 1.5 กม.</li>
          <li>วัดเจ็ดยอด - 1.9 กม.</li>
          <li>วัดพระสิงห์ - 2.1 กม.</li>
          <li>ถนนคนเดินวันอาทิตย์ - 2.3 กม.</li>
        </ul>
      </div>
    </div>
  );
}

export default HomeDetails;
