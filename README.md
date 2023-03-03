# -Movie_Review_Project_Microservices_API
­
_________________________________________________________________________________________________
This document describes the architecture and implementation of a web-based movie 
review platform. The platform is built using modern technologies such as Node.js, 
Also descripting the process and result of this implementation.
_________________________________________________________________________________________________
Microservices with APIs are essential in contemporary web development. Microservices 
enable modular and scalable architectures, allowing for the independent development and 
deployment of each microservice. The platform is simpler to manage and update because 
one microservice does not have an impact on other microservices. Data may be 
efficiently transferred and standardized between microservices with the help of restful 
__________________________________________________________________________________________________
APIs, allowing for the creation of complicated systems with a number of interdependent 
parts. Additionally, third-party developers can interact with APIs and expand the 
platform's functionality, increasing its value. Building scalable, adaptable, and reliable 
web platforms is made possible by the use of microservices and APIs.
__________________________________________________________________________________________________
The implementation of the microservices in this movie review platform is built using 
Node.js and Express, and follows a RESTful API design. Each microservice is a separate 
Express application, responsible for a specific aspect of the platform, such as managing 
movie information or user accounts.
__________________________________________________________________________________________________
The Movie Catalog Microservice is responsible for managing movie information, 
such as title, genre, and release date. The front-end and other microservices can access 
the REST API to receive movie-related data, conduct movie searches, and upload new 
movies to the database. Although this microservice contains built-in data and doesn't 
interact with the database, connecting to a DB like MongoDB is necessary for generic 
applications, it includes a GET API to get the data (id) from the URL and then compare if 
the data exist or not to display, Also in this project it is running during PORT 300.
__________________________________________________________________________________________________
The Review Service Microservice is responsible for managing user reviews for 
movies. It exposes a REST API that allows the front-end and other microservices to 
retrieve movie reviews including the build-in review data and compare the existing id 
with the wanted id then submit new reviews, and retrieve the average rating for a movie. 
This microservice running during PORT 3001.
__________________________________________________________________________________________________
Customer Service User account management is the responsibility of the 
microservice. It offers a REST API that enables the microservices to sign in, log out, and 
register new users. In this project this microservices is not used much but its for handling
user registration. PORT 3002 is when these microservices are active.
__________________________________________________________________________________________________
Thanks
