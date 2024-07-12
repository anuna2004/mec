import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    

   
    <header className = "header bg-blue">
        <nav className = "navbar bg-blue">
            <div className = "container flex">
                <a href = "index.html" className = "navbar-brand">
                    <img src = "images/bluelogo.png" alt = "site logo"/>
                </a>
                <button type = "button" className = "navbar-show-btn">
                    <img src = "images/ham-menu-icon.png"/>
                </button>

                <div className = "navbar-collapse bg-white">
                    <button type = "button" className = "navbar-hide-btn">
                        <img src = "images/close-icon.png"/>
                    </button>
                    <ul className = "navbar-nav">
                        <li className = "nav-item">
                            <a href = "#" className = "nav-link">Home</a>
                        </li>
                                               
                        <li className = "nav-item">
                            <a href = "mchatbot.html" className = "nav-link">Medical chatbot</a>
                        </li>
                    </ul>
                    <div className = "search-bar">
                        <form>
                            <div className = "search-bar-box flex">
                                <span className = "search-icon flex">
                                    <img src = "images/search-icon-dark.png"/>
                                </span>
                                <input type = "search" className = "search-control" placeholder="Search here"/>
                            </div>
                        </form>
                    </div>
                </div> 
            </div>
        </nav>  

        <div className = "header-inner text-white text-center"> 
            <div className = "container grid">
                <div className = "header-inner-left">
                    <h1><br/> <span> Online doctor</span></h1>
                    <p className = "lead">your health partner</p>
                    <br/>
                    <div className = "btn-group">
                        <a href = "#" className = "btn btn-white">Learn More</a>
                        <a href = "login.html" className = "btn btn-light-blue">Sign In</a>
                    </div>
                </div>
                <div className = "header-inner-right">
                    <img src = "images/hello.png"/>
                </div>
            </div>
        </div>
    </header>
    

    <main>
        
        <section id = "about" className = "about py">
            <div className = "about-inner">
                <div className = "container grid">
                    <div className = "about-left text-center">
                        <div className = "section-head">
                            <h2>About Us</h2>
                            <div className = "border-line"></div>
                        </div>
                        <p className = "text text-"> Medical ChatGPT can guide users to reputable resources and offer educational support for medical students and professionals. Its convenience and efficiency make it a valuable supplementary tool for enhancing patient knowledge and engagement in their healthcare.</p>
                        <a href = "#" className = "btn btn-white">Learn More</a>
                    </div>
                    <div className = "about-right flex img">
                            <img src = "images/hi.png"/>
                    </div>
                </div>
            </div>
        </section>
        
        <section id = "banner-one" className = "banner-one text-center">
            <div className = "container text-white">
                <blockquote className = "lead"><i className = "fas fa-quote-left"></i> Our healthmaster offers quick, clear health information, demystifies medical terms, and provides wellness tips, enhancing patient knowledge and supporting informed decisions. <i className = "fas fa-quote-right"></i></blockquote>
                
            </div>
        </section>
       

       
        <section id = "services" className = "services py">
            <div className = "container">
                <div className = "section-head text-center">
                    <h2 className = "lead"></h2>
                    <p className = "text text-lg">Our healthmaster is available anytime anywhere.</p>
                    <div className = "line-art flex">
                        <div></div>
                        <img src = "images/4-dots.png"/>
                        <div></div>
                    </div>
                </div>
                <div className = "services-inner text-center grid">
                    <article className = "service-item">
                        <div className = "icon">
                            <img src = "images/24.png"/>
                        </div>
                        <h3>24/7 Accessibility</h3>
                        <p className = "text text-sm">  Medical chatbots are available round-the-clock, providing instant responses to health-related queries at any time of day or night, which is especially useful for urgent concerns or late-night questions.</p>
                    </article>

                    <article className = "service-item">
                        <div className = "icon">
                            <img src = "images/bothuman.png"/>
                        </div>
                        <h3>Simplified Medical Information</h3>
                        <p className = "text text-sm"> They break down complex medical jargon into easy-to-understand language, making health information more accessible to the general public.</p>
                    </article>

                    <article className = "service-item">
                        <div className = "icon">
                            <img src = "images/personalbot.png"/>
                        </div>
                        <h3>Personalized Health Advice</h3>
                        <p className = "text text-sm">By using user input, medical chatbots can offer tailored advice and recommendations for lifestyle changes, symptom management, and preventive care.</p>
                    </article>

                    <article className = "service-item">
                        <div className = "icon">
                            <img src = "images/healthtips.png"/>
                        </div>
                        <h3>Health Tips and Reminders</h3>
                        <p className = "text text-sm">They can provide daily wellness tips, reminders for medication adherence, and advice on diet, exercise, and mental health practices.</p>
                    </article>
                </div>
            </div>
        </section>
       

      
        <section id = "contact" className = "contact py">
            <div className = "container grid">
                
                <div className = "contact-right text-white text-center bg-blue">
                    <div className = "contact-head">
                        <h3 className = "lead">Contact Us</h3>
                        
                    </div>
                    <form>
                        <div className = "form-element">
                            <input type = "text" className = "form-control" placeholder="Your name"/>
                        </div>
                        <div className = "form-element">
                            <input type = "email" className = "form-control" placeholder="Your email"/>
                        </div>
                        <div className = "form-element">
                            <textarea rows = "5" placeholder="Your Message" className = "form-control"></textarea>
                        </div>
                        <button type = "submit" className = "btn btn-white btn-submit">
                            <i className = "fas fa-arrow-right"></i> Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
        
    </main>

   
     <footer id = "footer" className = "footer text-center">
        <div className = "container">
            <div className = "footer-inner text-white py grid">
                <div className = "footer-item">
                    
                <div className = "footer-item">
                    <h3 className = "footer-head">tags</h3>
                    <ul className = "tags-list flex">
                        <li>medical chatbot</li>
                        <li>emergency</li>
                        <li>online available</li>
                        <li>instant response</li>
                        <li>medication</li>
                        
                    </ul>
                </div>

                <div className = "footer-item">
                    <h3 className = "footer-head">Quick Links</h3>
                    <ul>
                        <li><a href = "#" className = "text-white">Our Services</a></li>
                        <li><a href = "#" className = "text-white">Our Plan</a></li>
                        <li><a href = "#" className = "text-white">Privacy Policy</a></li>
                        <li><a href = "#" className = "text-white">Appointment Schedule</a></li>
                    </ul>
                </div>

            <div className = "footer-links">
                <ul className = "flex">
                    <li><a href = "#" className = "text-white flex"> <i className = "fab fa-facebook-f"></i></a></li>
                    <li><a href = "#" className = "text-white flex"> <i className = "fab fa-twitter"></i></a></li>
                    <li><a href = "#" className = "text-white flex"> <i className = "fab fa-linkedin"></i></a></li>
                </ul>
            </div>
            </div>
            </div>
        </div>
    </footer> 
   


  
    
</div>
  );
}

export default App;
