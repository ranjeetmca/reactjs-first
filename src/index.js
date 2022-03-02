import React from 'react';
import ReactDOM from 'react-dom';
import Carousel, { CasouselItem } from "./carousel";
ReactDOM.render( <div className='App'>
<Carousel>
    <CasouselItem>1</CasouselItem>
    <CasouselItem>2</CasouselItem>
    <CasouselItem>3</CasouselItem>
    <CasouselItem>4</CasouselItem>
</Carousel>
</div>, document.getElementById('root'));
