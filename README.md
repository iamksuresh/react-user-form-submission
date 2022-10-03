# React - Typescript - Google Places
## React based SPA based application using Google autocomplete API

#### readme - 

#### screenshots
-   Folder structure - 

## Features
- React, Typescript based responsive SPA
- Using Google Autocomplete API for address search and form update
- React context api for store management
- Using cropper for profile picture update
- Axios for uploading form data to backend
- Google places query params ( fields, types ) are configurable and can be added throough env variables
- For available query params options , pl refer - https://developers.google.com/maps/documentation/javascript/place-autocomplete

## Known limitations and assumptions - for Assigment purpose only
-   Addresses are auto filled in form using google Autocomplete API. Form Editing is restricted
-   Back navigations and edit form are to be implemented
-   Cropper is used to upload image as to be used as avatar.
-   Image is not uploaded to backend and Cancel/ modify image file to be implemented
-   Address search is currently bound to Singapore (sg) only. 
-   City, Country and State values are predefined

## Technology stack
-   React, Typescript, Context API, Google Places API , react cropper library
-   material ui, axios

## Testing
-   React testing library for  integration testing

## Installation
-  Pre-requisite - [Node.js](https://nodejs.org/) latest. 
-  git clone 
-  Tested in node 16.15.0 , npm 8.9.0 , chrome browser

```sh
cd <root-folder>
npm i
npm start
```
- UI will start at 3000
- NOTE : Please add API KEY to .env file to access Google Places functionality

## Testing
```sh
cd <root-folder>
npm i (if not already done)
npm test
```
## Test coverage




## Improvements
- UI performance is greatly improved using throttling of FX data for configurable intervals.
-- FX prices are collected until defined interval
-- ASK - Lowest ASK value is updated in the UI dashboard
-- BID - Highest BID value is updated in the UI dashboard
- Handling of multiple instruments
-- This is done at the store level using react Context API
-- Clear separation of concers between subscribing and processing of incoming individual FX pairs data

## Good to know 
- API to upload form data - https://webhook.site/c5c76877-e804-4b4d-b9eb-fdb2c8077ad9
- Testing strategy is implemented but few cases are to be covered.
- UI is demo only and further improvements are advised.

