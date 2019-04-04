import cupcake1 from '../images/strawberry-tart.jpg';
import cupcake2 from '../images/sweet-chocolate.jpg';
import cupcake3 from '../images/sweet-frosting.jpg';
import cupcake4 from '../images/royal-red.jpg';
import cupcake5 from '../images/floral-pastel.jpg';
import cupcake6 from '../images/party-muffin.jpg'

const initState = {
    cake: [
        {id:1, title: "placeholder", desc: "In your world you can create anything you desire.", img: ""}
    ],
    cupcake: [
        {id:1, title: "Strawberry Tart", desc: "Always one step further.", img: cupcake1},
        {id:2, title: "Sweet Chocolate", desc: "There's really no end to this.", img: cupcake2},
        {id:3, title: "Sweet Frosting", desc: "Something you can't fail at.", img: cupcake3},
        {id:4, title: "Royal Red", desc: "Wherever you want to be.", img: cupcake4},
        {id:5, title: "Floral Pastel", desc: "We have plenty of time.", img: cupcake5},
        {id:6, title: "Party Muffin", desc: "bring them into your world.", img: cupcake6},
    ]
}

const StoreReducer = (state = initState, action) => {
    switch(action.type) {
        default:
          return state;
      }
}

export default StoreReducer;