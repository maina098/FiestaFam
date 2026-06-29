import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const featureCategories = [
    {
      title: "Accessibility",
      icon: "♿",
      items: ["Wheelchair-accessible car park", "Wheelchair-accessible seating", "Wheelchair-accessible toilet"]
    },
    {
      title: "Service Options",
      icon: "🍽️",
      items: ["Outdoor seating", "Takeaway", "Dine-in"]
    },
    {
      title: "Highlights",
      icon: "✨",
      items: ["Great cocktails", "Great coffee", "Great dessert", "Great tea selection"]
    },
    {
      title: "Popular For",
      icon: "⭐",
      items: ["Lunch", "Dinner", "Solo dining"]
    },
    {
      title: "Offerings",
      icon: "☕",
      items: ["Coffee", "Halal food", "Quick bite", "Small plates"]
    },
    {
      title: "Dining Options",
      icon: "🍳",
      items: ["Breakfast", "Lunch", "Dinner", "Dessert", "Seating", "Table service"]
    },
    {
      title: "Atmosphere",
      icon: "🕯️",
      items: ["Casual", "Cosy", "Quiet", "Romantic"]
    },
    {
      title: "Planning & Payments",
      icon: "📅",
      items: [
        "Lunch reservations recommended", 
        "Accepts reservations", 
        "Cheques, Credit cards, Debit cards", 
        "NFC mobile payments"
      ]
    },
    {
      title: "Children & Parking",
      icon: "🚗",
      items: [
        "Good for kids", 
        "Good for kids birthday", 
        "Free parking lot", 
        "Plenty of parking"
      ]
    }
  ];

  return (
    <>
      <div className="page-title">
          <div className="content text-center">
              <div className="themesflat-container">
                  <div className="row">
                      <div className="col-12">
                          <div className="text">About Us</div>
                          <div className="heading">Experience Fiesta Farm</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="wg-about-us pt-5 pb-5">
          <div className="themesflat-container">
              <div className="row">
                  <div className="col-lg-6 mb-5">
                      <div className="content">
                          <div className="heading-section">
                              <div className="sub wow fadeInUp">Welcome To</div>
                              <div className="main wow fadeInUp">The Fiesta Farm</div>
                              <div className="divider wow fadeInUp"><div></div></div>
                          </div>
                          <p className="wow fadeInUp mb-4">
                              We see our customers as invited guests to a party, and we are the hosts. It’s our job every day to make every important aspect of your dining experience perfect. 
                          </p>
                          <p className="wow fadeInUp">
                              Whether you are looking for a romantic dinner, a casual lunch, or a place to celebrate with your family, The Fiesta Farm offers an unforgettable atmosphere with top-tier culinary delights.
                          </p>
                      </div>
                  </div>
                  <div className="col-lg-6 mb-5">
                      <div className="image wow fadeInRight">
                          <img className="w-100 rounded shadow-sm" src="/assets/images/box-item/about-1.jpg" alt="About The Fiesta Farm" style={{objectFit: 'cover', height: '400px'}} />
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="wg-features py-5 bg-light">
          <div className="themesflat-container">
              <div className="row mb-5 text-center">
                  <div className="col-12">
                      <div className="heading-section">
                          <div className="sub wow fadeInUp">What We Offer</div>
                          <div className="main wow fadeInUp">Features & Amenities</div>
                          <div className="divider mx-auto wow fadeInUp"><div></div></div>
                      </div>
                  </div>
              </div>
              
              <div className="row">
                  {featureCategories.map((category, index) => (
                      <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay={`${index * 0.1}s`} key={index}>
                          <div className="feature-card p-4 bg-white rounded shadow-sm h-100 border">
                              <div className="d-flex align-items-center mb-3">
                                  <span className="fs-3 me-3">{category.icon}</span>
                                  <h4 className="m-0 text-dark" style={{fontSize: '20px'}}>{category.title}</h4>
                              </div>
                              <ul className="list-unstyled m-0 text-muted" style={{lineHeight: '1.8'}}>
                                  {category.items.map((item, i) => (
                                      <li key={i}><i className="icon-check text-warning me-2"></i>{item}</li>
                                  ))}
                              </ul>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
    </>
  );
}
