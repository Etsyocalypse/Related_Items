import React from "react";
import './'


class RelatedItems extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shopInformation: {
                name: "Raising Rooster",
                totalItemsForSale: 11
            }
        };

    }



    render() {
        return(
            <div>
                <section id={"moreFromShopContainer"} style={{
                    display: "flex",
                    backgroundColor: "#ffeee6",
                    borderColor: "red",
                    borderStyle: "solid",
                    borderWidth: "5px",
                    maxWidth: "100%",
                    height: "65em",
                    maxHeight: "100%",
                }}>
                    <div id={"shopLogoContainer"} style={{
                        marginLeft: "10px",
                        marginTop: "25px",
                        maxWidth:"145px",
                        maxHeight:"145px",
                        backgroundColor: "white",
                        borderRadius: "6px"
                    }}>
                       <img src={"../dummy_data/dummy_logo_3.png"} height={"140px"} width={"140px"} style={{
                           backgroundSize: "container",
                           maxWidth: "100%",
                           maxHeight: "auto",

                       }}></img>
                    </div>
                    <div style={{
                        padding: "10px",
                        flexGrow: "1",
                        marginTop:"2.5em"
                    }}>
                        <p style={{ fontSize: "0.95em" }}>More from</p>
                        <p style={{
                            fontSize: "1.3em",
                            fontWeight: "lighter",
                            fontFamily: "roboto"
                        }} id={"shopName"}>{this.state.shopInformation.name}</p>
                        <p style={{
                            fontSize: "13px",
                            fontWeight: "500"
                        }}>See all {this.state.shopInformation.totalItemsForSale} items</p>
                        <i class="fas fa-arrow-right"></i>
                    </div>
               
                </section>
            </div>
            
        )
    };

};

export default RelatedItems;