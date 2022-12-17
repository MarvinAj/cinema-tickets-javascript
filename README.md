# cinema-tickets-javascript

# Solution
The solution is a NodeJS project.

**Solution Endpoints**
 - PurchaseTickets: [POST] {baseUrl}/tickets
    
    - Calling this endpoint with the below sample requst will return the sample response
    
 ```   
Sample API Request Body:
```
{
    "accountId": 1,
     "tickets": {
        "adult": 2,
        "child": 4,
        "infant": 1
     }
}
```
Sample API Response:
```
{
    "OrderReference": "0f517545a9501e69fcde5c7747ffe180",
    "AccountId": 1,
    "Tickets": {
        "adult": 2,
        "child": 4,
        "infant": 1,
        "TotalNumberOfTickets": 7
    },
    "TotalNumberOfSeats": 6,
    "TotalCost": 80
}
```


## Scripts

Install:
```
npm install
```

linting report:
```
npm run lint
```
Run unit tests:
```
npm test
```


Start server:
```
npm start
```

API Endpoint:
```

http://localhost:4000/tickets
```
http://localhost:3000/tickets
```
