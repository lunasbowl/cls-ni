import { useState } from "react";
import { useTranslation } from "react-i18next";

import { quotes } from "../../utils/quotes";

import './quote-generator.styles.css';

const QuoteGenerator = () => {
    const { t } = useTranslation();

    const getRandomQuote = () => {
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        return quote;
    }

    const [quote, setQuote] = useState(getRandomQuote());

    const newQuoteHandler = () => {
        setQuote(getRandomQuote());
    }

    return (
        <div className="quote-container">
            <div className="quote">
                <span className="quote-text">{quote.text}</span>
                <span className="quote-translation">{quote.translation}</span>
            </div>
            
            <div className="quote-author">
                <span>{quote.author}</span>
            </div>
            <div className="button-container">
                <button onClick={newQuoteHandler}>{t('new-quote')}</button>
            </div>
        </div>
    )
}

export default QuoteGenerator;

