## Learning GraphQL
Resource: 

- Video: GraphQL Tutorial For Beginners - Apollo Server Express Tutorial, https://youtu.be/xCzm1bbOpfw

Vocabulary:

- typeDefs: 
  
    (1) defines fields on a database record (like the schema)
    
    (2) queries: functions that retrieve data - GET
    
    (3) mutations: functions to modify data - POST/DELETE/UPDATE
    
- resolvers: 

    (1) function definitions where we make db calls

Queries in Apollo Sandbox

```
query GetAllUsers {
  getAllUsers {
    email
  }
}
```

Mutations 
```
mutation {
 createUser (name: "Sam", email: "mike@email.com", age: 30) {
   name
   email
   age
 }
}
```