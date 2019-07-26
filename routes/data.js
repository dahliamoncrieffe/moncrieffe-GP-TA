var express = require('express');
var request = require('request');

//This file pvar request = require('request'); // require in request
var initGet = { uri: 'https://gopuff-public.s3.amazonaws.com/dev-assignments/product/order.json' };
//var initPost = { uri: 'http://http://linkToApi.com/post' };

var apiCaller = function (url, cb) {
    //use request to make the external http call to the JSON api
    request({
        url: url,
        json: true
    }, function (error, response, body) {

            if (!error && response.statusCode === 200) { 

                cb(body);// Send body/response to callback
        }
    })
};
// Call the api with a call back
var apiGet = function (cb) {
    return apiCaller(initGet.uri, cb);
};

var apiPost = function (post, cb) {
    return apiCaller(initGet.uri + post, cb);
};
// Export the functions for external access
module.exports = {
    apiGet: apiGet,
    apiPost: apiPost
};