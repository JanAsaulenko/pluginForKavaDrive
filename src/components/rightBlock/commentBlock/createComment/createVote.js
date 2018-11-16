import React, {Component} from 'react';
import './createVote.scss';
import Stars from './starBlock/stars';
import {connect} from 'react-redux';
import * as actions from '../../../../redux/actions';

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
        let {takeCommentsData} = this.props;
        const userData = {};
        userData.login = this.login.value;
        userData.stars = this.state.dataForRedux.stars;
        userData.comments = this.comment.value;
        takeCommentsData(userData)
    }

    render() {
        let {mockData} = this.props;
        return (
            <div>
                <form className='create-commentForm' onSubmit={this.saveData.bind(this)}>
                    <label>Логин</label>
                    <input className="create-commentForm_field" ref={(input) => {
                        this.login = input
                    }}/>
                    <label>Оцініть заклад</label>
                    {<Stars mockData={mockData} takeResult={this.takeStars.bind(this)}/>}
                    <label>Ваш коментар</label>
                    <textarea className="create-commentForm_field" ref={(input) => {
                        this.comment = input
                    }}></textarea>
                    <button className="create-commentForm_button">Зберегти</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mockData: state.mockStarData
    }
};

const dispatchMapToProps = (dispatch) => {
    return {
        takeCommentsData: (data) => {
            return dispatch(actions.pushCommentsIntoStore(data))
        }
    }
};
export default connect(mapStateToProps, dispatchMapToProps)(CreateVote);