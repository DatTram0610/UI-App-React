// const api = {
//     getPictures() {
//         var url = `https://randomuser.me/api/?results=500`;
//         return fetch(url).then(response => 
//             response.json()
//         );
//     }
import axios from 'axios';


// };

// const myHeaders = new Headers();
const api = {

    getPictures() {
        return axios.get('https://randomuser.me/api/?results=500')
                .then(response => {
                    return response;
                }).catch(error => {
                    return error;
                })

    },

    getUser() {
        return axios.get('http://localhost:3001/api/user')
                .then(response => {
                        return response;
                }).catch(error => {
                    return error;
                })
    },

    postUser(data) {
        return axios.post('http://localhost:3001/api/user', data)
                .then(response => {
                    return response;
                }).catch(error => {
                    return error;
                })
    }
    // onSuccess = (response) => {
    //     return response;
    // }

    // function onError(error) {
    //     return new Error('Something went wrong...')
    // }
    // getPictures() {
    //     var url = `https://randomuser.me/api/?results=500`;
    //     return fetch(url).then(response => 
    //         response.json()
    //     );
    //     return fetch('https://randomuser.me/api/?results=500').then(onSuccess).catch(onError);
    //         .then(response => {
    //             if (response.ok) {
    //                 return response.json();
    //             }
    //             else {
    //                 throw new Error('Something went wrong...')
    //             }

    //         })
    // }
};

export default api;

