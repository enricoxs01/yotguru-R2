# yotGuru 

yotGuru aims to provide an application to support the need for boat maintenance from the end user to the provider. It provides the possibility to register one or more vessels, maintain records, schedule work orders, ensure an accurate inventory of the systems, and many other capabilities. The second release has been refactored to be entirely run on React and has replaced the login mechanism with a native JWT token session.

![yotGuru](./src/images/Yotguru%20R2%20welcome.png)

Once the login is successful the user is presented with the main landing page at Vessels. From here the user can navigate either to the Account or Vessel section. The Vessel section provides a full CRUD round-trip whereas the Account section allows to view and edit the account information.

![app](./src/images/Yotguru%20R2%20Vessels.png)
![app](./src/images/Yotguru%20R2%20account%20view.png)
![app](./src/images/Yotguru%20R2%20edit%20account.png)


Akin to R2, this release's primary goal is to establish the basic framework to create an account, collect information and for a user to add one or more vessels. The vessels can be associated with only one account. There can be only one account per login user. 

## Installation

There is no installation required for the web application. The application can be reached at https://yotguru-r2.herokuapp.com/


## Usage

**Vessels** provides a list of vessels. The user can add a new one or view the details of each. From the details view the user can edit or delete a vessel.

**Account** via this button the user can fill out or update its account record.

**Logout** this button terminates the session for the user.


## Technologies 

The application is built on Node.js, Express, Mongoose, MongoDB,React and it is deployed to Heroku.

## License
At this time there is no license for this application.