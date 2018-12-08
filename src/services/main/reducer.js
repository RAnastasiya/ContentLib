import * as actionTypes from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    reviews      : [
        {
            id: 1,
            name: "ahmed sayan",
            description: "Very easy to use and great way to do business. No more garage hassles..",
            date: "April 2, 2018",
            icon: "./assets/icon/play.svg"
        },{
            id: 2,
            name: "A Google user",
            description: "Easy rent",
            date: "March 19, 2018",
            icon: "./assets/icon/Twitter.svg"
        },{
            id: 3,
            name: "Christopher Rivera",
            description: "Very easy to use and great way to do business. No more garage hassles..",
            date: "April 2, 2018",
            icon: "./assets/icon/Twitter.svg"
        },{
            id: 4,
            description: "5.000+ drivers with us",

        },{
            id: 5,
            name: "Ahsan Ali",
            description: "Nice improvement...Makes easy 4 everyone ...",
            date: "April 15, 2018",
            icon: "./assets/icon/Apple.svg"
        },{
            id: 6,
            name: "William Swanson",
            description: "Very easy to use and great way to do business. No more garage hassles..",
            date: "April 2, 2018",
            icon: "./assets/icon/Medium-black.svg"
        },{
            id: 7,
            name: "ahmed sayan",
            description: "Very easy to use and great way to do business. No more garage hassles..",
            date: "April 2, 2018",
            icon: "./assets/icon/Apple.svg"
        },{
            id: 8,
            name: "ahmed sayan",
            description: "Very easy to use and great way to do business. No more garage hassles..",
            date: "April 2, 2018",
            icon: "./assets/icon/Apple.svg"
        },{
            id: 9,
            name: "ahmed sayan",
            description: "Very easy to use and great way to do business. No more garage hassles..",
            date: "April 2, 2018",
            icon: "./assets/icon/Apple.svg"
        }
    ],
    slider       : [
        {
            id: 1,
            img1: "./assets/sliderLacusEnterprise/ListOfCars.png",
            img2: "./assets/sliderLacusEnterprise/CarPageActivity.png",
            name: "Lacus enterprise",
            icon: "./assets/sliderLacusEnterprise/enterprise-icon.svg",
            title: "Automated Vehicle Management for Fleets",
            description: "<p>Manage, dispatch, maintain & automate your fleet with one system.</p>",
            link_name: "Learn more",
            link: "#"
        },{
            id: 2,
            img1: "./assets/sliderLacusMaintenance/Inventory.png",
            img2: "./assets/sliderLacusMaintenance/Work order.png",
            name: "Lacus Maintenance",
            icon: "./assets/sliderLacusMaintenance/Lacus Maintenance.svg",
            title: "Unified Eco-System for Inventory and Repair Management",
            description: "<ul><li>Inventory</li><li>Work orders</li><li>Invoices</li></ul>",
            link_name: "Learn mare",
            link: "#"
        },{
            id: 3,
            img1: "./assets/lacusAi/Lacus Ai illustration.svg",
            img2: "",
            name: "Lacus Ai",
            icon: "",
            title: "Tailored Artifical Intelligence for Transportation",
            description: "<p>Machine learning crafted to improve passenger transportation technology</p>",
            link_name: "Learn more",
            link: "#"
        }
    ],
    articles     : [
        {
            id: 1,
            icon: "/wall street logo@2x.png') no-repeat",
            description: "“1A driver who wants a car can use the app, called Lacus Driver, to see all vehicles that aren’t in use on a map. He can book that car, unlock it with his phone and begin driving straight away”",
            url: "#",
            status: true
        },{
            id: 2,
            icon: "/crains logo@2x.png') no-repeat",
            description: "“2The change will likely lead to shorter shifts and more taxis on the road during rush hour.”",
            url: "#",
            status: true
        },{
            id: 3,
            icon: "/crains logo@2x.png') no-repeat",
            description: "“3The change will likely lead to shorter shifts and more taxis on the road during rush hour.”",
            url: "#",
            status: false
        },{
            id: 4,
            icon: "/crains logo@2x.png') no-repeat",
            description: "“4The change will likely lead to shorter shifts and more taxis on the road during rush hour.”",
            url: "#",
            status: false
        },{
            id: 5,
            icon: "/crains logo@2x.png') no-repeat",
            description: "“5The change will likely lead to shorter shifts and more taxis on the road during rush hour.”",
            url: "#",
            status: false
        }
    ],
    sliderGetStarted: [
        {
            id: 1,
            title: "Locate the car and choose nearest vehicle for you"
        },{
            id: 2,
            title: "Choose period, view estimate and confirm reservation"
        },{
            id: 3,
            title: "Slide to start, lock/unlock doors, track remaining time"
        }
    ],
    requestEmail : false,
    requestPhone : false
});

export default function (state=initialState, {type, ...action}) {
    console.log("action.requestEmail - ", action.requestEmail);
    switch(type) {
        case actionTypes.REQUEST_CODE_SUCCESS:
            return {
                ...state,
                requestEmail: action.requestEmail ? "Thank you.  Now you are with us": false,
                requestPhone: action.requestPhone ? "We sent you a link to your phone": false
            };
            break;

        case actionTypes.REQUEST_CODE_FAIL:
            return {
                ...state,
                requestEmail: action.requestEmail ? "Please try again later" : "",
                requestPhone: action.requestPhone ? "Please try again later" : ""
            };
            break;

        case actionTypes.REQUEST_CODE_ERROR:
            return {
                ...state,
                requestEmail: false,
                requestPhone: false

            };
            break;

        case actionTypes.CHANGE_ARTICLE:
            return {
                ...state,
                articles: state.articles.map((article, index) =>(
                    {
                        ...article,
                        status: index === action.arrArticles[0] || index === action.arrArticles[1],
                    }))

            };
            break;

        default:
            return state;
    }
}

