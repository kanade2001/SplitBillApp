# APIs

## User APIs

### 1. Create User

- **URL**: `/api/users/`
- **HTTP Method**: `POST`
- **Request Body**:

  ```json
  {
    "username": "example_user"
  }
  ```

- **Response**:

  - `201 Created`

    ```json
    {
      "id": 1
    }
    ```

  - `400 Bad Request`

    ```json
    {
      "error": "Invalid data"
    }
    ```

### 2. Edit User

### 3. Delete User

## Trip Apis

### 1. Create Trip

### 2. Edit Trip

### 3. Delete Trip
