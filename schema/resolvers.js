 const { users } = require('../fakedata')

const resolvers = {
  Query: {
    getAllUsers() {
      // where data gets fetched and returned
      return users
    }
  },

  Mutation: {
    createUser(parent, args) {
      const newUser = args
      users.push(newUser)
      return newUser
    }
  }
}

module.exports = { resolvers }