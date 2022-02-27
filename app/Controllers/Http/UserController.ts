import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UserController {
  public async index({response}: HttpContextContract) {

    const users = await User.all()
    response.status(200)
    response.send({
      'users':users
    })
  }

  public async store({request , response}: HttpContextContract) {

    const u = await User.create(request.body())

    response.status(201)
    response.send({
      'user':u.$attributes,
      'mensaje':'Usuario creado correctamente'
    })
  }

  public async show({params, response}: HttpContextContract) {
    try{
      const user = await User.findOrFail(params.id)
      response.status(200)
      response.send({
        'user':user
      })
    }catch(user){
      response.status(404)
      response.send({
        'mensaje':'Usuario no encontrado'
      })
    }
  }
  public async update({request , response}: HttpContextContract) {
    try{
      const user = await User.findOrFail(request.params().id)
      user.name = request.input('name')
      user.username = request.input('username')
      user.email = request.input('email')
      user.birthday = request.input('birthday')
      user.save()
      response.status(200)
      response.send({
        'mensaje':'Usuario Actualizado',
        'user':user
      })
    }catch(user){
      response.status(404)
      response.send({
        'mensaje':'Usuario no encontrado'
      })
    }
  }

  public async destroy({params , response}: HttpContextContract) {
    try {
      const user = await User.findOrFail(params.id)
      const usr_tmp = user
      user.delete()
      response.status(200)
      response.send({
        'mensaje':'Usuario Eliminado',
        'user':usr_tmp
      })
    } catch (user) {
      response.status(404)
      response.send({
        'mensaje':'Usuario no encontrado'
      })

    }
  }
}
