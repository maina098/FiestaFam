import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <>
    <header id="header_main" className="header header-fixed">
      <div className="header-top">
          <div className="left">
              <div className="wg-information">
                  <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16">
                          <image id="_" data-name="" width="13" height="16" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAgCAYAAAAMq2gFAAADaUlEQVRIia2We29UVRTFfx0uCC3TFtoCxUJRgwISCIjGQEz8xxg/l1/HT4CJPEQwCAIFlTdKQCmP1nagUx5TyE5+x1xO7p1pE3dy00nnzF577bX2Prfv9Hff0iUawGpgDTAADAJN//ccaAFzwDPgFfCiLlXRDcWkI8BG/24A1gsUSeeBx8CMfx9bwLKBgsk48BGwH9gNTAoc7PqAJcEeAXeAi8AF4FoVWBXQOmAb8CnwiUC7gK01RQXYXWACGJPxddnVAq0FdgJfAF8DH9uyobreyvA99dtmJ44BZ4AnVUANqz4CfAMcVpPlxCpgk+f7bW3oN6VhOmWgYWAf8BXw+QpAyhEm+VCNZnXiFeBpIZOg/z5wUE1GKpK0bEXLBGs9NyKjFO/Y/sOe/zt0LGzfiAAHbEEe81YWzroNtBU+OnAI2J6dD0336MZfY84So2GdtVP6KTpBW8seB05lQFHtS5+tOjbFmCMRhT9MjJrac0LqKRaBWwJ8r7jztu6RnxcF+tLfpwjQUZ+hQpcM2r6BCl2uAmdt3Uzpu7ZFYPX7MyDMHaba0BBk2EHLY8H23Bc0j9gOD2XXrvh+jd0aTEtztVrVxWuflcZ/+RuukAUrypP1K/KEzPNoKPZYZoQUr5yp54WumtPzz7IWNnXjtN//VroSoi1bgM8ci6oBbzu4s4VsIslfarGj5LwYyg9KTDcD93TaoLNyxEHPh7xtgZFzupBabNrfnaPxEtAqh2+Xn8czoFg3e4F33W8pOprohudnCmfgiVM/aZW5HgPeTVuy1g3p2L7sfIzBJeB8cmxhWxZdF1OulE3qU451NYLn0ZHFWcFCoxdlS/9r+352OKvmpldE0Q+Ay8AvwM3k5vI1EcP3D/CTrRutYNUrWoKc9pZ9ms7nN+yc936/18boCu+lO6XlO13+It8GSwo55VV8TbP0io7duKA2t/Lf1b0FhTV/dOLHdWO3mFGTU7ZsMT9bt99eyuaM7Ga77LolLRzanss2fE8gTB7uO+EtOVdxJrlsSkY3arZ4zzfVBzqo6fppZu8HLYs4KchCXaJeQC1ZrXfnbVSztAliTo4CP+QuWylQAvtDoTe7dmLZRuJgG0/YumssBygiWhhAsZpitoJhGCXeI9J1/r8AxRKNKzt0iMkPoDDAn3XivxXAG/709S6pPU+LAAAAAElFTkSuQmCC"/>
                      </svg>
                  </div>
                  <div className="content">   
                      <p className="tf-color">Hs 05 Nguruwe Rd</p>
                      <p>Nairobi</p>
                  </div>
              </div>
              <div className="wg-information">
                  <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 17 13">
                          <image id="_" data-name="" width="17" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAaCAYAAADSbo4CAAADAElEQVRIic2WWWtTQRiGnzSnaWtbbN2tW4tYUay4XKgg6m/wL/lPvPY3eFkv3FBRUEFRbF3q1s1qkjbyhWdgCF0Sl+oHQybnnHnnnffbpjR54xqZFcBWYAewGxgASsA3YA6YAb4AXb4fAbYBPcCKI7eS82q2/oPzH/n3RcuiIDEGjAJ7gcGMyDwwDbwBvgJliR6WVN2RWxBuADU3/yjGlGOulUjJjU8Dl4GTgld8XxfsPfAQmARe+34COC9GqyLJVlTlu4rcB24CD1S4SaQf2C7YFeAicDQjkVuQOaArJv1dBno9SLEGkdziUPuAPqAbuBNqx8Jxx1XgHLBnDRK4cNx5uO058AzYAlxy7UYWex5TgF5VehEPzzhCiZE2gHoyxeoqE2AH2ySCBMaNvVeBGUQuAKeUtl2rGNQvgdsG8pxuKneAM+r+fUmmMYOtKuiSoMkavq/ohgHnO4FdwIKnW9BlDVVaNE2RYBo9xsgWg71UKOewH8/r92mBUh2om4rDnmJMoH6JNCTxWdkbZkdk1ifJlCTRp/qR9kO6dLbwZGnDJfP7qcDpeU2QETfPo37Yb4P4rCrhfEoyM7quqppnLIRDqtNbZJv9ihUCFar23d+UxmWVjAL42GI46OHPZjj1oqUa9nna0jqu2akSydI3DeNqRSJx2kNihsvvqhDG5WK2rlo4SRZsjwD7NwjWSva8sQqRbgkPWgCXraKPVqm+jSRtTqRilW3XciK5i8vGUr//T1inagbuhH2NRL6dkvwnbLc97KAbH8qKX3UziUScHDdl0/9e5/XNJNLtGFzlXdO1XZtEZEP7r4h00qT+Foeurpb0/RfWLAG/S2Qgy4DUBFcLyPUsgrgcRN7ll9gOrW5dWM4uz7UOMaJjf470vWWHjLKe0nkjlVIVjd7xBHirOjUbXLpWrIWT1jevidEMY+Prltu4V4TE693GW4Gi/ce9I5paYN2zvYeb1iOSQiKuHeGR5n0kLkLRyOJ0nRKJ8hxdNH7D4t4RWKk7t0NkFlj6CW2ly+DSZ9BoAAAAAElFTkSuQmCC"/>
                      </svg>
                  </div>
                  <div className="content">
                      <p className="tf-color">Email Contact</p>
                      <p>fiestafarm@gmail.com</p>
                  </div>
              </div>
          </div>
          <div className="right">
              <div className="wg-information">
                  <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15">
                          <image id="_" data-name="" width="17" height="15" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAEFklEQVRYhbWXW2+UVRSGn6nTOqXnQk/WUFEpghIrFYmNh6gx3viv/DHeGK+81HiIEEXRKIkoRqFNtXUsWhjAocxYs+qzze7XmXYa05Xs5Jt9WOtdh3ftPaUL77zFHtIFlB3dQC8w4KgAJY9vAnWg5vgLuA80HH/vZqa8FwqgDxgGhoB+vwf3AHILWAduAzf9rv0fIEeAJ4CTwGPAw8CE4LpbnG8YhTvAb8Ay8BNwBfgeWNsPkPB8HJgEHgGecpwAjgqgEwlAS8APwOPAMeA6sApUjVRbIBHueeA54LSGA9BhYKRDAEm6jeIoMAssCOwycBH4Ik9XAOkx1xHySMHLwDngVGa8oRd/mvcNPa6bBkxXRQA91tOIQEaMSpyfAcZcv2IK62UnIvevAS8ZiQnnsQgXgW/M8wpwV1bUshAPGdFg1SFgyvp6GnjUoh7x96RznwAfRC2VZUAAeQF41d9kkQgQF4D3ge+MQDkrytvu7c+KuOH3qSxiM57rd4xJ6aihW2XDGd48HNQ/w/3r+jP927X2AAAAAElFTkSuQmCC"/>
                      </svg>
                  </div>
                  <div className="content">
                      <p className="tf-color">Phone Call Us</p>
                      <p className="number-phone">0793303030</p>
                  </div>
              </div>
              <div className="button-right">
                  <Link href="/book-a-table" className="button-default">BOOK A TABLE</Link>
              </div>
          </div>
      </div>
      <div className="header-inner"> 
          <div className="header-inner-wrap">
              <div className="flex">
                  <div id="site-logo">
                      <div className="site-logo-wrap">
                          <Link href="/" className="main-logo">
                              <img id="logo_header" alt="logo" src="/assets/images/logo/logo.png" data-retina="/assets/images/logo/logo@2x.png" />
                          </Link>
                      </div>
                  </div>
                  <div className="header-left">
                      <div className="canvas">
                          <div className="canvas-button"><span></span></div>
                          <div className="wg-welcom">
                              <div className="inner">
                                  <div className="button-close"><i className="icon-close"></i></div>
                                  <h2 style={{color: '#d4af37', marginBottom: '15px'}}>Fiesta Farm</h2>
                                  <div className="text">Drawing on their respective experiences in the hospitality industry, the duo imagined a place celebrating.</div>
                                  <div className="number-phone">0793303030</div>
                                  <div className="text line-under">Hs 05 Nguruwe Rd, Nairobi <br/> fiestafarm@gmail.com</div>
                                  <div className="text line-under">Opening Hour: <br/> Mon - Fri : 9.00am - 22.00pm, Holidays : Close</div>
                                  <div className="widget-social justify-center">
                                      <ul className="">
                                          <li><Link href="#" className="icon-fb"></Link></li>
                                          <li><Link href="#" className="icon-trip"></Link></li>
                                          <li><Link href="#" className="icon-youtube-play"></Link></li>
                                          <li><Link href="#" className="icon-instagram2"></Link></li>
                                      </ul>
                                  </div>                                        
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <nav className="main-nav">
                  <ul className="menu-primary-menu">
                      <li className="menu-item menu-item-has-children current-menu-item">
                          <a href="/">Home</a>
                      </li>
                      <li className="menu-item menu-item-has-children">
                          <a href="#">Pages</a>
                          <ul className="sub-menu">
                              <li className="menu-item"><a href="/about">About</a></li>
                              <li className="menu-item"><a href="/book-a-table">Book A Table</a></li>
                              <li className="menu-item"><a href="/services">Services</a></li>
                              <li className="menu-item"><a href="/shop">Shop</a></li>
                          </ul>
                      </li>
                      <li className="menu-item menu-item-has-children">
                          <a href="/menu">Menu</a>
                      </li>
                      <li className="menu-item">
                          <a href="/contact">Contact</a>
                      </li>
                  </ul>
              </nav>
              <div className="header-right">
                  <div className="header-search">
                      <Link href="#" className="show-search">
                          <i className="icon-search"></i>
                      </Link>
                      <div className="top-search">
                          <form className="search-form relative">
                              <fieldset className="search">
                                  <input type="search" placeholder="Search..." className="" name="search" tabIndex={2} aria-required="true" required />
                              </fieldset>
                              <div className="">
                                  <button className="" type="submit"><i className="icon-search"></i></button>
                              </div>
                          </form>
                      </div>
                  </div>
                  <div className="mobile-button ">
                      <span></span>
                  </div>
              </div>
          </div>
      </div>
    </header>
    <div className="inject-space" style={{ display: 'none' }}></div>
    </>
  );
}
