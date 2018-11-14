import React, {Component} from 'react'
import {connect} from 'react-redux';
import {asyncUploadPhotos} from '../../../redux/actions'


class CommentBlock extends Component {
    constructor(props) {
        super(props);
        this.state={
            createCommentOpen:false,
            showComments:false,
        }
        this.addComment = this.addComment.bind(this)
    }
addComment(event){
    this.props.form(event);
    }

openList(event){
        this.props.list(event)
        this.props.showComments()
}

    render() {

        return (
            <div>
                <button onClick={this.addComment}>Залишити відгук</button>
                <button onClick ={this.openList.bind(this)}>Подивитись відгуки</button>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {newState:state}
};

const mapDispatchToProps= (dispatch)=>{
    return {showComments:()=>{
        dispatch(asyncUploadPhotos())
        }}
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentBlock)