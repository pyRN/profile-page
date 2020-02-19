import React, { Component } from 'react'

class CardComponent extends Component {
    state = { 
        image: this.props.image,
        name: this.props.name,
        years: this.props.years,
        info: this.props.info
    }
    render() { 
        return ( 
            <div className="card mb-3 mx-5 cardStyle pageComponentStyle" >
                <div className="row">
                    <div className="col-md-4">
                        <img src={require(`../media/${this.state.image}`)} className="imgStyle" alt="{this.state.image}"/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{this.state.name}</h5>
                        <p className="card-text">{this.state.info}</p>
                        <p className="card-text"><small className="text-muted">{this.state.years}</small></p>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardComponent;