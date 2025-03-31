import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Shop from "./shop";
import './blog.css';
import Contact from "./contact"

function Logo() {
    const location = useLocation();

    return location.pathname !== "/blog" ? (
        <nav className="nav">
            <Link to="/"  ><img src="/images/Logo.svg" alt="" /></Link>
        </nav>
    ) : null;
}
<Logo />

function Navigation() {
    const location = useLocation();

    return location.pathname !== "/blog" ? (
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
function Blog() {
    const [cartOpen, setCartOpen] = useState(false);

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
                            <h2>Blog</h2>
                            <h5>Home <img src="/images/vector.svg" alt="" /> Blog</h5>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog-section">
                <div className="container">
                    <div className="infor-box">
                        <div className="inf-box">
                            <img src="/images/inf1.svg" alt="" />
                            <img src="/images/inf-btn.svg" alt="" className="inf-btn" /><br />
                            <h2>Going all-in with millennial design</h2><br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p><br />
                            <h4>Read more</h4><br /><br /><br />
                            <img src="/images/inf2.svg" alt="" />
                            <img src="/images/inf-btn.svg" alt="" className="inf-btn" /><br />
                            <h2>Exploring new ways of decorating</h2><br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p><br />
                            <h4>Read more</h4><br /><br /><br />
                            <img src="/images/inf3.svg" alt="" />
                            <img src="/images/inf-btn.svg" alt="" className="inf-btn" /><br />
                            <h2>Handmade pieces that took time to make</h2><br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p><br />
                            <h4>Read more</h4><br /><br /><br />
                        </div>
                        <div className="categories-box">
                            <form action="" className="form">
                                <input type="text" id="srch-input" className="srch-inpt" />
                                <label htmlFor="srch-input"><img src="/images/Search.svg" alt="" /></label>
                            </form>
                            <div className="categories"><br /><br />
                                <h3>Categories</h3><br /><br /><br />
                                <div className="p" >
                                    <p>Crafts</p>
                                    <p>2</p>
                                </div><br /><br /> <div className="p" >
                                    <p>Design</p>
                                    <p>8</p>
                                </div> <br /><br /><div className="p" >
                                    <p>Handmade</p>
                                    <p>7</p>
                                </div><br /><br /> <div className="p" >
                                    <p>Interior</p>
                                    <p>1</p>
                                </div> <br /><br /><div className="p" >
                                    <p>Wood</p>
                                    <p>6</p>
                                </div>
                            </div><br /><br /><br /><br />
                            <div className="categories"><br /><br />
                                <h3>Recent Posts</h3><br /><br /><br />
                                <div className="p" >
                                    <img src="/images/ab1.svg" alt="" />
                                </div><br /><br /> <div className="p" >
                                    <img src="/images/ab2.svg" alt="" />

                                </div> <br /><br /><div className="p" >
                                    <img src="/images/ab3.svg" alt="" />

                                </div><br /><br /> <div className="p" >
                                    <img src="/images/ab4.svg" alt="" />

                                </div> <br /><br /><div className="p" >
                                    <img src="/images/ab5.svg" alt="" />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='btns_of_shop2'>
                        <button className='page_btn1'>1</button>
                        <button className='page_btn'>2</button>
                        <button className='page_btn'>3</button>
                        <button className='next_btn'>Next</button>
                    </div>
                </div>
            </section >
            <section className="sec">
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

export default Blog
