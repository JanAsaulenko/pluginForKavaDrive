import React, {Component} from 'react'
import Stars from './starBlock/stars'
import './createVote.scss'
class CreateVote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataForRedux: {
                'login': '',
                'stars': '',
                'comment': ''
            },
            arrayofStars: [
                {
                    'id': 1,
                    'value': 1,
                    'status': true,
                },
                {
                    'id': 2,
                    'value': 2,
                    'status': true,
                },
                {
                    'id': 3,
                    'value': 3,
                    'status': true,
                },
                {
                    'id': 4,
                    'value': 4,
                    'status': true,
                },
                {
                    'id': 5,
                    'value': 5,
                    'status': true,
                }
            ]

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
    }

    render() {
        return (
            <div>
                <form className='create-commentForm' onSubmit={this.saveData.bind(this)}>
                    <input placeholder='Moisey' className="create-commentForm_field" ref={(input) => {
                        this.login = input
                    }}/>
                    {<Stars mockData={this.state.arrayofStars} takeResult={this.takeStars.bind(this)}/>}
                    <textarea  className="create-commentForm_field" ref={(input) => {this.comment = input}} ></textarea>
                    <button>Save</button>
                </form>
            </div>
        )
    }
}

export default CreateVote