import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Translate = ({ searchTerm, language}) => {
    const [translatedText, setTranslatedText] = useState('');
 
    useEffect(() => {
         const search = async () => {
          const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2',{}, {
                params: {
                    q: searchTerm,
                    target: language,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            setTranslatedText(data.data.translations[0].translatedText);
        }
        search();
    }, [searchTerm])

    return (
        
        <div>   
        <h2 className="ui header">Translated Text:</h2>
        <h2>{translatedText}</h2>
        </div>
    )
}

export default Translate;