import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import './Syltherine.css';
import Blog from "./blog";
import Shop from "./shop";


function Logo() {
    const location = useLocation();

    return location.pathname !== "/Syltherine" ? (
        <nav className="nav">
            <Link to="/"  ><img src="/images/Logo.svg" alt="" /></Link>
        </nav>
    ) : null;
}
<Logo />

function Navigation() {
    const location = useLocation();

    return location.pathname !== "/Syltherine" ? (
        <nav className="nav">
            <Link to="/" >Home</Link>
            <Link to="/shop" style={{ marginLeft: '60px' }}>Shop</Link>
            <Link to="/blog" style={{ marginLeft: '60px' }}>About</Link>
            <Link to="/shop" style={{ marginLeft: '60px' }}>Contact</Link>
        </nav>
    ) : null;
}
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/blog" element={<Blog />} />

            </Routes>
        </Router>
    );
}
<App />
function Syltherine() {
    const [cartOpen, setCartOpen] = useState(false);
    const [count, setCount] = useState(1);

    return (
        <>
            <Navigation />
            <header>
                <div className="container">
                    <nav className='navbar'>
                        <div className='headers'>
                            <div className='logo'>
                                <Link to="/"  ><img src="/images/Logo.svg" alt="" /></Link>
                            </div>
                            <div className='connect_pages'>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/shop">Shop</Link></li>
                                    <li><Link to="/blog">About</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                            <div className='btns_of_header'>
                                <button><img src="/images/blog.svg" alt="" /></button>
                                <button><img src="/images/search.svg" alt="" /></button>
                                <button><img src="/images/likes.svg" alt="" /></button>
                                <button onClick={() => setCartOpen(true)}>
                                    <img src="/images/shop.svg" alt="" />
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            {cartOpen && <div className="overlay" onClick={() => setCartOpen(false)}></div>}

            {/* Корзина (выезжающий блок) */}
            <div className={`cart ${cartOpen ? "open" : ""}`}>
                <button className="close-btn" onClick={() => setCartOpen(false)}><img src="/images/x.svg" alt="" /></button>
                <h2>Shopping Cart</h2>
                <div className="sub">
                    <div className="text">
                        <p>Subtotal</p>
                    </div><br />
                    <div className="bt">
                        <button>Cart</button>
                        <button>Checkout</button>
                        <button>Comparison</button>
                    </div>
                </div>
            </div>

            <div className="map">
                <div className="container">
                    <div className="map-text">
                        <img src="/images/home.svg" alt="" />
                        <img src="/images/shopp.svg" alt="" />
                        <img src="/images/pal.svg" alt="" />
                        <h4>Syltherine</h4>
                    </div>
                </div>
            </div>

            <div className="about">
                <div className="container">
                    <div className="single">
                        <div className="photos">
                            <div className="photo1">
                                <img src="/images/Syltherine.svg" alt="" />
                                <img src="/images/Syltherine.svg" alt="" />
                                <img src="/images/Syltherine.svg" alt="" />
                                <img src="/images/Syltherine.svg" alt="" />
                            </div>
                            <div className="photo2">
                                <img src="/images/Syltherine.svg" alt="" />

                            </div>
                        </div>
                        <div className="tekst">
                            <h1>Syltherine</h1><br />
                            <h2>Rs. 250,000.00</h2><br />
                            <div className="rey">
                                <img src="/images/rey.svg" alt="" />
                                <img src="/images/pal.svg" alt="" />
                                <img src="/images/rev.svg" alt="" />
                            </div><br />
                            <div className="ather-rey">
                                <img src="/images/p.svg" alt="" /><br /><br />
                                <img src="/images/size.svg" alt="" /><br /><br />
                                <p>Color</p>
                                <div className="circle" style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                                    <img src="/images/pur.svg" alt="" /><br /><br />
                                    <img src="/images/blac.svg" alt="" /><br /><br />
                                    <img src="/images/orange.svg" alt="" /><br /><br />
                                </div><br />

                                <div className="btn-box">
                                    <div className="quantity-selector">
                                        <button
                                            className="btn"
                                            onClick={() => setCount(count > 1 ? count - 1 : 1)}
                                        >
                                            −
                                        </button>
                                        <span className="count">{count}</span>
                                        <button className="btn" onClick={() => setCount(count + 1)}>
                                            +
                                        </button>
                                    </div>
                                    <button className="Add">Add To Cart</button>
                                    <button className="Add">+ Compare</button>
                                </div><br /><br />
                                <img src="/images/lin.svg" alt="" /><br /><br /><br />
                                <div className="tag">
                                    <img src="/images/tags.png" alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="dis" style={{ display: 'flex', justifyContent: 'center', marginTop: '70px' }}>
                <img src="/images/dis.svg" alt="" />
            </div>
            <section>
                <div className="container">
                    <div className='purchase_smth'>
                        <h1 style={{ textAlign: 'center' }}>Related Products</h1>
                        <div className='products'>
                            <div className='about_Leviosa'>
                                <div className="product-card">
                                    <img src="/images/Syltherine.svg" alt="Leviosa" />
                                    <div className="overlay">
                                        <button>Add to cart</button>
                                        <img src="/images/share.svg" alt="" />
                                    </div>
                                    <h4>Syltherine</h4>
                                    <p>Stylish cafe chair</p>
                                    <div className='prices'>
                                        <h5>Rp 2.500.000</h5>
                                        <p>Rp 3.500.000</p>
                                    </div>
                                </div>
                            </div>

                            <div className='about_Leviosa'>
                                <div className="product-card">
                                    <img src="/images/lev.svg" alt="Leviosa" />
                                    <div className="overlay">
                                        <button>Add to cart</button>
                                        <img src="/images/share.svg" alt="" />
                                    </div>
                                    <h4>Leviosa</h4>
                                    <p>Stylish cafe chair</p>
                                    <h5>Rp 2.500.000</h5>
                                </div>
                            </div>

                            <div className='about_Leviosa'>
                                <div className="product-card">
                                    <img src="/images/Lolito.svg" alt="Leviosa" />
                                    <div className="overlay">
                                        <button>Add to cart</button>
                                        <img src="/images/share.svg" alt="" />
                                    </div>
                                    <h4>Lolito</h4>
                                    <p>Luxury big sofa</p>
                                    <div className='prices'>
                                        <h5>Rp 7.000.000</h5>
                                        <p>Rp 14.000.000</p>
                                    </div>
                                </div>
                            </div>

                            <div className='about_Leviosa'>
                                <div className="product-card">
                                    <img src="/images/Respira.svg" alt="Leviosa" />
                                    <div className="overlay">
                                        <button>Add to cart</button>
                                        <img src="/images/share.svg" alt="" />
                                    </div>
                                    <h4>Respira</h4>
                                    <p>Outdoor bar table and stool</p>
                                    <h5>Rp 500.000</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="show">
                    <button className='show_another_products' >Show More</button>
                </div>
            </section>

            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-section company-info">
                        <h2 className="logo">Funiro.</h2>
                        <address>
                            400 University Drive Suite 200 Coral <br /> Gables, <br />
                            FL 33134 USA
                        </address>
                    </div>


                    <div className="footer-section links-help many-links">
                        <div className="footer-links">
                            <h4>Links</h4>
                            <a href="#">Home</a>
                            <a href="#">Shop</a>
                            <a href="#">About</a>
                            <a href="#">Contact</a>
                        </div>

                        <div className="footer-help">
                            <h4>Help</h4>
                            <a href="#">Payment Options</a>
                            <a href="#">Returns</a>
                            <a href="#">Privacy Policies</a>
                        </div>
                    </div>


                    <div className="footer-section newsletter">
                        <h4>Newsletter</h4>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Enter Your Email Address" className="email-input" required />
                            <button type="submit" className="subscribe-btn">SUBSCRIBE</button>
                        </form>
                    </div>

                </div>


                <div className="footer-bottom">
                    <p>2023 funiro. All rights reserved</p>
                </div>
            </footer><br />
        </>
    )
}



export default Syltherine



