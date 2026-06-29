import React from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  const reviews = [
    {
      name: "Chebet Leila",
      role: "Local Guide · 45 reviews",
      rating: 5,
      time: "10 months ago",
      text: "Went there with my work colleagues for lunch. A beautiful and serene environment located in Karen. The food was absolutely delicious and the portions were quite generous. The lamb chops is a must try. The service was good and on time, the waiters were very friendly. We enjoyed and we'd definitely go back."
    },
    {
      name: "Naima Abdihakim",
      role: "1 review",
      rating: 5,
      time: "4 weeks ago",
      text: "I would like to sincerely thank the Team at Fiesta Farm for their warm welcome, kindness, and the respect they showed us. Thank you very much. It is a beautiful place with a peaceful and relaxing atmosphere, and my family and I truly enjoyed it."
    },
    {
      name: "Bobby Ghose",
      role: "Local Guide · 14 reviews",
      rating: 4,
      time: "6 months ago",
      text: "This place has a great setting and a really relaxed atmosphere. A group of 4 of us went there for lunch, without realising beforehand that no alcoholic drinks are served here. Not a problem, it was a warm sunny day so soft drinks, juices and great food made up for it."
    }
  ];

  return (
    <>
      <div className="page-title">
          <div className="content text-center">
              <div className="themesflat-container">
                  <div className="row">
                      <div className="col-12">
                          <div className="text">Fiesta Farm Services</div>
                          <div className="heading">Experience Excellence</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="wg-services pt-5 pb-5">
          <div className="themesflat-container">
              <div className="row mb-5 text-center">
                  <div className="col-12">
                      <div className="heading-section">
                          <div className="sub wow fadeInUp">What We Offer</div>
                          <div className="main wow fadeInUp">Exceptional Hospitality</div>
                          <div className="divider mx-auto wow fadeInUp"><div></div></div>
                          <p className="mt-3 text-muted wow fadeInUp">We provide a premium dining experience with top-tier service, beautiful outdoor ambiance, and dedicated staff.</p>
                      </div>
                  </div>
              </div>
              
              <div className="row justify-content-center mb-5 pb-5">
                  <div className="col-md-4 mb-4 wow fadeInUp">
                      <div className="service-box text-center p-4 border rounded shadow-sm bg-white h-100">
                          <h4 style={{color: '#d4af37'}}>Corporate Lunches</h4>
                          <p className="text-muted mt-3">A serene environment perfect for hosting work colleagues and business meetings with generous food portions and prompt service.</p>
                      </div>
                  </div>
                  <div className="col-md-4 mb-4 wow fadeInUp" data-wow-delay="0.1s">
                      <div className="service-box text-center p-4 border rounded shadow-sm bg-white h-100">
                          <h4 style={{color: '#d4af37'}}>Family Gatherings</h4>
                          <p className="text-muted mt-3">A peaceful and relaxing atmosphere where families are treated with warmth, kindness, and deep respect by our friendly team.</p>
                      </div>
                  </div>
                  <div className="col-md-4 mb-4 wow fadeInUp" data-wow-delay="0.2s">
                      <div className="service-box text-center p-4 border rounded shadow-sm bg-white h-100">
                          <h4 style={{color: '#d4af37'}}>Relaxed Dining</h4>
                          <p className="text-muted mt-3">Enjoy our great sunny setting and relaxed atmosphere. Pair our excellent food with a refreshing selection of soft drinks and fresh juices.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="wg-testimonials pt-5 pb-5" style={{backgroundColor: '#f9f9f9'}}>
          <div className="themesflat-container">
              <div className="row mb-5 text-center">
                  <div className="col-12">
                      <div className="heading-section">
                          <div className="sub wow fadeInUp">Testimonials</div>
                          <div className="main wow fadeInUp">What Our Guests Say</div>
                          <div className="divider mx-auto wow fadeInUp"><div></div></div>
                      </div>
                  </div>
              </div>

              <div className="row justify-content-center">
                  {reviews.map((review, index) => (
                      <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay={`${index * 0.1}s`} key={index}>
                          <div className="review-card p-4 bg-white rounded shadow-sm h-100 d-flex flex-column" style={{borderTop: '4px solid #d4af37'}}>
                              <div className="d-flex align-items-center mb-3">
                                  <div className="avatar me-3" style={{width: '50px', height: '50px', backgroundColor: '#e2e2e2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#555', fontSize: '20px'}}>
                                      {review.name.charAt(0)}
                                  </div>
                                  <div>
                                      <h5 className="m-0 fw-bold">{review.name}</h5>
                                      <small className="text-muted">{review.role}</small>
                                  </div>
                              </div>
                              <div className="stars mb-2" style={{color: '#ffb800', fontSize: '18px'}}>
                                  {Array.from({length: 5}).map((_, i) => (
                                      <i key={i} className={`icon-star${i < review.rating ? '' : '-empty'}`} style={{marginRight: '2px'}}>★</i>
                                  ))}
                                  <span className="text-muted ms-2" style={{fontSize: '14px', color: '#999'}}>{review.time}</span>
                              </div>
                              <p className="text-muted mt-2" style={{fontStyle: 'italic', flexGrow: 1}}>"{review.text}"</p>
                          </div>
                      </div>
                  ))}
              </div>
              
              <div className="row mt-5">
                  <div className="col-12 text-center wow fadeInUp">
                      <Link href="/book-a-table" className="button-default">JOIN OUR HAPPY GUESTS</Link>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}
