Certainly! Here’s the updated `README.md` with clickable URLs for easy copying:

```markdown
# Train Service Management System API

This document provides the API endpoints for the Train Service Management System. You can test these endpoints using the base URL: `http://localhost:5000`.

## Base URL
```
http://localhost:5000
```

## Endpoints

### 1. User Registration
- **URL**: [http://localhost:5000/register](http://localhost:5000/register)
 ```json
http://localhost:5000/register
  ```

- **Method**: POST
- **Request Body**:
  ```json
  {
    "email": "rock",
    "password": "rock"
  }
  ```

### 2. User Login
- **URL**: http://localhost:5000/login 
 ```json
http://localhost:5000/login
  ```
- **Method**: POST
- **Request Body**:
  ```json
  
  {
    "email": "rock",
    "password": "rock"
  }
  ```


### 3. Add Station
- **URL**: [http://localhost:5000/addStation](http://localhost:5000/addStation)
 ```json
http://localhost:5000/login
  ```
- **Method**: POST
- **Request Body**:
  ```json
  {
    "name": "Central Station",
    "location": "Downtown",
    "code": "CEN",
    "arrivalTime": "09:05",
    "departureTime": "09:20"
  }
  ```

### 4. Get All Stations
- **URL**: [http://localhost:5000/getAllStations](http://localhost:5000/getAllStations)
 ```json
http://localhost:5000/login
  ```
- **Method**: GET

### 5. Get One Station
- **URL**: [http://localhost:5000/getAllStations/{id}](http://localhost:5000/getAllStations/{id})
 ```json
http://localhost:5000/login
  ```
- **Method**: GET
- **URL Parameter**:
  - `id`: The unique identifier of the station.

### 6. Edit Station
- **URL**: [http://localhost:5000/editStations/{id}](http://localhost:5000/editStations/{id})
 ```json
http://localhost:5000/login
  ```
- **Method**: PUT
- **Request Body**:
  ```json
  {
    "name": "South Station 22",
    "location": "Southside",
    "code": "STH2",
    "arrivalTime": "11:00",
    "departureTime": "11:10"
  }
  ```
- **URL Parameter**:
  - `id`: The unique identifier of the station.

### 7. Add Train
- **URL**: [http://localhost:5000/addTrain](http://localhost:5000/addTrain)
 ```json
http://localhost:5000/login
  ```
- **Method**: POST
- **Request Body**:
  ```json
  {
    "trainID": "EX40042",
    "name": "Express 40042",
    "route": [
      {
        "station": "WST",
        "arrivalTime": "06:15",
        "departureTime": "06:30"
      },
      {
        "station": "EST",
        "arrivalTime": "07:15",
        "departureTime": "07:30"
      },
      {
        "station": "CEN",
        "arrivalTime": "08:15",
        "departureTime": "08:30"
      },
      {
        "station": "NTH",
        "arrivalTime": "09:15",
        "departureTime": "09:30"
      },
      {
        "station": "STH",
        "arrivalTime": "10:15",
        "departureTime": "10:30"
      }
    ],
    "farePerStop": 7
  }
  ```

### 8. Get Trains
- **URL**: [http://localhost:5000/getTrains](http://localhost:5000/getTrains)
 ```json
http://localhost:5000/login
  ```
- **Method**: GET

### 9. Edit Train
- **URL**: [http://localhost:5000/editTrain/{id}](http://localhost:5000/editTrain/{id})
 ```json
http://localhost:5000/login
  ```
- **Method**: PUT
- **Request Body**:
  ```json
  {
    "trainID": "EX400422",
    "name": "Express 400422",
    "route": [
      {
        "station": "WST",
        "arrivalTime": "06:15",
        "departureTime": "06:30"
      },
      {
        "station": "EST",
        "arrivalTime": "07:15",
        "departureTime": "07:30"
      },
      {
        "station": "CEN",
        "arrivalTime": "08:15",
        "departureTime": "08:30"
      },
      {
        "station": "NTH",
        "arrivalTime": "09:15",
        "departureTime": "09:30"
      },
      {
        "station": "STH",
        "arrivalTime": "10:15",
        "departureTime": "10:30"
      }
    ],
    "farePerStop": 7
  }
  ```
- **URL Parameter**:
  - `id`: The unique identifier of the train.

### 10. Add Funds
- **URL**: [http://localhost:5000/addFunds](http://localhost:5000/addFunds)
 ```json
http://localhost:5000/login
  ```
- **Method**: POST
- **Request Body**:
  ```json
  {
    "email": "rock",
    "amount": 200
  }
  ```

### 11. Remove Funds
- **URL**: [http://localhost:5000/removeFunds](http://localhost:5000/removeFunds)
 ```json
http://localhost:5000/login
  ```
- **Method**: POST
- **Request Body**:
  ```json
  {
    "email": "rock",
    "amount": 10
  }
  ```

### 12. Get Wallet
- **URL**: [http://localhost:5000/getWallet/{email}](http://localhost:5000/getWallet/{email})
 ```json
http://localhost:5000/login
  ```
- **Method**: GET
- **URL Parameter**:
  - `email`: The email of the user whose wallet is being queried.

### 13. Purchase Ticket
- **URL**: [http://localhost:5000/purchaseTicket](http://localhost:5000/purchaseTicket)
 ```json
http://localhost:5000/login
  ```
- **Method**: POST
- **Request Body**:
  ```json
  {
    "email": "rock",
    "trainId": "EX3003",
    "startStation": "CEN",
    "endStation": "STH"
  }
  ```

### 14. Calculate Fare
- **URL**: [http://localhost:5000/calculateFare](http://localhost:5000/calculateFare)
 ```json
http://localhost:5000/login
  ```
- **Method**: GET
- **Request Body**:
  ```json
  {
    "email": "rock",
    "trainId": "EX3003",
    "startStation": "CEN",
    "endStation": "STH"
  }
  ```

## Notes
- Replace `{id}` and `{email}` with actual values when making requests.
- Ensure that your server is running on `http://localhost:5000` before testing the endpoints.

Feel free to copy these URLs and request bodies directly to test the API endpoints.
```

With this setup, your teacher can easily click on the URLs to test the endpoints and copy the request bodies for their use.