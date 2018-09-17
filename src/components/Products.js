import React, { Component } from 'react';

class Products extends Component {

    render() {
        var {products} = this.props;
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Truyện Của Mặc Hương Đồng Xú</h1>
                <div className="row">
                    {this.props.children}
                </div>
            </section>

        );
    }
}

export default Products;
