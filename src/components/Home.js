import React from "react";
import Container from 'react-bootstrap/Container';
import { connect } from "react-redux";
import { ListProducts } from "../store/action/ProductsActions";
import Table from 'react-bootstrap/Table';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = { products: [] }
    }

    componentDidMount() {
        this.props.ListProducts()
    }

    render() {

        return (
            <Container>
                <h1>Product List</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>DATE CREATED</th>
                            <th>TITLE</th>
                            <th>DESCRIPTION</th>
                            <th>SEVERITY</th>
                            <th>STATUS</th>
                            <th>DATE RESOLVED</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.productsState && this.props.productsState.map((product, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{product.id}</td>
                                        <td>{product.datecreated}</td>
                                        <td>{product.title}</td>
                                        <td>{product.desctiprion}</td>
                                        <td>{product.severity}</td>
                                        <td>{product.status}</td>
                                        <td>{product.dateresolved}</td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </Table>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        productsState: state.ProductsReducer.products
    }
}

export default connect(mapStateToProps, { ListProducts })(Home);