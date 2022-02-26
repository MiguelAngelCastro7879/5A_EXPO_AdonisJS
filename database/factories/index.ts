import User from 'App/Models/User'
import Factory from '@ioc:Adonis/Lucid/Factory'

export const UserFactory = Factory
  .define(User, ({ faker }) => {
    return {
      name: faker.name.firstName(),
      username:faker.internet.userName(),
      email:faker.internet.email(),
      password:faker.internet.password(),
      birthday:faker.date.between("1900-01-01", "2022-01-01"),
    }
  })
  .build()
