import React, { Component } from 'react';
import Box from "./Box.js";
import NewBoxForm from "./NewBoxForm.js";

class BoxList extends Component {
    constructor(props) {

        super(props);

        this.state= {
            boxes: [
                {width: 10, height: 40, color: "orange"}
            ]
        }

        this.create = this.create.bind(this);
    }

    // Take data from our form and add it to state
    create(newBox) {
        this.setState({
            boxes: [...this.state.boxes, newBox]
        })
    }

    render() {

        // Iterate over our state to create multiple box components
        const boxes = this.state.boxes.map(
            box => (
                <Box 
                    width={box.width}
                    height={box.height}
                    color={box.color}
                />
            )
        )

        // Pass down our create method into the child component 
        // so the child component can call this method using props
        return (
            <div>
                <h1>Color Box Maker</h1>
                <NewBoxForm createBox={this.create}/>
                {boxes}
                
            </div>
        )
    }
}

export default BoxList;