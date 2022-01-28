import React from "react";

type PropsType = {
    status: string
}

export class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false,
        title: 'yo'
    }

    editModeActivated() {
        this.setState({
            editMode: true
        })
    }

    editModeDiactivated() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <>
                {this.state.editMode ?
                    <div>
                        <textarea
                            autoFocus={true}
                            onBlur={this.editModeDiactivated.bind(this)}
                            value={this.props.status}>

                        </textarea>
                    </div>
                    :
                    <div>
                        <span
                            onDoubleClick={this.editModeActivated.bind(this)}>
                            {this.props.status}
                        </span>
                    </div>
                }
            </>
        )
    }

}

