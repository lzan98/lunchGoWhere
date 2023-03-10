### `GET` /session_id/choices
---

Returns all choices of a lunch session 

Example URL: `http://localhost:4000/abcdef/choices`

Sample Response:
```
[
    {
        "id": 1,
        "choice": "KFC"
    },
    {
        "id": 2,
        "choice": "Chicken Rice"
    },
    {
        "id": 3,
        "choice": "Fish N Co"
    }
]

```

### `POST` /session_id/create
---

Creates a new lunch option for a session

Example URL: `http://localhost:4000/abcdef/create`

Sample Request:
```
{
    "choice": "Burger King"
}
```
Sample Response:
```
{
    "id": 4,
    "choice": "Burger King"
}
```

### `GET` /session_id/random
---
Returns a random lunch option from a lunch session

Example URL: `http://localhost:4000/abcdef/random`

Sample Response:
```
{
    "id": 3,
    "choice": "Fish N Co"
}
```

### `GET` /session_id/history
---
Returns all past randomly generated choice(s) for a lunch session

Example URL: `http://localhost:4000/abcdef/getHistory`

Sample Response:
```
[
    {
        "id": 95,
        "session_id": "abcdef",
        "choice": "Fish N Co"
    },
    {
        "id": 92,
        "session_id": "abcdef",
        "choice": "KFC"
    },
    {
        "id": 91,
        "session_id": "abcdef",
        "choice": "Fish N Co"
    },
    {
        "id": 89,
        "session_id": "abcdef",
        "choice": "Chicken Rice"
    }
]
```

### `POST` /session_id/update
---

Updates a randomly generated choice from a lunch session into its history

Example URL: `http://localhost:4000/abcdef/update`

Sample Request:
```
{
    "choice": "Burger King"
}
```
Sample Response:
```
{
    "id": 101,
    "session_id": "abcdef",
    "choice": "Burger King"
}
```

### `GET` /session_id/date
---

Returns the date of a lunch session

Example URL: `http://localhost:4000/ug5dn0/date`

Sample Response:
```
{
    "session_date": "2023-03-09T13:02:58.439Z"
}

```

### `GET` /session_ids
---
Returns all lunch session IDs

Example URL: `http://localhost:4000/sessionIds`

Sample Response:
```
[
    {
        "session_id": "abcdef"
    },
    {
        "session_id": "ni4yum"
    },
    {
        "session_id": "k2ys30"
    },
    {
        "session_id": "dn4kjq"
    },
    {
        "session_id": "q1w3rs"
    },
    {
        "session_id": "x6tbke"
    },
    {
        "session_id": "ug5dn0"
    },
    {
        "session_id": "drjwv2"
    },
    {
        "session_id": "wiltrv"
    }
]
```

### `POST` /create/session_id
---

Creates a new lunch session 

Example URL: `http://localhost:4000/create/q1w3rs`

Sample Response:
```
OK
```