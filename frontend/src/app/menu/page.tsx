'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface Category {
  id: string;
  name: string;
}

interface MenuItem {
  id: string;
  name: string;
  description: string | null;
  price: number;
  imageUrl: string | null;
  categoryId: string;
  category: Category;
}

interface GroupedMenu {
  [categoryName: string]: MenuItem[];
}

export default function MenuPage() {
  const [groupedMenu, setGroupedMenu] = useState<GroupedMenu>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/menu')
      .then((res) => res.json())
      .then((data: MenuItem[]) => {
        if (Array.isArray(data)) {
          // Group by category name
          const grouped = data.reduce((acc, item) => {
            const catName = item.category?.name || 'Other';
            if (!acc[catName]) acc[catName] = [];
            acc[catName].push(item);
            return acc;
          }, {} as GroupedMenu);
          setGroupedMenu(grouped);
        } else {
          console.error('API did not return an array:', data);
          setGroupedMenu({});
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch menu:', err);
        setLoading(false);
      });
  }, []);

  // Ordered categories to display logically
  const categoryOrder = [
    'Breakfast',
    'Appetizers',
    'Main Course',
    'Pizza & Pasta',
    'Grill & Thrill Delights',
    'Pizza Toppings',
    'Desserts',
    'Coffee',
    'Tea',
    'Shakes & Smoothies',
    'Iced Beverages',
    'Juices & Mojito',
    "Soft Drink's",
  ];

  const categoriesToDisplay = Object.keys(groupedMenu).sort((a, b) => {
    const indexA = categoryOrder.indexOf(a);
    const indexB = categoryOrder.indexOf(b);
    if (indexA === -1 && indexB === -1) return a.localeCompare(b);
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });

  return (
    <>
      <div className="page-title">
          <div className="content text-center">
              <div className="themesflat-container">
                  <div className="row">
                      <div className="col-12">
                          <div className="text">Discover Our Menu</div>
                          <div className="heading">Delicious and Fresh</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="wg-our-menu pt-5 pb-5" style={{backgroundColor: '#fafafa'}}>
          <div className="themesflat-container">
              {loading ? (
                <div className="text-center py-5">
                  <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : categoriesToDisplay.length === 0 ? (
                <p className="text-center py-5">No menu items found.</p>
              ) : (
                categoriesToDisplay.map((category) => (
                  <div key={category} className="menu-category-section mb-5 pb-4" style={{animation: 'fadeIn 0.5s ease-in-out'}}>
                    <div className="row">
                      <div className="col-12 text-center mb-5">
                        <div className="heading-section">
                            <div className="main" style={{fontSize: '36px', color: '#111', fontFamily: 'Lora, serif'}}>{category}</div>
                            <div className="divider mx-auto"><div></div></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="row justify-content-center">
                      {groupedMenu[category].map((item) => (
                        <div className="col-lg-6 col-md-12 mb-4" key={item.id}>
                          <div className="menu-item-box d-flex align-items-center p-3 bg-white h-100" style={{borderRadius: '15px', border: '1px solid #eee', transition: 'all 0.3s ease', boxShadow: '0 4px 10px rgba(0,0,0,0.03)'}}>
                            <div className="menu-image me-4" style={{width: '90px', height: '90px', flexShrink: 0}}>
                              <img src={item.imageUrl || "/assets/images/item-background/food.png"} alt={item.name} className="w-100 h-100 rounded-circle" style={{objectFit: 'cover', border: '2px solid #ffb800'}} />
                            </div>
                            <div className="menu-content flex-grow-1">
                              <div className="d-flex justify-content-between align-items-center mb-2">
                                <h4 className="m-0 fw-bold" style={{color: '#d4af37', fontSize: '18px'}}>{item.name}</h4>
                                <h5 className="m-0 fw-bold ms-2" style={{color: '#222', fontSize: '16px'}}>Ksh {item.price}</h5>
                              </div>
                              <div className="dotted-line mb-2" style={{borderBottom: '1px dashed #e0e0e0'}}></div>
                              {item.description && <p className="text-muted m-0" style={{fontSize: '14px', lineHeight: '1.5'}}>{item.description}</p>}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
          </div>
      </div>
    </>
  );
}
