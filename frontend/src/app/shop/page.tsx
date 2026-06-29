'use client';
import React from 'react';
import Link from 'next/link';

export default function ShopPage() {
  const shopImages = [
    { src: '/assets/images/shop/shop-1.jpg', alt: 'Fiesta Farm Outdoor Dining' },
    { src: '/assets/images/shop/shop-2.jpg', alt: 'Steak and Veggies' },
    { src: '/assets/images/shop/shop-3.jpg', alt: 'Roast Lamb Chops' },
    { src: '/assets/images/shop/shop-4.jpg', alt: 'Fiesta Farm Signage' },
    { src: '/assets/images/shop/shop-5.jpg', alt: 'Outdoor Seating Area' },
    { src: '/assets/images/shop/shop-6.jpg', alt: 'Fresh Salads and Drinks' },
    { src: '/assets/images/shop/shop-7.jpg', alt: 'Fiesta Farm Main Building' },
    { src: '/assets/images/shop/shop-8.jpg', alt: 'Lamb Chops with Mash' },
    { src: '/assets/images/shop/shop-9.jpg', alt: 'Outdoor Group Dining Table' },
    { src: '/assets/images/shop/shop-10.jpg', alt: 'Chicken and Fresh Vegetables' }
  ];

  return (
    <>
      <div className="page-title">
          <div className="content text-center">
              <div className="themesflat-container">
                  <div className="row">
                      <div className="col-12">
                          <div className="text">Fiesta Farm Shop</div>
                          <div className="heading">Experience Our Gallery</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="wg-shop-gallery pt-5 pb-5 bg-light">
          <div className="themesflat-container">
              <div className="row mb-5 text-center">
                  <div className="col-12">
                      <div className="heading-section">
                          <div className="sub wow fadeInUp">The Fiesta Farm</div>
                          <div className="main wow fadeInUp">Our Shop & Atmosphere</div>
                          <div className="divider mx-auto wow fadeInUp"><div></div></div>
                          <p className="mt-3 text-muted wow fadeInUp">Take a look at our beautiful outdoor seating, serene environment, and mouth-watering dishes.</p>
                      </div>
                  </div>
              </div>

              <div className="row justify-content-center">
                  {shopImages.map((image, index) => (
                      <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay={`${index * 0.1}s`} key={index}>
                          <div className="shop-image-card h-100 rounded overflow-hidden shadow-sm" style={{ backgroundColor: '#fff', border: '1px solid #eee' }}>
                              <img 
                                  src={image.src} 
                                  alt={image.alt} 
                                  className="w-100 h-100" 
                                  style={{ objectFit: 'cover', minHeight: '300px', maxHeight: '400px', transition: 'transform 0.3s ease' }} 
                                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                              />
                          </div>
                      </div>
                  ))}
              </div>
              
              <div className="row mt-5">
                  <div className="col-12 text-center wow fadeInUp">
                      <Link href="/book-a-table" className="button-two-line">BOOK A TABLE NOW</Link>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}
