import 'whatwg-fetch';

class HttpService { // ES6
    getProducts = () => {
        var promise = new Promise( (resolve, reject) => { //1
            fetch('http://localhost:3004/product') //2
            .then(response => { // response from server
                resolve(response.json()); //4 later point fullfilled
                reject("You stink!");
            })
        });
        return promise; //3 async
    }
}

export default HttpService;