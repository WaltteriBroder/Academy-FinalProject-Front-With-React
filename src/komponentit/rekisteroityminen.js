const palveluurl = '/api/auth/signup';

export function rekisteroityminen(User, callback) {
    console.log(JSON.stringify(User));
    return fetch(palveluurl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(User)
    })
        .then((function(response) {
            callback();
        }));
}



const loginurl = '/api/auth/signin';

export function kirjauduSisaan(User, callback) {
    console.log(JSON.stringify(User));
    return fetch(loginurl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(User)
    })
        .then(response =>
            response.json()
                .then(json => {
                if(!response.ok) {
                    return Promise.reject(json);
                } else {
                    console.log(json)
                    console.log(json.accessToken)
                    localStorage.setItem('accessToken', json.accessToken);
                    return json;
                }


            }));


        // .then((function(response) {
        //     if (response.status === 200) {
        //         console.log(User.usernameOrEmail, "kirjautuneena");
        //     }
        //     callback();
        // }));
}

export function getCurrentUser() {
    if(!localStorage.getItem('accessToken')) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: "/api/user/me",
        method: 'GET'
    });
}

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })

    if(localStorage.getItem('accessToken')) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('accessToken'))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if(!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};











