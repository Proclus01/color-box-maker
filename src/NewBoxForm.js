import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {height: "", width: "", color: ""}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Data from our forms is being added to the data in this component's state
    handleChange(evt) {
        this.setState({
            // Update our state using computed properties
            [evt.target.name]: evt.target.value
        })
    }

    /*  
        Take data from our state (which was added from forms using handleChange) 
        and pass it upwards into BoxList, and add form data to Boxlist's state 
    */
    handleSubmit(evt) {
        // Stop the page from refreshing on form submission
        evt.preventDefault();

        const newBox = {...this.state, id: uuidv4()}

        // Call the parent component's method
        this.props.createBox(newBox);

        // Refresh the input
        this.setState({height: "", width: "", color: ""})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <div>
                    <label htmlFor="height">Height</label>
                    <input 
                        type="text" 
                        name="height" 
                        value={this.state.height} 
                        onChange={this.handleChange}
                        id="height" 
                    />
                </div>

                <div>
                    <label htmlFor="width">Width</label>
                    <input 
                        type="text" 
                        name="width" 
                        value={this.state.width} 
                        onChange={this.handleChange}
                        id="width" 
                    />
                </div>

                <div>
                    <label htmlFor="color">Color</label>
                    <input 
                        type="text" 
                        name="color" 
                        value={this.state.color} 
                        onChange={this.handleChange}
                        id="color" 
                    />
                </div>
                <button>Add New Box</button>
            </form>
        )
    }
}

export default NewBoxForm;