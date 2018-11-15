import React, {Component} from 'react'
import {connect} from 'react-redux';
import starManipulator from '../../../../helpers/Starmanipulation';
import './commentInfoBlock.scss'
 class CommentStars extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let {stars}= this.props;
        let selectedStars =  starManipulator.makeSelected(6,"★", 'lol', stars);

        return (
            <ul className='star-list'>
                    {selectedStars}
            </ul>
        )
    }
}
const mapStateToProps = (state)=>{
     return {
         unSelectedStars:state.mockStarData
     }
}
export default connect(mapStateToProps)(CommentStars)



