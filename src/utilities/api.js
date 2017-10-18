// const api = {
//     getPictures() {
//         var url = `https://randomuser.me/api/?results=500`;
//         return fetch(url).then(response => 
//             response.json()
//         );
//     }


// };

const api = {

    // getPictures() {
    //     var url = `https://randomuser.me/api/?results=500`;
    //     return fetch(url)
    //         .then(response => response.json())
    //         .catch(error => new Error('Something went wrong...'))
    // },

    getPictures() {
        var url = `https://randomuser.me/api/?results=500`;
        return fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                else {
                    throw new Error('Something wend wrong...')
                }
            })
    },

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

