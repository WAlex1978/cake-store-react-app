import cake1 from '../images/cream-cake.jpg';
import cake2 from '../images/fruit-torte.jpg';
import cake3 from '../images/strawberry-roll.jpg';
import cake4 from '../images/plum-streusel.jpg';
import cake5 from '../images/berry-sweet.jpg';
import cake6 from '../images/chocolate-cappuccino.jpg';
import cake7 from '../images/color-palette.jpg';
import cake8 from '../images/date-cake.jpg';

import cupcake1 from '../images/strawberry-tart.jpg';
import cupcake2 from '../images/sweet-chocolate.jpg';
import cupcake3 from '../images/sweet-frosting.jpg';
import cupcake4 from '../images/royal-red.jpg';
import cupcake5 from '../images/floral-pastel.jpg';
import cupcake6 from '../images/party-muffin.jpg'

const initState = {
    cake: [
        {id:1, title: "Cream Cake", desc: "Create anything you desire.", img: cake1},
        {id:2, title: "Fruit Torte", desc: "We don't have to be concerned.", img: cake2},
        {id:3, title: "Strawberry Roll", desc: "Let it fall where it will.", img: cake3},
        {id:4, title: "Plum Streusel", desc: "See it finished in your mind.", img: cake4},
        {id:5, title: "Berry Sweet", desc: "Decide where your cloud lives.", img: cake5},
        {id:6, title: "Chocolate Cappuccino", desc: "Take a step back and look.", img: cake6},
        {id:7, title: "Color Palette", desc: "It's all a game of angles.", img: cake7},
        {id:8, title: "Date Cake", desc: "Put your feelings into it.", img: cake8},
    ],
    cupcake: [
        {id:1, title: "Strawberry Tart", desc: "Always one step further.", img: cupcake1},
        {id:2, title: "Sweet Chocolate", desc: "There's really no end to this.", img: cupcake2},
        {id:3, title: "Sweet Frosting", desc: "Something you can't fail at.", img: cupcake3},
        {id:4, title: "Royal Red", desc: "Wherever you want to be.", img: cupcake4},
        {id:5, title: "Floral Pastel", desc: "We have plenty of time.", img: cupcake5},
        {id:6, title: "Party Muffin", desc: "Bring them into your world.", img: cupcake6},
    ]
}

const StoreReducer = (state = initState, action) => {
    switch(action.type) {
        default:
          return state;
      }
}

export default StoreReducer;