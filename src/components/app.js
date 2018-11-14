import React, {Component} from 'react'
import {RightBlock} from  './rightBlock/rightBlock';
import {LeftBlock} from './leftBlock/leftBlock';
import CreateVote  from './rightBlock/commentBlock/voteBlock/createVote';
import './app.scss';
import {ShowVote} from './rightBlock/commentBlock/showVote';
import {ShowOnMap} from "./rightBlock/showOnMap/showOnMap";
import {connect} from 'react-redux'
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            commentForm:false,
            showComments:false
        }
    }

    createComment(data){
        console.log(this.state);
        this.setState({
     commentForm:!this.state.commentForm
        })
    }
    showCommentForm(data){
        this.setState({
            showComments:!this.state.showComments
        })
    }
    render() {
        let showComments='';
            let{comments} = this.props;

        if(comments.length===0){
            console.log('loading'); //here take dats for loading
        }
        else{
            showComments = this.state.showComments &&( <ShowVote comments={comments[0]}/>);
        }
        let form = this.state.commentForm && <CreateVote/>;
        return (
            <div className='templateWrapper'>
                <div className='card-info'>
                <LeftBlock/>
                <RightBlock commentForm={this.createComment.bind(this)} showComments={this.showCommentForm.bind(this)}/>
                </div>
                {form}
                {showComments}
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {comments:state.takeComments}
};
export default connect(mapStateToProps)(App)