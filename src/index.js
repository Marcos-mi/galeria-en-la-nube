
const chistesUrl = "https://api.chucknorris.io/jokes/random";
// fetch( chistesUrl ).then(resp =>{
//     resp.json().then( data =>{
//         console.log(data.id)
//         console.log(data.value)
//     });
// });

fetch(chistesUrl)
        .then(resp => resp.json())
        .then ( ({id,value}) => {
            console.log(id, value);
        });
