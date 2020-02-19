import React, { Component } from 'react'

class ContactPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="pageComponentStyle">
                <div className="card pageComponentStyle">
                    <h5 className="card-header iwhite-text text-left py-1">
                        <strong>Contact Me</strong>
                    </h5>

                    <div className="card-body ">

                        <form className="text-center" action="#!">

                            <div className="md-form mb-3">
                                <input type="text" id="materialContactFormName" placeholder="Name" className="form-control"/>
                            </div>

                            <div className="md-form mb-3">
                                <input type="email" id="materialContactFormEmail" placeholder="Email" className="form-control"/>
                            </div>

                            <div className="md-form mb-3">
                                <textarea id="materialContactFormMessage" placeholder="Message" className="form-control md-textarea" rows="3"></textarea>
                            </div>

                            <button className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit">Send</button>

                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default ContactPage;