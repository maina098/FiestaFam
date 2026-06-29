'use client';
import React, { useState } from 'react';

export default function BookATablePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    time: '19:00',
    guests: 2,
    date: new Date().toISOString().split('T')[0],
  });
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3001/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          guests: parseInt(formData.guests.toString(), 10),
          date: new Date(formData.date).toISOString(),
        }),
      });

      if (res.ok) {
        const waMessage = `*New Reservation Request*
Name: ${formData.name}
Phone: ${formData.phone}
Date: ${formData.date}
Time: ${formData.time}
Guests: ${formData.guests}`;
        const waUrl = `https://wa.me/254793303030?text=${encodeURIComponent(waMessage)}`;
        window.open(waUrl, '_blank');

        setMessage('Reservation successful! Redirecting to WhatsApp...');
        setFormData({
          name: '',
          phone: '',
          time: '19:00',
          guests: 2,
          date: new Date().toISOString().split('T')[0],
        });
      } else {
        setMessage('Failed to make reservation. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <div className="page-title">
          <div className="content text-center">
              <div className="themesflat-container">
                  <div className="row">
                      <div className="col-12">
                          <div className="text">Book A Table</div>
                          <div className="heading">Reserve Your Spot</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="wg-reservations" style={{ padding: '80px 0' }}>
          <div className="themesflat-container">
              <div className="row">
                  <div className="col-md-6 m-auto">
                      <div className="content">
                          <div className="heading-section text-center">
                              <div className="sub wow fadeInUp">Reservations</div>
                              <div className="main wow fadeInUp">booking a table</div>
                              <div className="text wow fadeInUp">After booking we will call the customer to confirm, so please <br /> enter your name and phone number is required</div>
                              <div className="divider wow fadeInUp"><div></div></div>
                          </div>
                          {message && <p className="text-center" style={{ color: message.includes('success') ? 'green' : 'red' }}>{message}</p>}
                          <form className="book-form" onSubmit={handleSubmit}>
                              <fieldset className="name">
                                  <input type="text" placeholder="Name*" name="name" value={formData.name} onChange={handleChange} required />
                              </fieldset>
                              <div className="columns">
                                  <fieldset className="phone">
                                      <input type="text" placeholder="Phone*" name="phone" value={formData.phone} onChange={handleChange} required />
                                  </fieldset>
                                  <fieldset className="hour select">
                                      <input type="time" name="time" value={formData.time} onChange={handleChange} required />
                                  </fieldset>
                              </div>
                              <div className="columns">
                                  <fieldset className="select event-number">
                                      <select name="guests" value={formData.guests} onChange={handleChange}>
                                          <option value="1">1 Person</option>
                                          <option value="2">2 People</option>
                                          <option value="3">3 People</option>
                                          <option value="4">4 People</option>
                                          <option value="5">5 People</option>
                                          <option value="10">10 People</option>
                                      </select>
                                  </fieldset>
                                  <fieldset className="time select">
                                      <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                                  </fieldset>
                              </div>
                              <div className="bot">
                                  <button className="button-two-line w-full" type="submit" style={{ cursor: 'pointer', border: 'none' }}>BOOK NOW</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}
