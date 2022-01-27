import React from "react";


export class ProfileStatus extends React.Component{

     state = {
        editMode: false
    }

    render() {
        return <div>
            <span>{this.state.editMode  }</span>
            {/*<textarea value={this.props.status}></textarea>*/}
            </div>
    }

}

