import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
  smartSpeed: 1000,
  responsive: {
      0: {
          items: 2,
      },
      400: {
          items: 2,
      },
      600: {
          items: 2,
      },
      700: {
          items: 3,
      },
      1000: {
          items: 5,

      }
  },
};

class Client extends Component {

    render() {

        let imgattr = 'image'
        let data = sectiondata.clientv3

    return <div>
            <div className="client-area text-center pd-bottom-100 pd-bottom-100-mobile dark-bg ">
              <div className="container">
                <h3 className="client-slider-title">{ data.sectiontitle } <span>{ data.sectiontitle_color }</span> { data.sectiontitle2 }</h3>
                <div className="row justify-content-center">
                  <div className="col-xl-12">
                  <OwlCarousel className='owl-theme owl-carousel' loop margin={10} autoplay autoplayHoverPause animateIn stagePadding={20} items={5} center={true} {...options}>
                    { data.list_item.map( ( item, i ) =>
                        <div key={ i } className="item">
                          <a href={ item.url } target="_blank" className="thumb">
                            <img src={ item.image } alt={ imgattr } />
                          </a>
                        </div>
                     ) }
                  </OwlCarousel>
                  </div>
                </div>
              </div>
            </div>
         </div>
    }
}

export default Client