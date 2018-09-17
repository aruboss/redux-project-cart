import React, { Component } from 'react';
import Product from './Product';

class Products extends Component {

    showProducts(products){
        var result =null;

       if(products.length>0){
           result = products.map((product, item)=>{
               return <Product key={item} product={product}/>
           });
       }

        return result;
    }

    render() {
        var {products} = this.props;
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Truyện Của Mặc Hương Đồng Xú</h1>
                <div className="row">
                    {this.showProducts(products)}
                </div>
            </section>

        );
    }
}

export default Products;
