import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Shop from "./shop.tsx"
import Blog from "./blog";
import './contact.css';

function Logo() {
    const location = useLocation();

    return location.pathname !== "/blog" ? (
        <nav className="nav">
            <Link to="/"  ><img src="src/images/Logo.svg" alt="" /></Link>
        </nav>
    ) : null;
}

<Logo />
function Navigation() {
    const location = useLocation();

    return location.pathname !== "/contact" ? (
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
} <App />

function Contact() {
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <>
            <Navigation />
            <header>
                <div className="container">
                    <nav className='navbar'>
                        <div className='headers'>
                            <div className='logo'>
                                <Link to="/"  ><img src="src/images/Logo.svg" alt="" /></Link>
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
                                <button><img src="src/images/blog.svg" alt="" /></button>
                                <button><img src="src/images/search.svg" alt="" /></button>
                                <button><img src="src/images/likes.svg" alt="" /></button>
                                <button onClick={() => setCartOpen(true)}>
                                    <img src="src/images/shop.svg" alt="" />
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            {cartOpen && <div className="overlay" onClick={() => setCartOpen(false)}></div>}

            {/* Корзина (выезжающий блок) */}
            <div className={`cart ${cartOpen ? "open" : ""}`}>
                <button className="close-btn" onClick={() => setCartOpen(false)}><img src="src/images/x.svg" alt="" /></button>
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
                            <img src="/src/images/Meubel.svg" alt="" />
                            <h2>Contact</h2>
                            <h5>Home <img src="src/images/vector.svg" alt="" /> Contact</h5>
                        </div>
                    </div>
                </div>
            </section>

            <div className="contact-container">
                <h2 className="contact-title">Get In Touch With Us</h2>
                <p className="contact-subtitle">
                    For more information about our products & services, please feel free to drop us <br /> an email.
                    Our staff is always here to help you out. Do not hesitate!
                </p><br /><br /><br /><br />

                <div className="contact-content">
                    <div className="contact-info">
                        <p><strong><img src="/src/images/map.svg" alt="" /> Address</strong><br /><br />36 5th SE Avenue, New <br />York NY10000, United <br />States</p><br /><br />
                        <p><strong><img src="/src/images/tel.svg" alt="" /> Phone</strong><br /> <br />Mobile: (+64) 546-6789<br /> Hotline: (+64) 446-6789</p><br /><br />
                        <p><strong><img src="/src/images/watch.svg" alt="" /> Working Time</strong><br /> <br />Monday - Friday: 10:00 - 22:00<br /> Saturday - Sunday: 8:00 - 21:00</p>
                    </div>

                    <form className="contact-form">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" placeholder="Abc" required /><br />
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" placeholder="Abc@def.com" required /><br />
                        <label htmlFor="sebject">Subject</label>
                        <input type="text" placeholder="This is an optional" id="subject" /><br />
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Hi! i’d like to ask about" required></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <section className="sect">
                <div className="container">
                    <div className='about_shop'>
                        <div className='quality'>
                            <img src="src/images/trophy.svg" alt="" />
                            <div>
                                <h4>High Quality</h4>
                                <p>crafted from top materials</p>
                            </div>
                        </div>
                        <div className='quality'>
                            <img src="src/images/true.svg" alt="" />
                            <div>
                                <h4>Warranty Protection</h4>
                                <p>Over 2 years</p>
                            </div>
                        </div>
                        <div className='quality'>
                            <img src="src/images/shipping.svg" alt="" />
                            <div>
                                <h4>Free Shipping</h4>
                                <p>Order over 150 $</p>
                            </div>
                        </div>
                        <div className='quality'>
                            <img src="src/images/operator.svg" alt="" />
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

export default Contact