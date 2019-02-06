// const container = document.querySelector('.container');

// console.log(container);

const getApi = document.querySelector('#get-api');

//getApi.innerHTML = 
// const getData = fetch('https://tools-backend.herokuapp.com/api/tools').then(res => res.json()).then(data => data);

// console.log(getData);

// function gettingData(){
//     getApi.innerHTML = getData.data.map( tool => {
//         console.log(tool)})
// };

// gettingData();


// fetch('https://tools-backend.herokuapp.com/api/tools')
//     .then(res => res.json())
//     .then(data => data.data.map(tool => (tool)));


fetch('https://tools-backend.herokuapp.com/api/tools')
.then(res => res.json())
.then(data => data.data.map(tool => {
    getApi.innerHTML = data.data.length
}))

// let myTools = [];

// fetch('https://tools-backend.herokuapp.com/api/tools')
// .then(res => res.json())
// .then(data => data.data((tool) => {
//     console.log(tool.length);
// }))


// let myData;

// fetch('https://tools-backend.herokuapp.com/api/tools')
//     .then(res => res.json())
//     .then(data => myData = data.data)


// myData && console.log(myData);