import Pet from '../models/Pet'
import BaseStore from './BaseStore'
import axios from 'axios';

export default class PetStore extends BaseStore {

    constructor() {
        super();
    }

    getPets() {
        var baseUrl = 'http://localhost:50096/API/Pet/';
        
        axios.get(baseUrl)
        .then(function(response){
            return response;
        })
        .catch(function(error){
            // This is where you run code if the server returns any errors
            console.log(error);
        });

        // return fetch(baseUrl + 'GetAll')
        //     .then(response => {
        //         return response.json();
        //     }).catch(function (error) {
        //         // This is where you run code if the server returns any errors
        //         console.log(error);
        //     });
    };

    getPetsByUserId(userId) {
        var baseUrl = 'http://localhost:50096/API/Pet/';
        return fetch(baseUrl + 'GetByIdUser?id=' + userId)
            .then(response => {
                return response.json();
            }).catch(function (error) {
                // This is where you run code if the server returns any errors
                console.log(error);
            });
    }
}