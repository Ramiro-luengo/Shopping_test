import { Component } from "react";

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = { ...props.value };
    }

    render() {
        return (<div className="card h-100">

            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

            <div className="card-body p-4">
                <div className="text-center">
                    <h5 className="fw-bolder">Fancy Product</h5>
                    {/* $40.00 - $80.00 */}
                    {`$${this.state.price}`}
                </div>
            </div>

            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
            </div>
        </div>)
    }
}

class ItemList extends Component {
    render() {
        var img_prices = [
            { price: 400.00, img_url: "asds.com" },
            { price: 600.00, img_url: "asds.com" },
            { price: 220.00, img_url: "asds.com" },
            { price: 800.00, img_url: "asds.com" },
            { price: 600.00, img_url: "asds.com" },
            { price: 220.00, img_url: "asds.com" },
            { price: 800.00, img_url: "asds.com" },
            { price: 800.00, img_url: "asds.com" }]

        return (
            <div className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {img_prices.map(
                            (value) =>
                                <div className="col mb-5">
                                    <Item value={value} />
                                </div>)
                        }
                    </div>
                </div>
            </div>
        )

    }
}

function Main() {
    return (
        <div className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">Fancy Product</h5>
                                    $40.00 - $80.00
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            <div className="badge bg-dark text-white position-absolute top:0.5rem right:0.5rem">Sale</div>
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">Special Item</h5>
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    <span className="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemList