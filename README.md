Got it! Here’s a simplified `README.md` with all the URLs and requests formatted for easy copy-pasting:

```markdown
# Train Service Management System API

This document provides the API endpoints for the Train Service Management System. You can test these endpoints using the base URL: `https://train-server-eight.vercel.app`.

## Endpoints

### 1. User Registration
- **URL**: `https://train-server-eight.vercel.app/register`
```json
https://train-server-eight.vercel.app/register
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
- **URL**: `https://train-server-eight.vercel.app/login`

```json
https://train-server-eight.vercel.app/login
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
- **URL**: `https://train-server-eight.vercel.app/addStation`
```json
https://train-server-eight.vercel.app/addStation
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
- **URL**: `https://train-server-eight.vercel.app/getAllStations`
```json
https://train-server-eight.vercel.app/getAllStations
  ```
- **Method**: GET

### 5. Get One Station
- **URL**: `https://train-server-eight.vercel.app/getAllStations/{id}`
```json
https://train-server-eight.vercel.app/getAllStations/66d4ba5eac5942b6ccfe1b68
  ```
- **Method**: GET
- **URL Parameter**:
  - `id`: The unique identifier of the station.

### 6. Edit Station
- **URL**: `https://train-server-eight.vercel.app/editStations/{id}`
```json
https://train-server-eight.vercel.app/editStations/66d568fb8ba4e9207f90cdfb
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
- **URL**: `https://train-server-eight.vercel.app/addTrain`
```json
https://train-server-eight.vercel.app/addTrain
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
- **URL**: `https://train-server-eight.vercel.app/getTrains`
```json
https://train-server-eight.vercel.app/getTrains
  ```
- **Method**: GET

### 9. Edit Train
- **URL**: `https://train-server-eight.vercel.app/editTrain/{id}`
```json
https://train-server-eight.vercel.app/editTrain/66d56e10d2810bd1a10d67b9
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
- **URL**: `https://train-server-eight.vercel.app/addFunds`
```json
https://train-server-eight.vercel.app/addFunds
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
- **URL**: `https://train-server-eight.vercel.app/removeFunds`
```json
https://train-server-eight.vercel.app/removedFunds
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
- **URL**: `https://train-server-eight.vercel.app/getWallet/{email}`
```json
https://train-server-eight.vercel.app/getWallet/rock
  ```
- **Method**: GET
- **URL Parameter**:
  - `email`: The email of the user whose wallet is being queried.

### 13. Purchase Ticket
- **URL**: `https://train-server-eight.vercel.app/purchaseTicket`
```json
https://train-server-eight.vercel.app/purchaseTicket
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
- **URL**: `https://train-server-eight.vercel.app/calculateFare`
```json
https://train-server-eight.vercel.app/calculateFare
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
- Ensure that your server is running on `https://train-server-eight.vercel.app` before testing the endpoints.

Feel free to copy these URLs and request bodies directly to test the API endpoints.
```

This `README.md` provides all the necessary information for someone to test your API by copying the URLs and request bodies directly.