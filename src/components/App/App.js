import React from 'react';
import './App.css';
import screenshot from '../../images/shot.png';

function App() {
    return (
        <>
            <div className="header-wrapper">
                <div className="container">
                    <header>
                        <nav>
                            <a href="index.html">Home</a>
                            <a href="#about">About</a>
                            <a href="#works">Works</a>
                            <a href="#contact">Contact</a>
                        </nav>
                        <a href="#" id="nav-toggle"><i className="fas fa-bars"></i></a>
                    </header>
                </div>
            </div>

            <div className="about-wrapper">
                <div className="container">
                    <section id="about">
                        <div className="avatar">
                            <img src="https://picsum.photos/400" alt="image" />
                        </div>
                        <div className="description">
                            <div className="greeting">Hello, I'm</div>
                            <div className="name">Alexander Heraimenka</div>
                            <div className="position">Student @ Lambda School</div>
                            <div className="divider"></div>
                            <p>
                                This is a test portfolio website
                            </p>
                            <p>
                                <a href="#works" className="button">Works</a>
                            </p>
                        </div>
                    </section>
                </div>
            </div>

            <div className="container">
                <section id="works">
                    <h2>Works</h2>
                    <div className="work-list">
                        <div className="work-item">
                            <a href="https://react-todo-lqj2ld5kq.now.sh/"><img src={screenshot} alt="image" /></a>
                            <p>Title</p>
                        </div>
                    </div>
                </section>
            </div>

            <div className="contact-wrapper">
                <div className="container">
                    <section id="contact">
                        <h2>Contact</h2>
                        <form>
                            <input type="email" placeholder="E-mail" />
                            <input type="text" placeholder="Name" />
                            <textarea name="message" id="message" rows="15" placeholder="Message"></textarea>
                            <button className="button">Send</button>
                        </form>
                    </section>
                </div>
            </div>


            <div className="footer-wrapper">
                <div className="container">
                    <footer>
                        <div className="social">
                            <a className="social-item" href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="social-item" href="#">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="social-item" href="#">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}

export default App;
