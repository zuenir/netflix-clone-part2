import React from 'react';
import { BrowseContainer } from '../containers/browse';
import {useContent} from '../hooks';
import selectionFilter from '../util/selection-filter'

export default function Browser() {
    //we need the series and the filmes
    const {series} = useContent('series');
    const {films} = useContent('films');
    
    //we need slides
    const slides = selectionFilter({series, films});
    
   //pass it to the browse container 
    return(
        <BrowseContainer  slides={slides}/>
    );  
}; 