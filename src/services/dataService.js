var catalog = [
    {
        "title":"Salmon",
        "category": "fish",
        "image": "salmon.png",
        "_id":"0000001",
        "price": 5.01
    },

    {
        "title":"Cod",
        "category": "fish",
        "image": "cod.jpg",
        "_id":"0000002",
        "price": 3.35
    },
    {
        "title":"Iceland Haddock",
        "category": "fish",
        "image": "iceland haddock.jpg",
        "_id":"0000003",
        "price": 7.89
    },
    {
        "title":"Mackrel",
        "category": "fish",
        "image": "mackrel.jpg",
        "_id":"0000004",
        "price": 7.16
    },
    {
        "title":"Seabass",
        "category": "fish",
        "image": "seabass.jpg",
        "_id":"0000005",
        "price": 8.95
    },
    {
        "title":"Tilapia",
        "category": "fish",
        "image": "tilapia.jpg",
        "_id":"0000006",
        "price": 5.37
    },
    {
        "title":"Tuna",
        "category": "fish",
        "image": "tuna.jpg",
        "_id":"0000007",
        "price": 2.24
    },
    {
        "title":"Pangasius",
        "category": "fish",
        "image": "pangasius.jpg",
        "_id":"0000008",
        "price": 3.03
    }
];

class DataService {

    getProducts(){
        //To Do: connect to server and retrieve to display

        return catalog;
    }

}


export default DataService;