import React, { Component } from "react";
import Product from './Product';


export  class List extends Component {

  state = {
    ProductList: [],

  };
  storeProducts = [
    {
      id: 1,
      title: "dog1",
      img: "https://picsum.photos/id/237/200/300",
      price: 10,
      company: "GOOGLE",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      total: 0,
      type:"a"
    },
    {
      id: 2,
      title: "dog2",
      img: "https://picsum.photos/id/237/200/300",
      price:10,
      company: "SAMSUNG",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      total: 0,
      type:"b"
    },
    {
      id: 3,
      title: "dog3",
      img: "https://picsum.photos/id/237/200/300",
      price: 8,
      company: "htc",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      total: 0,
      type:"c"
    },
  
  ];
  
   detailProduct = {
    id: 1,
    title: "dog4",
    img: "https://picsum.photos/id/237/200/300",
    price: 10,
    company: "google",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  };
  
  
  checkType = e => {
    console.log(e.target.value);
            if(e.target.value ==0) {
              this.setState({ProductList:this.storeProducts[0]})
            }
  }
  


  render() {
  
    return (
      <>
        <div class="catalog">
          <div>
            <ul>
              <li>
                <button onClick={this.checkType} className="buttonType" value="0">type01</button>
              </li>
              <li>
                <button onClick={this.checkType} className="buttonType" value="1">type02</button>
              </li>
              <li>
                <button onClick={this.checkType} className="buttonType" value="2">type03</button>
              </li>
            </ul>
          </div>
        </div>
        <Product prop = "" />
      </>
    );
  }
}


