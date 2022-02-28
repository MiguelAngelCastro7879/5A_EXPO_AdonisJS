import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class UserController {
  public async index({response}: HttpContextContract) {

    const users = await User.all()
    response.status(200)
    response.send({
      'users':users
    })
  }

  public async store({request , response}: HttpContextContract) {

    const newUserSchema = schema.create({
      name: schema.string({trim:true}),

      username: schema.string({}, [
          rules.alpha({
            allow: ['space', 'underscore', 'dash']
          })
        ]),

        email: schema.string({}, [
          rules.email({
            sanitize: true,
            domainSpecificValidation: true,
          })
        ]),

        password: schema.string({}, [
          rules.confirmed('password_confirmation')
        ]),
    });

    try {
      const payload = await request.validate({schema: newUserSchema,});
      const u = await User.create(payload);
      response.status(201)
      response.send({
        'user':u.$attributes,
        'mensaje':'Usuario creado correctamente'
      })
    } catch (error) {
      response.badRequest(error.messages)
      response.send({
        'mensaje':'Usuario no encontrado'
      })
    }
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

    const newUserSchema = schema.create({
      name: schema.string({trim:true}),

      username: schema.string({}, [
          rules.alpha({
            allow: ['space', 'underscore', 'dash']
          })
        ]),

        email: schema.string({}, [
          rules.email({
            sanitize: true,
            domainSpecificValidation: true,
          })
        ])
    });

    try {
      const payload = await request.validate({schema: newUserSchema,});
      try{
        const user = await User.findOrFail(request.params().id)
        user.name = request.input('name')
        user.username = request.input('username')
        user.email = request.input('email')
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
    }catch(error){
      response.badRequest(error.messages)
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
