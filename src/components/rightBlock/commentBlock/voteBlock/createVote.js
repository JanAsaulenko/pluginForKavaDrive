import React, {Component} from 'react';
import './createVote.scss';
import Stars from './starBlock/stars';
import {connect} from 'react-redux';
// import {takeComments} from "../../../../redux/reducers/saveComments";
class CreateVote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataForRedux: {
                'login': '',
                'stars': '',
                'comment': ''
            },
        }
    }

    takeStars(data) {
        let dataForRedux = {...this.state.dataForRedux, ['stars']: data};
        this.setState({dataForRedux})
    }

    saveData(event) {
        event.preventDefault();
        const userData = {};
        console.log(this.login.value);
        userData.login = this.login.value;
        userData.stars = this.state.dataForRedux.stars;
        userData.comments = this.comment.value;
        console.log(userData);
        /*TODO i have stoped here . Create reducer  and actioncreator for saving comment. And dispatch action to the store*/
    }

    render() {
  let{mockData} = this.props;

        return (
            <div>
                <form className='create-commentForm' onSubmit={this.saveData.bind(this)}>
                    <input placeholder='Moisey' className="create-commentForm_field" ref={(input) => {
                        this.login = input
                    }}/>
                    {<Stars mockData={mockData} takeResult={this.takeStars.bind(this)}/>}
                    <textarea  className="create-commentForm_field" ref={(input) => {this.comment = input}} ></textarea>
                    <button>Save</button>
                </form>
            </div>
        )
    }
}
 const mapStateToProps=(state)=>{
    return {
        mockData:state.mockStarData
    }
}
//
// const dispatchMapToProps=(dispatch)=>{
//     return {
//         takeCommentsData:(data)=>{
//             return dispatch(takeCommentsData(data))
//         }
//     }
// }
export default connect(mapStateToProps)(CreateVote);