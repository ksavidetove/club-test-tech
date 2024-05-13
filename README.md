### INSTACLUB: BACKEND TYPESCRIPT DEVELOPER TECHNICAL TEST @CLUB
Duration: 2 hours

## Installation
1. Clone this repository:
  ```bash
    git clone https://github.com/ksavidetove/club-test-tech
    cd club-test-tech
  ```

2. Install the dependancies
  ```bash
  $ npm i
  ```

3. Using Docker, spin up a PostgreSQL instance
  ```bash
  $ docker-compose up -d
  ```

4. Start the server
  ```bash
  $ npm start
  ```

## Endpoints
# Create User
Method: POST
URL: /user
Request Body: 
  - name
  - email
  - description
  - picture
Description: Creates a new user.

# Get User
Method: GET
URL: /user/:id
Request Params: id (User ID)
Description: Retrieves information about a user.

# Remove User
Method: DELETE
URL: /user/:id
Request Params: id (User ID)
Description: Deletes a user.

# Update User
Method: PUT
URL: /user/:id
Request Params: id (User ID)
Request Body:
  - name
  - email
  - description
  - picture
Description: Updates user information.

# Follow User
Method: POST
URL: /user/:followerId/follow
Request Body and Params: FollowUserDto, followerId (Follower's ID)
Description: Allows a user to follow another user.

# Create Media
Method: POST
URL: /user/:userId/media
Request Params: userId (User ID)
Request Body: 
  - title
  - URL
  - description
Description: Uploads media for a user.

# Remove Media
Method: DELETE
URL: /user/:userId/media/:id
Request Params: userId (User ID), id (Media ID)
Description: Deletes media associated with a user.

# Update Media
Method: PUT
URL: /user/:userId/media
Request Body and Params: userId (User ID)
Request Body: 
  - title
  - URL
  - description
Description: Updates media information.

# Get Feed
Method: GET
URL: /user/:id/feed?offset=20&limit=10
Request Params: id (User ID)
Request Query: id (User ID), limit (Pagination Limit), offset (Pagination Offset)
Description: Retrieves the feed for a user with pagination support.


## OBJECTIVE
Develop a REST API using Node.js and TypeScript that allows users to manage profiles and media, follow other users, and view a personalized feed.
A crucial requirement for this project is rapid iteration. We may need to completely modify or remove features at a moment’s notice. Therefore, the code must prioritize speed and adaptability, even if it means making some trade-offs in other areas.

## FEATURES TO IMPLEMENT
• Profile Management:
  - Create a user profile with a username, email, description, and profile picture URL.
  - Read, update, and delete their own profile.
• Media Management:
  - Create media with a title, description, and media URL.
  - Read, update, and delete media.
• User Relationships:
  - Allow one user to follow another user.
• Feed:
  - Retrieve a paginated feed containing the most recent media from followed users that have not yet been viewed.

## TECHNICAL REQUIREMENTS
• Framework and Language: Node.js + TypeScript. The choice of framework is open
(Express, Koa, NestJS, etc.).
• Database: Use a SQL database. The choice of database management system is open
(MySQL, PostgreSQL, SQLite, etc.).
• Authentication: Simple email and password authentication (optional to simplify the test).
• Testing Tools: To facilitate easy testing of your API, please provide a file that simplifies API
calls (Postman collection, .http/.rest file + REST client extension on VSCode, etc.).
• Mandatory Documentation: A readme explaining how to install dependencies (including
the database) and start your project.

## DETAILS
You are free to:
• use any quality tools you deem necessary,
• add documentation and/or tests you find useful,
• devote as much time as you wish to performance and optimization.
We encourage you to work as you normally would and demonstrate how you think good code
should be structured and maintained. Keep in mind that a key objective of this test is to have a
backend that allows for very rapid iteration. Feel free to provide details about your work in your
return email.