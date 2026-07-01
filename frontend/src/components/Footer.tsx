"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin') || pathname?.startsWith('/staff') || pathname?.startsWith('/customer') || pathname?.startsWith('/client')) return null;

  return (
    <footer id="footer" className="footer">
        <div className="themesflat-container">
            <div className="row">
                <div className="col-12">
                    <div className="logo-footer" id="logo-footer">
                        <Link href="/">
                            <img id="logo_footer" alt="" src="/assets/images/logo/logo-ft.png" data-retina="/assets/images/logo/logo-ft@2x.png" />
                        </Link>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="footer-left">
                        <div className="footer-title">WE ARE HERE</div>
                        <p>
                            Hs 05 Nguruwe Rd, Nairobi <br />
                            fiestafarm@gmail.com <br />
                            0793303030
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="footer-center">
                        <p>A distinctive, well-preserved and comfortable space, high-quality products, authentic cuisine, food and drinks are done flawlessly.</p>
                        <div className="widget-social-text">
                            <ul className="flex-wrap">
                                <li><Link href="#">facebook</Link></li>
                                <li><Link href="#">instagram</Link></li>
                                <li><Link href="#">tripadvisor</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="footer-right">
                        <div className="footer-title">OPENING TIME</div>
                        <p>
                            Mon - Fri: 08:00 am - 09:00pm <br />
                            Sat - Sun: 10:00 am - 11:00pm <br />
                            Holiday: Close
                        </p>
                    </div>
                </div>
                <div className="col-12">
                    <div className="footer-bottom">
                        <p>Copyright © 2026 FiestaFarm. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}
