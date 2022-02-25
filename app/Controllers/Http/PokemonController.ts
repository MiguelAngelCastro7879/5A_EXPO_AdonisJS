import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PokemonController {

    public async index({ request, response }: HttpContextContract) {
        request.toJSON
        response.send        

    }
}
