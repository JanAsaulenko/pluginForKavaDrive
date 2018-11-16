import React from 'react';
import {convertValue} from "./convertValues";

class MakeStars {
    constructor(count, type) {
        this.count = count;
        this.type = type;
    }

    make() {
        let arr = [];
        for (let i = 0; i < this.count; i++) {
            let li = <li key={i}>{this.type}</li>;
            arr.push(li)
        }
        return arr
    }


}


class MakeSelected {
    constructor(arrayOfLi, countOfSelected) {
        this.arrayOfLi = arrayOfLi;
        this.count = countOfSelected;
    }

    showSelected() {
        let arr = this.arrayOfLi.map((el, index) => {
            if (index < this.count) {
                return <li key={index}>☆</li>
            }
            return el
        });
        return arr
    }
}

class StarManipulator {
    makeSelected(countStars, type, className, choose) {
        let stars = new MakeStars(countStars, type, className);
        let arr = stars.make();
        let selected = new MakeSelected(arr, choose);
        let result = selected.showSelected();
        return result
    }

}

export default new StarManipulator()

