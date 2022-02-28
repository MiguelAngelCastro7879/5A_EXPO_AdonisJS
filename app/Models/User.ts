import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import Encryption from '@ioc:Adonis/Core/Encryption'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public name: string
  @column()
  public username: string
  @column()
  public email: string
  @column({
    serializeAs: null,
    prepare: (value: string) => Encryption.encrypt(value),
    consume: (value: string) => Encryption.decrypt(value),
  })
  public password: string

  @column.dateTime({ autoCreate: false })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: false, autoUpdate: false })
  public updatedAt: DateTime
}
