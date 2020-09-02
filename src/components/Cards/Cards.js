import React from "react";
import PropTypes from 'prop-types';
import Card from "./CardUI";
 
//<span>Photo by <a href="https://unsplash.com/@fcornish?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Faye Cornish</a> on <a href="https://unsplash.com/s/photos/self-reflection?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
//<span>Photo by <a href="https://unsplash.com/@brandgreen?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Brandon Green</a> on <a href="https://unsplash.com/s/photos/growth?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
//<span>Photo by <a href="https://unsplash.com/@saracervera?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Sara Cervera</a> on <a href="https://unsplash.com/s/photos/mayonnaise?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

// import img1 from "../../assets/images/faye-cornish-Uq3gTiPlqRo-unsplash.jpg";
// import img2 from "../../assets/images/brandon-green-GEyXGTY2e9w-unsplash.jpg";
// import img3 from "../../assets/images/sara-cervera-4caIPcmVDII-unsplash.jpg";

 
// class Cards extends Component {
//   render() {
//     return (
//       <div className='container-fluid d-flex justify-content-center'>
//         <div className='row'>
//           <div className='col-md-4'>
//             <Card imgsrc={img1} title='Reflection' question='What has gone well for you in 2020?'/>
//           </div>
//           <div className='col-md-4'>
//             <Card imgsrc={img2} title='Growth' question='How tall did you really want to be?'/>
//           </div>
//           <div className='col-md-4'>
//             <Card imgsrc={img3} title={} question='Why is mayo the default condiment on sandwhiches and wraps?'/>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
const getCards = (cards) => {
    return (
        <div className="card-deck">
            {
                cards.map(card => <Card key={card.id} card={card} />)
            }
        </div>
    );
}

const Cards = (props) => (
    <div>
        {getCards(props.cards)}
    </div>
);

Cards.defaultProps = {
    cards: []
};

Cards.propTypes = {
    cards: PropTypes.array
};
export default Cards;