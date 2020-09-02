import React, { useEffect, useState} from 'react';
import Cards from './Cards';
import QuestionService from '../../services/QuestionService';


function CardList() {

const [cards, setCards] = useState([])

    useEffect(() => {
        const cardList = QuestionService.getQuestions()
        setCards(cardList)
    }, [])
    
        return (
            
            <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <div className="d-flex flex-row">                    
                    <div className="col-sm-12">
                        <Cards cards={cards} />
                    </div>
                </div>
            </div>
           
        );
    
}

export default CardList