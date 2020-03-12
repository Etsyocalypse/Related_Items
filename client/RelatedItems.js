import React from "react";



class RelatedItems extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shopInformation: {
                name: "Raising Rooster",
                totalItemsForSale: 11,
                totalSales: 267,
                onEtsySince: "2007",
                basedIn: "United States"
            },
            itemInformation: {
                name: "Bunch of mugs that are cool",
                price: "15.99",
            }
        };

    }



    render() {
        return(
            <div className={"container-fluid"}>
                <section className={"row min-vh-100"} id={"moreFromShopContainer"} style={{
                    // display: "flex",
                    // flexDirection: "column",
                    // flexWrap: "wrap",
                    backgroundColor: "#ffeee6",
                    borderColor: "red",
                    borderStyle: "solid",
                    borderWidth: "5px",

                }}>
                <div className={"col-md-3"}>
                    <div className={"embed-responsive embed-responsive-1by1 w-50"} style={{backgroundColor: "white", borderRadius: "6px"}}>
                         <img className={"shopLogo embed-responsive-item"} src={"./dummy_data/dummy_logo_3.png"} height={"140px"} width={"140px"} style={{
                         backgroundSize: "container",
                        //  maxWidth: "100%",
                        //  maxHeight: "auto",

                        }}></img>
                    </div>
                    {/* <div id={"shopLogoContainer"} style={{
                        // flexGrow: "1",
                        // maxWidth:"145px",
                        // maxHeight:"145px",
                        backgroundColor: "white",
                        borderRadius: "6px"
                    }}>
                     </div> */}
                    <div id={"moreFromSellerInfo"}style={{
                        // padding: "10px",
                        // flexGrow: "1",
                        
                    }}>
                        <p style={{ fontSize: "0.95em", marginTop: "1em" }}>More from</p>
                        <p style={{
                            fontSize: "1.3em",
                            fontWeight: "lighter",
                            fontFamily: "roboto"
                        }} id={"shopName"}>{this.state.shopInformation.name}</p>
                        <div id={"seeMoreItems"} style={{
                            fontSize: "15px",
                            fontWeight: "600",
                            

                        }}>
                        <span className={"seeAllSpan"}>See all {this.state.shopInformation.totalItemsForSale} items</span>
                        <span id={"arrow"}></span>
                        </div>
                    </div>

                    <div className={"row mt-4"}>
                        <div className={"col"}>
                        <h6 className={"text-muted"}>Sales</h6>
                        </div>
                        <div className={"col"}>
                        <h6 className={"text-muted"}>On Etsy Since</h6>
                        </div>
                        <div className={"col"}>
                        <h6 className={"text-muted"}>Based In</h6>
                        </div>
                    </div>
                    <div className={"row"}>
                            <div className={"col"}>
                                <h4 style={{fontWeight: "lighter"}}>{this.state.shopInformation.totalSales}</h4>
                            </div>

                            <div className={"col"}>
                                <h4 style={{fontWeight: "lighter"}}>{this.state.shopInformation.onEtsySince}</h4>
                            </div>

                            <div className={"col"}>
                                <h4 style={{fontWeight: "lighter"}}>{this.state.shopInformation.basedIn}</h4>
                            </div>
                    </div>
                </div>

                <div className={"col-sm-9"} /*style={{backgroundColor: "red"}}*/>

                    <div className={"row mb-2 ml-2"}>

                        <div className={"col"} /*style={{backgroundColor: "blue"}}*/>
                        <img className={"col my-3"} src={"https://i.etsystatic.com/20282382/d/il/d10278/2164698354/il_340x270.2164698354_nv86.jpg?version=0"}></img>
                            <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"col"}>
                                        <p style={{margin: "0"}}>{this.state.itemInformation.name}</p>
                                        <span>$</span>
                                        <span>{this.state.itemInformation.price}</span>
                                            <div>
                                            <p className={"badge badge-pill badge-shipping"}>FREE Shipping</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={"col"}>
                        <img className={"col my-3"} src={"https://i.etsystatic.com/20282382/d/il/be70a4/2211336710/il_340x270.2211336710_kjfi.jpg?version=0"}></img>
                        <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"col"}>
                                        <p style={{margin: "0"}}>{this.state.itemInformation.name}</p>
                                        <span>$</span>
                                        <span>{this.state.itemInformation.price}</span>
                                            <div>
                                            <p className={"badge badge-pill badge-shipping"}>FREE Shipping</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={"col"}>
                        <img className={"col my-3"} src={"https://i.etsystatic.com/20282382/d/il/ef9caa/2208564228/il_340x270.2208564228_1uzv.jpg?version=0"}></img>
                        <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"col"}>
                                        <p style={{margin: "0"}}>{this.state.itemInformation.name}</p>
                                        <span>$</span>
                                        <span>{this.state.itemInformation.price}</span>
                                            <div>
                                            <p className={"badge badge-pill badge-shipping"}>FREE Shipping</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"row mb-2 ml-2"}>

                    <div className={"col"} /*style={{backgroundColor: "blue"}}*/>
                        <img className={"col my-3"} src={"https://i.etsystatic.com/20282382/d/il/d10278/2164698354/il_340x270.2164698354_nv86.jpg?version=0"}></img>
                        <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"col"}>
                                        <p style={{margin: "0"}}>{this.state.itemInformation.name}</p>
                                        <span>$</span>
                                        <span>{this.state.itemInformation.price}</span>
                                            <div>
                                            <p className={"badge badge-pill badge-shipping"}>FREE Shipping</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={"col"}>
                        <img className={"col my-3"} src={"https://i.etsystatic.com/20282382/d/il/be70a4/2211336710/il_340x270.2211336710_kjfi.jpg?version=0"}></img>
                        <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"col"}>
                                        <p style={{margin: "0"}}>{this.state.itemInformation.name}</p>
                                        <span>$</span>
                                        <span>{this.state.itemInformation.price}</span>
                                            <div>
                                            <p className={"badge badge-pill badge-shipping"}>FREE Shipping</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={"col"}>
                        <img className={"col my-3"} src={"https://i.etsystatic.com/20282382/d/il/ef9caa/2208564228/il_340x270.2208564228_1uzv.jpg?version=0"}></img>
                        <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"col"}>
                                        <p style={{margin: "0"}}>{this.state.itemInformation.name}</p>
                                        <span>$</span>
                                        <span>{this.state.itemInformation.price}</span>
                                            <div>
                                            <p className={"badge badge-pill badge-shipping"}>FREE Shipping</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       

                    </div>

                </div>
               
                </section>
            </div>
            
        )
    };

};

export default RelatedItems;