# Node.js Backend Engineer Task

URL Shortener Backend App

## Requirements

- You should use latest Node.js
- You can use available ES6 features
- You should store data in-memory
- You should not use a database system
- You should not use Babel or any transpiler

## The Task

Your task is to implement a backend for a URL shortener app and send your code to us.

A URL shortener typically creates a short version of a long URL that can be used later to redirect to the original URL.

Create a Node.js application that:

Runs an HTTP server
Authorizes the /api/create API endpoint using a JWT token given in the table below
Verifies the signature of the JWT tokens
Receives the authorization token in the `Authorization` header as a bearer token, see curl example below

- JWT authorization token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJqb2huZG9lIiwicmVhbG5hbWUiOiJKb2huIERvZSJ9.10cg9u3gFDOLtY0hQvqkR2LlryOdifz5yrjATBHyXjA`
- JWT secret: `mysecretkey`

Example GET request with authorization (note the `Bearer` substring witha a space)

```bash
curl -i http://127.0.0.1/endpoint --header "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJqb2huZG9lIiwicmVhbG5hbWUiOiJKb2huIERvZSJ9.10cg9u3gFDOLtY0hQvqkR2LlryOdifz5yrjATBHyXjA"
```

## API endpoints to implement

---

### POST /api/create

Creates a new shortened version of the given URL and responds with HTTP status 201.
If the URL creation is successful it returns a JSON containing the shorthand.

The endpoint is authorized with the JWT token given above.

Responds with HTTP status 409 if the shorthand is already taken.

#### Payload

Payload should be sent as JSON in the body using `Content-Type: application/json`

| Property | Value type |  |
| :------: | :--------: |:-: |
| original_url | String, **required** |  |
| shorthand    | String, **optional** |If not present, a shorthand should be generated and returned. |

Example payload

```json
{
  "original_url": "https://www.google.com/?q=this%20is%20a%20really%20long%20url%20that%20should%20have%20been%20shortened",
  "shorthand": "shortgoogle"
}
```

Another example without the optional shorthand. In this case a shorthand should be generated.

```json
{
  "original_url": "https://www.google.com/?q=this%20is%20another%20really%20long%20url%20that%20should%20have%20been%20shortened"
}
```

### Response

Response containing the shorthand should be sent as a JSON in the body using `Content-Type: application/json`

Example:

```json
{
  "shorthand": "shortgoogle"
}
```

---

### GET /\*

Example:

- GET /shortgoogle
- GET /another_url
- GET /5d41402a

This mathes all other paths.

Responds with an HTTP redirect to the original URL.
Responds with status code 404 if shorthand was not found.

---
