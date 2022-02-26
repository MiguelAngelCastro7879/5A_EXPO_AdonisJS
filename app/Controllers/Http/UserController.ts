import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UserController {
  public async index({response}: HttpContextContract) {

    const users = await User.all()
    response.json({
      'users':users
    })
    response.status(200)
  }

  public async store({request , response}: HttpContextContract) {

    const u = await User.create(request.body())
    response.json({
      'user':u.$attributes,
      'mensaje':'Usuario creado correctamente'
    })
    response.status(201)
  }

  public async show({params, response}: HttpContextContract) {
    try{
      const user = await User.findOrFail(params.id)
      response.json({
        'user':user
      })
      response.status(200)
    }catch(user){
      response.json({
        'mensaje':'Usuario no encontrado'
      })
      response.status(404)
    }
  }
  public async update({request , response}: HttpContextContract) {
    console.log(request.all())
  }

  public async destroy({params}: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    user.delete()
  }
}
