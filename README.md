
# Todo Application

## Overview

This is a simple RESTful API for managing a to-do list, built with Node.js and Express. The application supports basic CRUD operations (Create, Read, Update, Delete) for managing to-do items. The application is also Dockerized, making it easy to run in any environment.

## Features

- **Create a Todo**: Add a new todo item.
- **Read Todos**: Retrieve a list of all todos or a specific todo by its ID.
- **Update a Todo**: Modify an existing todo item by its ID.
- **Delete a Todo**: Remove a todo item by its ID.

## API Endpoints

### 1. Create a Todo

**Endpoint**: `POST /todos`

**Description**: Create a new todo item.

**Request Body**:

```json
{
  "title": "Learn Docker",
  "description": "Study Docker and containers",
  "completed": false
}
```

**Response**:

```json
{
  "message": "Todo created successfully",
  "todo": {
    "_id": "60d1f05ef9d9b12e7498c37f",
    "title": "Learn Docker",
    "description": "Study Docker and containers",
    "completed": false
  }
}
```

### 2. Get All Todos

**Endpoint**: `GET /todos`

**Description**: Retrieve all to-do items.

**Response**:

```json
[
  {
    "_id": "60d1f05ef9d9b12e7498c37f",
    "title": "Learn Docker",
    "description": "Study Docker and containers",
    "completed": false
  },
]
```

### 3. Get a Todo by ID

**Endpoint**: `GET /todos/:id`

**Description**: Retrieve a specific to-do item by its ID.

**Response**:

```json
{
  "_id": "60d1f05ef9d9b12e7498c37f",
  "title": "Learn Docker",
  "description": "Study Docker and containers",
  "completed": false
}
```

### 4. Update a Todo by ID

**Endpoint**: `PUT /todos/:id`

**Description**: Update a specific todo item by its ID.

**Request Body**:

```json
{
  "title": "Learn Docker",
  "description": "Study Docker in-depth",
  "completed": true
}
```

**Response**:

```json
{
  "message": "Todo updated successfully",
  "todo": {
    "_id": "60d1f05ef9d9b12e7498c37f",
    "title": "Learn Docker",
    "description": "Study Docker in-depth",
    "completed": true
  }
}
```

### 5. Delete a Todo by ID

**Endpoint**: `DELETE /todos/:id`

**Description**: Delete a specific todo item by its ID.

**Response**:

```json
{
  "message": "Todo deleted successfully"
}
```

## Prerequisites

- **Node.js**: Make sure you have Node.js installed on your machine.
- **Docker**: Docker is required to run the application as a container.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

2. Install the dependencies:

```bash
npm install
```

3. Start the application:

```bash
npm start
```

4. The application will be running on `http://localhost:3000`.

## Docker

To build and run the Docker container:

1. Build the Docker image:

```bash
docker build -t todo-app .
```

2. Run the Docker container:

```bash
docker run -p 3000:3000 todo-app
```

## Testing

You can test the API using tools like Postman or `curl`. Below are some examples:

### Create a new Todo

```bash
curl -X POST http://localhost:3000/todos -H "Content-Type: application/json" -d '{"title": "Learn Docker", "description": "Study Docker and containers", "completed": false}'
```

### Get all Todos

```bash
curl http://localhost:3000/todos
```

### Get a specific Todo by ID

```bash
curl http://localhost:3000/todos/<todo_id>
```

### Update a Todo by ID

```bash
curl -X PUT http://localhost:3000/todos/<todo_id> -H "Content-Type: application/json" -d '{"title": "Learn Docker", "description": "Study Docker in-depth", "completed": true}'
```

### Delete a Todo by ID

```bash
curl -X DELETE http://localhost:3000/todos/<todo_id>
```
