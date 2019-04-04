import cupcake1 from '../images/strawberry-tart.jpg';
import cupcake2 from '../images/sweet-chocolate.jpg';
import cupcake3 from '../images/sweet-frosting.jpg';
import cupcake4 from '../images/royal-red.jpg';

const initState = {
    cake: [
        {id:1, title: "placeholder", desc: "In your world you can create anything you desire.", img: ""}
    ],
    cupcake: [
        {id:1, title: "Strawberry Tart", desc: "We can always carry this a step further.", img: cupcake1},
        {id:2, title: "Sweet Chocolate", desc: "There's really no end to this.", img: cupcake2},
        {id:3, title: "Sweet Frosting", desc: "Isn't it great to do something you can't fail at?", img: cupcake3},
        {id:4, title: "Royal Red", desc: "Let your heart take you to wherever you want to be.", img: cupcake4},
    ]
}

const StoreReducer = (state = initState, action) => {
    switch(action.type) {
        default:
          return state;
      }
}

export default StoreReducer;