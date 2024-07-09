import '../style/Card2.css';
import Card2listing from './Card2listing';

function Card2(){


return(
    <div className="Card2">
    
        <div className='header_text_card2'><h1> Our Collection</h1></div>

        <div className='text_card2'><p>Introducing our Coffe Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p></div>

        <div></div>
    
        <Card2listing  />
    </div>
)
}

export default Card2