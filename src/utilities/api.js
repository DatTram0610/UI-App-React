var api = {
    getPictures() {
        var url = `https://randomuser.me/api/?results=500`;
        return fetch(url).then(response => 
            response.json()
        );
    }
};

// var api = () => {

//     return {
//         getPictures: getPictures
//     }

//     function getPictures() {
//         var url = `https://randomuser.me/api/?results=500`;
//         return fetch(url)
//             .then(onSuccess)
//             .catch(onError)
//     }

//     function onSuccess(response) {
//         return response;
//     }

//     function onError(error) {
//         return new Error('Something went wrong...')
//     }
//     // getPictures() {
//     //     var url = `https://randomuser.me/api/?results=500`;
//         // return fetch(url).then(response => 
//         //     response.json()
//         // );
//         // return fetch('https://randomuser.me/api/?results=500').then(onSuccess).catch(onError);
//             // .then(response => {
//             //     if (response.ok) {
//             //         return response.json();
//             //     }
//             //     else {
//             //         throw new Error('Something went wrong...')
//             //     }

//             // })
//     // }
// };

module.exports = api;

