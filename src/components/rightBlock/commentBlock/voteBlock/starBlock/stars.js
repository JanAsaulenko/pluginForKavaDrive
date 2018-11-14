import React from 'react'
import './starBlock.scss';
import {convertValue} from "./convertValues";

export default function Stars({mockData, takeResult}) {


    let data = mockData.map((el) => {
        return <li number={el.value} key={el.id}>☆</li>
    });

    function drawSelected(node){
            node.innerText = '★';
    }

    function checkPreviousElement(node) {
        drawSelected(node)
        if(node.nextElementSibling===null){
            drawSelected(event);
       return;
        }
        else if(node.nextElementSibling.tagName === "LI") {
            drawSelected(node.nextElementSibling);
            drawSelected(node);
         return  checkPreviousElement(node.nextElementSibling)
        }
    }


    function chooseHighestStar(event) {

        if (event.target.parentNode.tagName === 'UL') {
            checkPreviousElement(event.target);
            let convertedValue = convertValue(event.target.getAttribute('number'));
            takeResult(convertedValue)
        }
        else {
            return;
        }
    }

    return (
        <ul onClick={chooseHighestStar} className="star-list">{data}</ul>

    )
}

