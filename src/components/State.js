import { Component } from "react";
const outside=1;

export default class State extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            'products': [
                {
                    id: 1,
                    name: 'Iphone 12',
                    price: '25.000.000'
                },
                {
                    id: 2,
                    name: 'Iphone 13',
                    price: '25.000.000'
                },
            ],
            isCheck: 'true'
        }
        this.state = this.initialState;
        this.showStateProduct = this.showStateProduct.bind(this);
    }
    showStateProduct() {
        let mapstateproduct = this.state.products.map(item => {
            return (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                </tr>
            )

        })
        return mapstateproduct;
    }
    CheckState() {
        alert(outside);
        if (this.state.isCheck === 'true') {
            this.setState({
                products: [{ id: 0 }],
                isCheck: 'false'
            })
        } else {
            this.setState(this.initialState)
        }
        return;
    }
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Tên</th>
                            <th>Giá</th>
                        </tr>
                    </thead>
                    <tbody>{this.showStateProduct()}</tbody>
                </table >
                <button onClick={() => this.CheckState()}>isCheck:{this.state.isCheck}</button>
            </div>
        )
    }
}