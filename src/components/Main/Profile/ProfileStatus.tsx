import React from "react";
import {compose} from 'redux';
import {connect} from 'react-redux';
import {PostProfileType, updateStatus} from "../../Redux/PostsProfileReducer";
import {AppStateType} from "../../Redux/redux-store";

type PropsType = {
    status: string
    updateStatus: any
}

export class ProfileStatus extends React.Component<PropsType> {

    state = {
        editMode: false,
        status: this.props.status,
        updateStatus: this.props.updateStatus
    }

    editModeActivated = () => {
        this.setState({
            editMode: true
        })
    }

    editModeDeactivated = () => {
        this.setState({
            editMode: false
        })
        this.state.updateStatus(this.state.status)
    }

    onStatusChange = (e: any) => {
        this.setState(
            {
                status: e.currentTarget.value
            }
        )
    }

    // componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
    //     if(prevProps.status !== this.props.status){
    //         this.setState({status: this.props.status})
    //     }
    // }

    render() {

        return (
            <>
                {this.state.editMode ?
                    <div>
                        <textarea
                            autoFocus={true}
                            onBlur={this.editModeDeactivated}
                            onChange={this.onStatusChange}
                            value={this.props.status}>
                        </textarea>
                    </div>
                    :
                    <div>
                        <span
                            onDoubleClick={this.editModeActivated}>
                            {this.props.status || 'No status'}
                        </span>
                    </div>
                }
            </>
        )
    }

}

type MapStateProfile = {
    updateStatus: (updateStatus: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateProfile => ({
    updateStatus: updateStatus
})
export default compose<React.ComponentType>(connect(mapStateToProps, { updateStatus}))(ProfileStatus)