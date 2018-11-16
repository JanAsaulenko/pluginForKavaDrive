import React, {Component} from 'react'
import {connect} from 'react-redux';
import * as actions from '../../../redux/actions';
import './controlButtons.scss'
class CommentBlock extends Component {
    constructor(props) {
        super(props);
        this.createComment = this.createComment.bind(this)
    }

    createComment() {
        this.props.openCreateCommentWindow();
    }

    openList() {
        this.props.openShowCommentsBlock();
        this.props.showComments();
    }

    render() {

        return (
            <div className='wrapper_right-block_control'>
                <button className='control_button'  onClick={this.createComment}>Залишити відгук</button>
                <button className='control_button'  onClick={this.openList.bind(this)}>Подивитись відгуки</button>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {newState: state}
};

const mapDispatchToProps = (dispatch) => {
    return {
        showComments: () => {
            dispatch(actions.asyncUploadPhotos())
        },
        openShowCommentsBlock: () => {
            return dispatch(actions.openShowCommentsBlock())
        },
        openCreateCommentWindow: () => {
            dispatch(actions.openCreateCommentBlock());
        }

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CommentBlock)