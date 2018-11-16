import React, {Component} from 'react';
import {RightBlock} from  './rightBlock/rightBlock';
import {LeftBlock} from './leftBlock/leftBlock';
import CreateVote  from './rightBlock/commentBlock/createComment/createVote';
import {ShowVote} from './rightBlock/commentBlock/showAllComments';
import {connect} from 'react-redux';
import './app.scss';


class App extends Component {
    render() {
         let openShowCommentsBlock = this.props.openShowCommentsBlock.isOpen;
        let openCreateCommentBlock = this.props.openCreateCommentBlock.isOpen;
        let showComments='';
            let{comments} = this.props;

        if(comments.length===0){
            console.log('loading'); //here take dats for loading
        }
        else{
            showComments = openShowCommentsBlock && <ShowVote comments={comments[0]}/>;
        }
        let form = openCreateCommentBlock && <CreateVote/>;
        return (
            <div className='templateWrapper'>
                <div className='card-info'>
                <LeftBlock/>
                <RightBlock />
                </div>
                {form}
                {showComments}
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        openShowCommentsBlock:state.openShowCommentsBlock,
        openCreateCommentBlock:state.openCreateCommentBlock,
        comments:state.takeComments}
};
export default connect(mapStateToProps)(App)