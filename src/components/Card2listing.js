import React, { useState } from 'react';
import { coffeelist } from '../datas/coffeelist';
import '../style/Card2listing.css';
import StarIcon from '../assets/Star_fill.svg'; 
import NoRatingImage from '../assets/Star.svg'; 

function Card2Listing() {
  const [filter, setFilter] = useState('all');

  const filteredCoffeeList = coffeelist.filter(coffee => {
    if (filter === 'available') {
      return coffee.available;
    }
    return true; // Retourne tous les produits si le filtre est 'all'
  });

  return (
    <div className="card2-listing">
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')} className='fixed-buttons'>All products</button>
        <button onClick={() => setFilter('available')} className='available-button'>Available</button>
      </div>
      <div className="coffee-list">
        {filteredCoffeeList.map(coffee => (
          <div key={coffee.id} className="coffee-card">
            
            <img src={coffee.image} alt={coffee.name} className="coffee-image" />

            <div className='rating_div'>

            <div className='coffee-price'>
            <h2>{coffee.name}</h2>
            <div className='text-price'><p> {coffee.price}</p></div>
            
              </div>  
          


              {coffee.rating !== null ? (
                <div className='ratings'>
                  <img src={StarIcon} alt="Star icon" className="rating-icon" />
                  <div>
                  <p>{coffee.rating}</p>
                  <p  className='votes-text'>({coffee.votes} votes)</p>
                  </div>

                  
                       
                 
                </div>
              ) : (
                <div className="no-rating">
                  <img src={NoRatingImage} alt="No rating" className="no-rating-image" />
                  <p>No ratings</p>
                </div>


              )
              
          
              }
            
            </div>

               {
                coffee.solde  && (<div className='sold-text'><p>Sold out</p></div>)
               }


           {coffee.popular && (
            
            <div className='popular-text'>
              <p>Popular</p>
              
              </div>
          
          )
            
            }
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card2Listing;
