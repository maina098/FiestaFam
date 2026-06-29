import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="page-title" dangerouslySetInnerHTML={{
        __html: `
         <div class="swiper relative slider-page-title">
             <div class="swiper-wrapper">
                  <div class="swiper-slide">
                     <div class="content text-center">
                          <div class="themesflat-container">
                              <div class="row">
                                  <div class="col-12">
                                      <div class="text">Bringing Class To Cuisine</div>
                                      <div class="heading">Where every flavor tells a story</div>
                                      <p>Craving some delicious, authentic meals? Maybe you’re in the mood for juicy lamb chops or sticky toffee? No matter what kind of meal you have in <br /> mind, Fiesta Farm is ready to prepare it for you.</p>
                                      <a class="button-two-line" href="/menu">DISCOVERY MENU</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="swiper-pagination style-number page-title-pagination"></div>
          </div>
        `
      }} />

      <div className="wg-about-us">
          <div className="themesflat-container">
              <div className="row">
                  <div className="col-lg-7">
                      <div className="content">
                          <div className="heading-section">
                              <div className="sub wow fadeInUp">About Restaurant</div>
                              <div className="main wow fadeInUp">Top-tier luxury <br /> restaurant in Nairobi</div>
                              <div className="divider wow fadeInUp"><div></div></div>
                              <div className="description wow fadeInUp">We see our customers as invited guests to a party, and we are the hosts. <br /> It’s our job every day to make every important aspect.</div>
                          </div>
                          <p className="wow fadeInUp">Welcome to Fiesta Farm! Located in the heart of Nairobi, we take pride in offering an exceptional dining experience. Drawing on our rich experience in the hospitality industry, we have created a place celebrating great food, a wonderful atmosphere, and the joy of coming together.</p>
                          <Link className="button-two-line wow fadeInUp" href="/about">MORE ABOUT US</Link>
                      </div>
                  </div>
                  <div className="col-lg-5">
                      <div className="image wow fadeInRight">
                          <img className="w-full" src="/assets/images/box-item/about-1.jpg" alt="About us" />
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="wg-box-icon">
          <div className="themesflat-container">
              <div className="row">
                  <div className="col-md-3">
                      <div className="box-icon wow fadeInUp">
                          <div className="icon"><img src="/assets/images/item-background/food.png" alt="food" /></div>
                          <div className="title"><Link href="#">Food is always fresh</Link></div>
                          <p>The food we choose is always fresh and carefully checked before processing</p>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="box-icon wow fadeInUp" data-wow-delay="0.1s">
                          <div className="icon"><img src="/assets/images/item-background/chef.png" alt="chef" /></div>
                          <div className="title"><Link href="#">longtime chef</Link></div>
                          <p>The best Chefs in the world always have their own secrets for their dishes</p>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="box-icon wow fadeInUp" data-wow-delay="0.2s">
                          <div className="icon"><img src="/assets/images/item-background/music.png" alt="music" /></div>
                          <div className="title"><Link href="#">Luxury space & music</Link></div>
                          <p>What&apos;s better than enjoying delicious food and music at the same time</p>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="box-icon wow fadeInUp mb-0" data-wow-delay="0.3s">
                          <div className="icon"><img src="/assets/images/item-background/wines.png" alt="wine" /></div>
                          <div className="title"><Link href="#">drinks and wines</Link></div>
                          <p>The wines at the restaurant are all precious and of the best quality for you enjoy</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="wg-menu-highlights pt-5 pb-5 mb-5" style={{backgroundColor: '#f9f9f9'}}>
          <div className="themesflat-container">
              <div className="row">
                  <div className="col-12 text-center mb-5">
                      <div className="heading-section">
                          <div className="sub wow fadeInUp">The Fiesta Farm</div>
                          <div className="main wow fadeInUp">Menu Highlights</div>
                          <div className="divider wow fadeInUp"><div></div></div>
                          <div className="description wow fadeInUp">Discover our signature dishes, crafted to perfection.</div>
                      </div>
                  </div>
              </div>
              <div className="row justify-content-center">
                  <div className="col-md-6 mb-4 wow fadeInUp">
                      <div className="menu-item p-4 border rounded shadow-sm bg-white h-100 d-flex align-items-center">
                          <img src="/assets/images/menu/chicken-wings.jpg" alt="Buffalo Wings" style={{width: '90px', height: '90px', objectFit: 'cover', borderRadius: '10px', marginRight: '20px'}} />
                          <div className="flex-grow-1">
                              <div className="d-flex justify-content-between align-items-center mb-2">
                                  <h4 className="m-0" style={{color: '#d4af37', fontSize: '22px'}}>Buffalo Wings</h4>
                                  <h5 className="m-0 text-dark">Ksh 950</h5>
                              </div>
                              <p className="text-muted m-0">Chuckling Good Wings marinated in Bufalo hot sauce, chili lime.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6 mb-4 wow fadeInUp" data-wow-delay="0.1s">
                      <div className="menu-item p-4 border rounded shadow-sm bg-white h-100 d-flex align-items-center">
                          <img src="/assets/images/menu/roast-lamb-chops.jpg" alt="Lamb Chops" style={{width: '90px', height: '90px', objectFit: 'cover', borderRadius: '10px', marginRight: '20px'}} />
                          <div className="flex-grow-1">
                              <div className="d-flex justify-content-between align-items-center mb-2">
                                  <h4 className="m-0" style={{color: '#d4af37', fontSize: '22px'}}>Lamb Chops</h4>
                                  <h5 className="m-0 text-dark">Ksh 1900</h5>
                              </div>
                              <p className="text-muted m-0">Seasoned lamb chops Grilled juicy served with barbecue sauce and a side of choice.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6 mb-4 wow fadeInUp" data-wow-delay="0.2s">
                      <div className="menu-item p-4 border rounded shadow-sm bg-white h-100 d-flex align-items-center">
                          <img src="/assets/images/menu/sticky-toffee.jpg" alt="Sticky Toffee Temptation" style={{width: '90px', height: '90px', objectFit: 'cover', borderRadius: '10px', marginRight: '20px'}} />
                          <div className="flex-grow-1">
                              <div className="d-flex justify-content-between align-items-center mb-2">
                                  <h4 className="m-0" style={{color: '#d4af37', fontSize: '22px'}}>Sticky Toffee Temptation</h4>
                                  <h5 className="m-0 text-dark">Ksh 1300</h5>
                              </div>
                              <p className="text-muted m-0">Indulge in a warm sticky date toffee pudding drizzled with butterscotch with vanilla ice cream.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6 mb-4 wow fadeInUp" data-wow-delay="0.3s">
                      <div className="menu-item p-4 border rounded shadow-sm bg-white h-100 d-flex align-items-center">
                          <img src="/assets/images/menu/beef-burger.jpg" alt="Blissful Beef Duo" style={{width: '90px', height: '90px', objectFit: 'cover', borderRadius: '10px', marginRight: '20px'}} />
                          <div className="flex-grow-1">
                              <div className="d-flex justify-content-between align-items-center mb-2">
                                  <h4 className="m-0" style={{color: '#d4af37', fontSize: '22px'}}>Blissful Beef Duo</h4>
                                  <h5 className="m-0 text-dark">Ksh 1450</h5>
                              </div>
                              <p className="text-muted m-0">Two beef patties, cheddar cheese, tomatoes, lettuce, and signature sauce served with golden fries.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="wg-location pb-5">
          <div className="themesflat-container">
              <div className="row">
                  <div className="col-12 text-center mb-5">
                      <div className="heading-section">
                          <div className="sub wow fadeInUp">Find Us</div>
                          <div className="main wow fadeInUp">Location & Contact</div>
                          <div className="divider wow fadeInUp"><div></div></div>
                          <div className="description wow fadeInUp">Visit Fiesta Farm or call us for reservations and inquiries. <br/> <strong>Contact Number:</strong> <a href="tel:0793303030" style={{color: '#ffb800'}}>0793303030</a></div>
                      </div>
                  </div>
                  <div className="col-12 wow fadeInUp">
                      <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3988.6558714864377!2d36.74865869999999!3d-1.3831157999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x182f0531e89a1d69%3A0xcf07d48e1e0d8d8b!2sThe%20Fiesta%20Farm%2C%20Hs%2005%20Nguruwe%20Rd%2C%20Nairobi!3m2!1d-1.3831158!2d36.7486587!4m5!1s0x182f0531e89a1d69%3A0xcf07d48e1e0d8d8b!2sThe%20Fiesta%20Farm%2C%20Hs%2005%20Nguruwe%20Rd%2C%20Nairobi!3m2!1d-1.3831158!2d36.7486587!5e0!3m2!1sen!2ske!4v1782715395052!5m2!1sen!2ske" 
                          width="100%" 
                          height="450" 
                          style={{border:0, borderRadius: '15px'}} 
                          allowFullScreen={true} 
                          loading="lazy" 
                          referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}
