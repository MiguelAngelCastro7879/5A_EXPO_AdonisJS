import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PokemonController {
  public async index({response}: HttpContextContract) {}

  public async store({request , response}: HttpContextContract) {
    console.log(request.all())

  }

  public async show({request, response}: HttpContextContract) {
    request.body
  }
  public async update({request , response}: HttpContextContract) {
    request.body
  }

  public async destroy({request , response}: HttpContextContract) {
    request.body
  }
}
