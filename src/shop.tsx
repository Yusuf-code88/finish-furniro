import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import './shop.css';
import Blog from "./blog";


function Navigation() {
    const location = useLocation();

    return location.pathname !== "/shop" ? (
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
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/blog  " element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

function Shop() {
    return (
        <>
            <Navigation />
            <header>
                <div className="container">
                    <nav className='navbar'>
                        <div className='headers'>
                            <div className='logo'>
                                <img src="src/images/Logo.svg" alt="" />
                            </div>
                            <div className='connect_pages'>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/shop">Shop</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                            <div className='btns_of_header'>
                                <button><img src="src/images/blog.svg" alt="" /></button>
                                <button><img src="src/images/search.svg" alt="" /></button>
                                <button><img src="src/images/likes.svg" alt="" /></button>
                                <button><img src="src/images/shop.svg" alt="" /></button>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            <section className='hero_section'>
                <div className="container">
                    <div className='hero_title'>
                        <img src="/src/images/Meubel.svg" alt="" />
                        <h2>Shop</h2>
                        <h5>Home <img src="src/images/vector.svg" alt="" /> Shop</h5>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className='purchase_smth'>
                        <div className='products'>
                            <div className='about_Syltherine'>
                                <img src="src/images/Syltherine.svg" alt="" />
                                <h4>Syltherine</h4>
                                <p>Stylish cafe chair</p>
                                <div className='prices'>
                                    <h5>Rp 2.500.000</h5>
                                    <p>Rp 3.500.000</p>
                                </div>
                            </div>
                            <div className='about_Leviosa'>
                                <img src="src/images/Syltherine.svg" alt="" />
                                <h4>Leviosa</h4>
                                <p>Stylish cafe chair</p>
                                <h5>Rp 2.500.000</h5>
                            </div>
                            <div className='about_Lolito'>
                                <img src="src/images/lolito.svg" alt="" />
                                <h4>Lolito</h4>
                                <p>Luxury big sofa</p>
                                <div className='prices'>
                                    <h5>Rp 7.000.000</h5>
                                    <p>Rp 14.000.000</p>
                                </div>
                            </div>
                            <div className='about_Respira'>
                                <img src="src/images/respira.svg" alt="" />
                                <h4>Respira</h4>
                                <p>Outdoor bar table and stool</p>
                                <h5>Rp 500.000</h5>
                            </div>
                        </div>
                        <div className='products'>
                            <div className='about_Syltherine'>
                                <img src="src/images/Syltherine.svg" alt="" />
                                <h4>Syltherine</h4>
                                <p>Stylish cafe chair</p>
                                <div className='prices'>
                                    <h5>Rp 2.500.000</h5>
                                    <p>Rp 3.500.000</p>
                                </div>
                            </div>
                            <div className='about_Leviosa'>
                                <img src="src/images/Syltherine.svg" alt="" />
                                <h4>Leviosa</h4>
                                <p>Stylish cafe chair</p>
                                <h5>Rp 2.500.000</h5>
                            </div>
                            <div className='about_Lolito'>
                                <img src="src/images/lolito.svg" alt="" />
                                <h4>Lolito</h4>
                                <p>Luxury big sofa</p>
                                <div className='prices'>
                                    <h5>Rp 7.000.000</h5>
                                    <p>Rp 14.000.000</p>
                                </div>
                            </div>
                            <div className='about_Respira'>
                                <img src="src/images/respira.svg" alt="" />
                                <h4>Respira</h4>
                                <p>Outdoor bar table and stool</p>
                                <h5>Rp 500.000</h5>
                            </div>
                        </div>
                        <div className='products'>
                            <div className='about_Syltherine'>
                                <img src="src/images/Syltherine.svg" alt="" />
                                <h4>Syltherine</h4>
                                <p>Stylish cafe chair</p>
                                <div className='prices'>
                                    <h5>Rp 2.500.000</h5>
                                    <p>Rp 3.500.000</p>
                                </div>
                            </div>
                            <div className='about_Leviosa'>
                                <img src="src/images/Syltherine.svg" alt="" />
                                <h4>Leviosa</h4>
                                <p>Stylish cafe chair</p>
                                <h5>Rp 2.500.000</h5>
                            </div>
                            <div className='about_Lolito'>
                                <img src="src/images/lolito.svg" alt="" />
                                <h4>Lolito</h4>
                                <p>Luxury big sofa</p>
                                <div className='prices'>
                                    <h5>Rp 7.000.000</h5>
                                    <p>Rp 14.000.000</p>
                                </div>
                            </div>
                            <div className='about_Respira'>
                                <img src="src/images/respira.svg" alt="" />
                                <h4>Respira</h4>
                                <p>Outdoor bar table and stool</p>
                                <h5>Rp 500.000</h5>
                            </div>
                        </div>
                        <div className='products'>
                            <div className='about_Syltherine'>
                                <img src="src/images/Syltherine.svg" alt="" />
                                <h4>Syltherine</h4>
                                <p>Stylish cafe chair</p>
                                <div className='prices'>
                                    <h5>Rp 2.500.000</h5>
                                    <p>Rp 3.500.000</p>
                                </div>
                            </div>
                            <div className='about_Leviosa'>
                                <img src="src/images/Syltherine.svg" alt="" />
                                <h4>Leviosa</h4>
                                <p>Stylish cafe chair</p>
                                <h5>Rp 2.500.000</h5>
                            </div>
                            <div className='about_Lolito'>
                                <img src="src/images/lolito.svg" alt="" />
                                <h4>Lolito</h4>
                                <p>Luxury big sofa</p>
                                <div className='prices'>
                                    <h5>Rp 7.000.000</h5>
                                    <p>Rp 14.000.000</p>
                                </div>
                            </div>
                            <div className='about_Respira'>
                                <img src="src/images/respira.svg" alt="" />
                                <h4>Respira</h4>
                                <p>Outdoor bar table and stool</p>
                                <h5>Rp 500.000</h5>
                            </div>
                        </div>
                    </div>
                    <div className='btns_of_shop'>
                        <button className='page_btn'>1</button>
                        <button className='page_btn'>2</button>
                        <button className='page_btn'>3</button>
                        <button className='next_btn'>Next</button>
                    </div>
                </div>
            </section>

            <section className="sec">
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



export default Shop



