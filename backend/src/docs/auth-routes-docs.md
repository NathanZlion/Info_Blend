# Auth API Routes

userRouter.post("/register", userControllers.register);

## Register User API

> `POST` /api/v1/user/register

- New user can register using this api by providing username, email and a password. Optionally they can provide their list of categories they are interested in and also their geographic location (country) for a better and personalized events feed.
  - The request: `curl -X POST "Content-Type: application/json" -d '{
"username": "username",
"email": "email address",
"password":"bacha debele",
"interests": [... list of categories the user is interested in for recommendation],
"country": "select country of origin for even better event feed"
}' "https://localhost:5000/api/v1/user/register"`

_success response_

```json
{
  "token": "<token>",
  "user": {
    "userName": "new user username",
    "email": "new user's email address",
    "interests": ["... a list of interests of the user"],
    "country": "the user's country"
  }
}
```

userRouter.post("/login", userControllers.login);

## Login User

> `POST` /api/v1/user/login

- Existing user can login using this api by providing email and a password.
  - The request: curl -X POST "Content-Type: application/json" -d '{
    "email": "email address",
    "password":"bacha debele",
    }' "https://localhost:5000/api/v1/user/login"

_success response_

```json
{
  "token": "<token>",
  "user": {
    "userName": "new user username",
    "email": "new user's email address",
    "interests": ["... a list of interests of the user"],
    "country": "the user's country"
  }
}
```

userRouter.get("/", userControllers.getUser);

## GetMe API

> `GET` /api/v1/user/getme

- This is to get user information from token.
  - The request: `curl -H "Authorization: Bearer <YOUR-TOKEN>" "https://localhost:5000/api/v1/user/getme"`

_response is like the register and login usecases._
_success response_

```json
{
  "token": "<token>",
  "user": {
    "userName": "new user username",
    "email": "new user's email address",
    "interests": ["... a list of interests of the user"],
    "country": "the user's country"
  }
}
```

userRouter.patch("/", userControllers.updateUser);

## Update User API

> `PATCH` /api/v1/user/

- Updates the user profile and information.
  - The request: `curl -X PATCH -H "Authorization: Bearer <YOUR-TOKEN>" "Content-Type: application/json" -d '{
"username": "username",
"email": "email address",
"password":"bacha debele",
"interests": [... list of categories the user is interested in for recommendation],
"country": "select country of origin for even better event feed"
}' "https://localhost:5000/api/v1/user/"`

_Updated user info with the same format as register's and login's usecase is returned._
_success response_

```json
{
  "token": "<token>",
  "user": {
    "userName": "updated user username",
    "email": "updated user's email address",
    "interests": ["... an updated list of interests of the user"],
    "country": "the user's country"
  }
}
```

userRouter.delete("/", userControllers.deleteUser);

## Delete User API

> `DELETE` /api/v1/user

- Delete an existing user
  - The request: `curl -X DELETE -H "Authorization: Bearer <YOUR-TOKEN>" "https://localhost:5000/api/v1/user/"`

_response is like the register and login usecases._
_success response_

```json
{
  "message": "User deleted successfully"
}
```

userRouter.get("/categories", userControllers.getCategories);

## Get Categories API

> `GET` /api/v1/user/categories

- Get a list of categories of interests user can select.
  - The request: `curl "https://localhost:5000/api/v1/user/categories"`

_sample success response_

```json
{
    "categories": [
        "Society/Politics",
    "Health/Nutrition",
    "Health/Fitness",
    "Home/Entertainment",
    "Science/Environment",
    "Society/Crime",
    "Society/Law",
    "Society/Politics"
  ]
}
```
**BEWARE these list of interest categories can be changed. Maybe new categories could be added or existing ones could get deleted. DON'T HARD CODE. Use this api when needed.**
