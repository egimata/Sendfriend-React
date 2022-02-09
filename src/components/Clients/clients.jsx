import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';




class Client extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.clientv3
        let anchor = '#'

    return <div>
            <div className="client-area text-center padding-top-40">
              <div className="container">
                <h3 className="client-slider-title">{ data.sectiontitle } <span>{ data.sectiontitle_color }</span> { data.sectiontitle2 }</h3>
                <div className="row justify-content-center">
                  <div className="col-xl-12">
                  <OwlCarousel className='owl-theme owl-carousel' loop margin={10} nav items={4} center={true}>
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