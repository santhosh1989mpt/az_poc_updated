import React, {Component} from 'react';
import ProductList from '../../components/ProductList/ProductList';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './BannerCarousel.css';



export default class BannerCarousel extends Component {
    render() {
        return (
            <div>
         <Carousel showArrows={false} showThumbs={false}   useKeyboardArrows  emulateTouch transitionTime={1000} showStatus={false}>
                <div>
                <img src="https://www.bobbibrowncosmetics.com/media/export/cms/Homepage/SS19/BB_HP_Hero_PC_Ulla_IMG_Optimized_@2x.jpg" />
                    
                </div>
                <div>
                    <img src="https://www.bobbibrowncosmetics.com/media/export/cms/Homepage/SS19/SS19_Spring_Sale_2880x1550.jpg" />
                    
                </div>
                <div>
                    <img src="https://www.bobbibrowncosmetics.com/media/export/cms/Homepage/SS19/Ss19_Crushed_2880x1550.jpg" />
                </div>
            </Carousel>
            </div>
   
        );
    }
}

