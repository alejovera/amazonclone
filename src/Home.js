import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
            <div className="home__row">
                <Product 
                    id="12478249"
                    title="The Lean Startup" 
                    price={11.96} 
                    rating={4} 
                    image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
                />
                <Product 
                    id="84712984"
                    title="Apple MacBook Air. 64GB" 
                    price={1199.25} 
                    rating={5} 
                    image="https://m.media-amazon.com/images/I/71thf1SYnGL._AC_UY218_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="12478249"
                    title="Apple AirPods Pro" 
                    price={234} 
                    rating={4} 
                    image="https://m.media-amazon.com/images/I/31gtbqaQ1nL._AC_SY322_.jpg"
                />
                <Product 
                    id="12478249"
                    title="Rolex Watch" 
                    price={17995} 
                    rating={3} 
                    image="https://m.media-amazon.com/images/I/71dYuONPdnL._AC_UL320_.jpg"
                />
                <Product 
                    id="12478249"
                    title="PlayStation 4. Slim Edition" 
                    price={364.99} 
                    rating={4} 
                    image="https://m.media-amazon.com/images/I/715RBdgZtHL._AC_UY218_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="12478249"
                    title="Iphone 11 Pro Max. 64GB. Midnight Green" 
                    price={1249.55} 
                    rating={5} 
                    image="https://m.media-amazon.com/images/I/81mxun+6pEL._AC_UY218_.jpg"
                />

            </div>
            {/* Product id, title, price, rating, image */}
        </div>
    )
}

export default Home
