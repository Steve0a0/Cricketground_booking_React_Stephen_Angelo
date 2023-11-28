import React from 'react'
import './Grounds.css'
import {bookgrounds} from '../data/data'

const Grounds = () => {
    const openWhatsApp = (phoneNumber, message) => {
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    };
  return (
    <div className='headbook' >
    <div className='bookground' >
        <h1>Grounds</h1>
        </div>
        <div>
        <div className="topcard">
            {bookgrounds.map((item) =>(
                <div className="card" key={item.id}>
            <img src={item.image} alt="Cricket Ground" className="card-img" />
            <div className="card-content">
              <h2>{item.name}</h2>
              <p>{item.location}</p>
              <ul>
                <li><strong>Facilities:</strong> {item.facilities.join(', ')}</li>
                <li><strong>Price per Hour:</strong> {item.priceperhour}</li>
                <li><strong>Available Slots:</strong> {item.slots}</li>
              </ul>
              <div className="card-footer">
                <p>Rating: {item.rating}/5</p>
                <button onClick={() => openWhatsApp(+353894274383, 'I want to book this ground.')}>Book Now <i className="fab fa-whatsapp"></i></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Grounds;