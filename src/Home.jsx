import React from 'react';
import Product from "./Product";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
                <div className="home__row">
                    <Product 
                    id="0"
                    title="The lean start up: How Constant Innvoation Creates  Radically Successful Bussnieses PaperBack" 
                    price={29.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
                    rating={5}/>

                    <Product 
                    id="1"
                    title="Knwood KMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 litre Glass Bowl " 
                    price={239.1}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"/>
                </div>
                <div className="home__row">
                    <Product 
                    id="2"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Moniter "
                    price={199.99}
                    rating={3}
                    image= "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />

                    <Product 
                    id="3"
                    title="Amazon Echo (3rd generation) | Smart Speaker with ALexa, Charcoal Fabric"
                    price={98.99}
                    rating={5}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />

                    <Product
                    id="4"
                    title="New Apple iPad Pro (12.9-inch, wifi, 128GB) - Silver (4th genreation)"
                    price={589.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>      
                <div className="home__row">
                    <Product 
                    id="5"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Moniter -Super Ultra Wide Dual WQHD 5120 X 1440"
                    price={1094.98}
                    rating={ 4}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>
            </div>


        </div>
    )
}

export default Home;
