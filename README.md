# React - Typescript - Google Places
## React based SPA based application using Google autocomplete API

#### readme - https://github.com/iamksuresh/react-user-form-submission#readme

#### screenshots
-   Project structure -  https://github.com/iamksuresh/react-user-form-submission/blob/master/screenshots/UI-project-structure.png
-   User information form - https://github.com/iamksuresh/react-user-form-submission/blob/master/screenshots/user-information.png
-   User Address form - https://github.com/iamksuresh/react-user-form-submission/blob/master/screenshots/address_auto-populated.png

## Features
- React, Typescript based responsive SPA
- Using Google Autocomplete API for address search and form update
- React context api for store management
- Using cropper for profile picture update
- Axios for uploading form data to backend
- Hashing password, Uploading image to Back end API
- Google places query params ( fields, types ) are configurable and can be added throough env variables
- For available query params options , pl refer - https://developers.google.com/maps/documentation/javascript/place-autocomplete

## Known limitations and assumptions - for Assigment purpose only
-   Addresses are auto filled in form using google Autocomplete API. Form Editing is restricted
-   Back navigations and edit form are to be implemented
-   Cropper is used to upload image as to be used as avatar.
-   Cancel/ modify image file to be implemented
-   Address search is currently bound to Singapore (sg) only. 
-   City, Country and State values are predefined to 'Singapore'

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

## Good to know 
- API to upload form data - https://webhook.site/c5c76877-e804-4b4d-b9eb-fdb2c8077ad9
- Testing strategy is implemented but few cases are to be covered.
- UI is demo only and further improvements are advised.

### Sample Form upload Contract
```sh 
{"name":"testUser","email":"sbds@y.com","password":"$2a$10$jYKYt1RnNsM1OwRJTYSZ1.PHtuDc9iDKGuwf5IYek66DSJVLDm3W.","address1":"Bedok Mall","address2":"311 New Upper Changi Rd","postalCode":"467360","city":"Singapore","state":"Singapore","country":"Singapore"}
```