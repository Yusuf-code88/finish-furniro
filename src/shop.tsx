import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import './shop.css';
import Blog from "./blog";
import Syltherine from "./Syltherine"
import Leviosa from "./Leviosa"
import Lolito from "./Lolito"
import Respira from "./Respira.tsx"


interface CartItem {
    id: string;
    name: string;
    price: string;
    image: string;
    originalPrice?: string;
}

function Logo() {
    const location = useLocation();

    return location.pathname !== "/shop" ? (
        <nav className="nav">
            <Link to="/"  ><img src="/images/Logo.svg" alt="" /></Link>
        </nav>
    ) : null;
}
<Logo />

function Navigation() {
    const location = useLocation();

    return location.pathname !== "/shop" ? (
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
                <Route path="/Syltherine" element={<Syltherine />} />
                <Route path="/Leviosa" element={<Leviosa />} />
                <Route path="/Lolito" element={<Lolito />} />
                <Route path="/Respira" element={<Respira />} />

            </Routes>
        </Router>
    );
}
<App />
function Shop() {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const products = [
        {
            id: "1",
            name: "Syltherine",
            description: "Stylish cafe chair",
            price: "Rp 2.500.000",
            originalPrice: "Rp 3.500.000",
            image: "/images/Syltherine.svg",
            link: "/Syltherine"
        },
        {
            id: "2",
            name: "Leviosa",
            description: "Stylish cafe chair",
            price: "Rp 2.500.000",
            image: "/images/lev.svg",
            link: "/Leviosa"
        },
        {
            id: "3",
            name: "Lolito",
            description: "Luxury big sofa",
            price: "Rp 7.000.000",
            originalPrice: "Rp 14.000.000",
            image: "/images/Lolito.svg",
            link: "/Lolito"
        },
        {
            id: "4",
            name: "Respira",
            description: "Outdoor bar table and stool",
            price: "Rp 500.000",
            image: "/images/Respira.svg",
            link: "/Respira"
        }
    ];

    const addToCart = (product: CartItem) => {
        setCartItems([...cartItems, product]);
    };

    const removeFromCart = (index: number) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    };

    const calculateTotal = () => {
        // Простая реализация для примера
        return cartItems.length.toString();
    };

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
                                    {cartItems.length > 0 && (
                                        <span className="cart-count">{cartItems.length}</span>
                                    )}
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            {cartOpen && <div className="overlay" onClick={() => setCartOpen(false)}></div>}

            <div className={`cart ${cartOpen ? "open" : ""}`}>
                <button className="close-btn" onClick={() => setCartOpen(false)}><img src="/images/x.svg" alt="" /></button>
                <h2>Shopping Cart</h2>

                <div className="cart-content">
                    <div className="cart-items">
                        {cartItems.length === 0 ? (
                            <p>Your cart is empty</p>
                        ) : (
                            <>
                                {cartItems.map((item, index) => (
                                    <div key={`${item.id}-${index}`} className="cart-item">
                                        <img src={item.image} alt={item.name} className="cart-item-image" />
                                        <div className="cart-item-details">
                                            <h4>{item.name}</h4>
                                            <p>{item.price}</p>
                                        </div>
                                        <button onClick={() => removeFromCart(index)} className="remove-item">
                                            <img src="/images/x.svg" alt="Remove" />
                                        </button>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>

                    <div className="sub">
                        <div className="text">
                            <p>Subtotal: Rp {calculateTotal()}</p>
                        </div>
                        <div className="bt">
                            <button>Cart</button>
                            <button>Checkout</button>
                            <button>Comparison</button>
                        </div>
                    </div>
                </div>
            </div>

            <section className='hero_section'>
                <div className="container">
                    <div className='hero_title'>
                        <img src="/images/Meubel.svg" alt="" />
                        <h2>Shop</h2>
                        <h5>Home <img src="/images/vector.svg" alt="" /> Shop</h5>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className='purchase_smth'>
                        {[...Array(4)].map((_, groupIndex) => (
                            <div key={groupIndex} className='products'>
                                {products.map((product, index) => (
                                    <Link to={product.link} key={product.id} style={{ listStyle: 'none', textDecoration: 'none' }}>
                                        <div key={`${product.id}-${groupIndex}-${index}`} className='about_Leviosa'>
                                            <div className="product-card">
                                                <img src={product.image} alt={product.name} />
                                                <div className="overlay">
                                                    <button onClick={(e) => {
                                                        e.preventDefault();
                                                        addToCart({
                                                            id: product.id,
                                                            name: product.name,
                                                            price: product.price,
                                                            image: product.image,
                                                            originalPrice: product.originalPrice
                                                        });
                                                    }}>Add to cart</button>
                                                    <img src="/images/share.svg" alt="" />
                                                </div>
                                                <h4>{product.name}</h4>
                                                <p>{product.description}</p>
                                                {product.originalPrice ? (
                                                    <div className='prices'>
                                                        <h5>{product.price}</h5>
                                                        <p>{product.originalPrice}</p>
                                                    </div>
                                                ) : (
                                                    <h5>{product.price}</h5>
                                                )}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className='btns_of_shop'>
                        <button className='page_btn'>1</button>
                        <button className='page_btn'>2</button>
                        <button className='page_btn'>3</button>
                        <button className='next_btn'>Next</button>
                    </div>
                </div>
            </section>

            {/* Остальные секции остаются без изменений */}
            <section className="sec">
                {/* ... */}
            </section>

            <footer className="footer">
                {/* ... */}
            </footer>

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



export default Shop



