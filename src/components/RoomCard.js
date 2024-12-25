import React from 'react';
import './RoomCard.css';

function RoomCard({ title, details, price, image }) {
  return (
    <div className="room-card">
      <img src={image} alt={title} className="room-image" />
      <div className="room-info">
        <h3 className="room-title">{title}</h3>
        <ul className="room-details">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
        <div className="room-footer">
          <span className="room-price">ราคาต่อคืน : {price} บาท</span>
          <button className="btn-room">เข้าจอง</button>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;