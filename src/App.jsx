import React from 'react';
import './App.css';

import headerLogo from './assets/img/header_logo.png';
import placeImage1 from './assets/img/place_image_01.png';
import placeImage2 from './assets/img/place_image_02.png';
import searedSalmon from './assets/img/seared_salmon.jpg';
import rosemaryFilet from './assets/img/rosemary_filet.jpg';
import summerFruit from './assets/img/summer_fruit.jpg';
import familyGathering from './assets/img/family_gathering.png';
import header_img from './assets/img/header_img.png';
import reservation_img from './assets/img/reservation_background.jpg';

function App() {
  function TopImage() {
    return (
      <div className="top_image">
        <img className= "headerimg" src={header_img} alt="" />
      </div>
    );
  }

  function Header() {
    return (
      <header>
        <div className="header_text">
          <img className="page_logo" src={headerLogo} alt="pageLogo" />
          <h1>Exquisite dining since 1989</h1>
          <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
          <a href="#">BOOK A TABLE</a>
        </div>
      </header>
    );
  }

  function Cards() {
    return (
      <div className="cards">
        <div className="card card1">
          <img src={placeImage1} alt="Enjoyable place for canim ailem" />
          <h1>Enjoyable place for all the family</h1>
          <p>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
        </div>
        <div className="card card2">
          <img src={placeImage2} alt="The most locally sourced food" />
          <h1>The most locally sourced food</h1>
          <p>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</p>
        </div>
      </div>
    );
  }

  function FoodCards() {
    return (
      <div className="food_cards">
        <h1>A few highlights from our menu</h1>
        <p>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</p>

        <div className="food_card">
          <img src={searedSalmon} alt="Seared Salmon Fillet" />
          <div className="food_Card_text">
            <h2>Seared Salmon Fillet</h2>
            <p>Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
          </div>
        </div>
        <hr />
        <div className="food_card">
          <img src={rosemaryFilet} alt="Rosemary Filet Mignon" />
          <div className="food_Card_text">
            <h2>Rosemary Filet Mignon</h2>
            <p>Our prime beef served to your taste with a delicious choice of seasonal sides.</p>
          </div>
        </div>
        <hr />
        <div className="food_card">
          <img src={summerFruit} alt="Summer Fruit Chocolate Mousse" />
          <div className="food_Card_text">
            <h2>Summer Fruit Chocolate Mousse</h2>
            <p>Creamy mousse combined with summer fruits and dark chocolate shavings.</p>
          </div>
        </div>
      </div>
    );
  }

  function FamilyGathering() {
    return (
      <div className="family_gathering">
        <img src={familyGathering} alt="Family Gathering" />
        <div className="event_item">
          <h2>FAMILY GATHERING</h2>
          <h2 className="special_text">SPECIAL EVENTS</h2>
          <h2 className="special_text">SOCIAL EVENTS</h2>
        </div>
        <h1>Family Gathering</h1>
        <p>We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.</p>
        <a href="#">BOOK A TABLE</a>
      </div>
    );
  }
  
  function Reservation() {
    return (
      <div className="reservation">
        <img className= "reservationimg" src={reservation_img} alt="" />
        <h1>Ready to make a reservation?</h1>
        <a href="#">BOOK A TABLE</a>
      </div>
    );
  }

  function Footer() {
    return (
      <footer>
        <img src={headerLogo} alt="Restaurant Logo" />
        <div className="footer_texts">
          <h3>
            MARTHWAİTE, SEDBERGH <br />
            CUMBRİA <br />
            +00 44 123 4567
          </h3>
          <h3>
            OPEN TIMES <br />
            MON - FRI: 09:00 AM - 10:00 PM <br />
            SAT - SUN: 09:00 AM - 11:30 PM
          </h3>
        </div>
      </footer>
    );
  }

  return (
    <div>
      <TopImage />
      <Header />
        <Cards />
        <FoodCards />
        <FamilyGathering />
        <Reservation />
      <Footer />
    </div>
  );
}

export default App;
