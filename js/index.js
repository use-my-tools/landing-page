
// API call to get the number of tools
const getApi = document.querySelector('#get-api');

fetch('https://tools-backend.herokuapp.com/api/tools')
.then(res => res.json())
.then(data => data.data.map(tool => {
    getApi.innerHTML = `${data.total}`
}))


// Function to scroll down from header
scrollTo = (element) => {
    window.scrollTo({
      behavior: 'smooth',
      block: beginning
    });
}
  
document.getElementById("features").addEventListener('click', () => {
    scrollTo(document.getElementById("features"));
});