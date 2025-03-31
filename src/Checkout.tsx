import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Blog from "./blog";
import Contact from "./contact"
import Shop from "./shop.tsx"


import './contact.css';

function Logo() {
    const location = useLocation();

    return location.pathname !== "/blog" ? (
        <nav className="nav">
            <Link to="/">  <img src="/images/Logo.svg" alt="" />
            </Link>
        </nav >
    ) : null;
}
<Logo />

function Navigation() {
    const location = useLocation();

    return location.pathname !== "/Checkout" ? (
        <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/shop" style={{ marginLeft: '60px' }}>Shop</Link>
            <Link to="/blog" style={{ marginLeft: '60px' }}>About</Link>
            <Link to="/contact" style={{ marginLeft: '60px' }}>Contact</Link>
        </nav>
    ) : null;
}
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/about" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}
<App />


const countries = ["USA", "RUSSIAN", "GERMANY", "FRANCE", "CHINA"];

function Checkout() {
    const [cartOpen, setCartOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("");

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

            <section className='hero_section'>
                <div className="container">
                    <div className="hero">
                        <div className='hero_title'>
                            <img src="/images/Meubel.svg" alt="" />
                            <h2>Checkout</h2>
                            <h5>Home <img src="/images/vector.svg" alt="" /> Checkout</h5>
                        </div>
                    </div>
                </div>
            </section>

            <section className="check-section">
                <div className="container">
                    <div className="checks">
                        <div className="check1">
                            <h1>Billing details</h1>
                            <div className="check-inptn">
                                <form action="">
                                    <label htmlFor="">First Name</label>
                                    <input type="text" />
                                </form>
                                <form action="">
                                    <label htmlFor="">Last Name</label>
                                    <input type="text" />
                                </form>
                            </div>
                            <div className="checks1">
                                <form action="">
                                    <label htmlFor="">Company Name (Optional)</label>
                                    <input type="text" />
                                </form>
                                <form action="">
                                    <label htmlFor="country">Country / Region</label>
                                    <select
                                        id="country"
                                        value={selectedCountry}
                                        onChange={(e) => setSelectedCountry(e.target.value)}
                                    >
                                        <option value="">Sri Lanka</option>
                                        {countries.map((country, index) => (
                                            <option key={index} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                    </select>
                                </form>
                                <form action="">
                                    <label htmlFor="">Street address</label>
                                    <input type="text" />
                                </form>
                                <form action="">
                                    <label htmlFor="">Town / City</label>
                                    <input type="text" />
                                </form>
                                <form action="">
                                    <label htmlFor="Province">Province</label>
                                    <select
                                        id="Province"
                                        value={selectedCountry}
                                        onChange={(e) => setSelectedCountry(e.target.value)}
                                    >
                                        <option value="">Western Province</option>
                                        {countries.map((country, index) => (
                                            <option key={index} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                    </select>
                                </form>
                                <form action="">
                                    <label htmlFor="">ZIP code</label>
                                    <input type="text" />
                                </form>
                                <form action="">
                                    <label htmlFor="">Phone</label>
                                    <input type="text" />
                                </form>
                                <form action="">
                                    <label htmlFor="">Email address</label>
                                    <input type="email" />
                                </form>
                                <form action="">
                                    <input type="text" placeholder="Additional information" />
                                </form>
                            </div>
                        </div>
                        <div className="check2" style={{ width: '533px' }}>
                            <div className="check-text" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className="ch-t-1" >
                                    <h2>Product</h2>
                                    <h3>Asgaard sofa</h3>
                                    <h4>Subtotal</h4>
                                    <h4>Total</h4>
                                </div>
                                <div className="ch-t-2">
                                    <h2>Subtotal</h2>
                                    <h3>Rs. 250,000.00</h3>
                                    <h4>Rs. 250,000.00</h4>
                                    <h5>Rs. 250,000.00l</h5>
                                </div>
                            </div><br />
                            <img src="/images/direct.svg" alt="" /><br /><br />
                            <img src="/images/dir.svg" alt="" /><br />
                            <img src="/images/cash.svg" alt="" /><br /><br />
                            <img src="/images/your.svg" alt="" /><br />
                            <button className="place">Place order</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sect">
                <div className="container">
                    <div className='about_shop'>
                        <div className='quality'>
                            <img src="/images/trophy.svg" alt="" />
                            <div>
                                <h4>High Quality</h4>
                                <p>crafted from top materials</p>
                            </div>
                        </div>
                        <div className='quality'>
                            <img src="/images/true.svg" alt="" />
                            <div>
                                <h4>Warranty Protection</h4>
                                <p>Over 2 years</p>
                            </div>
                        </div>
                        <div className='quality'>
                            <img src="/images/shipping.svg" alt="" />
                            <div>
                                <h4>Free Shipping</h4>
                                <p>Order over 150 $</p>
                            </div>
                        </div>
                        <div className='quality'>
                            <img src="/images/operator.svg" alt="" />
                            <div>
                                <h4>24 / 7 Support</h4>
                                <p>Dedicated support</p>
                            </div>
                        </div>
                    </div>
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

export default Checkout