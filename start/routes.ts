/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
// import './user'

Route.get('/', async () => {
  return { hello: 'world' }
})

// Route.get('/usuarios','UserController.index')
// Route.get('/usuario/:id','UserController.show')
// Route.post('/usuarios/create','UserController.store')
// Route.put('/usuarios/update/:id','UserController.update')
// Route.delete('/usuarios/delete/:id','UserController.destroy')


// Route.get('/rutaNormal/:nombre',({params})=>{
//   console.log("Hola "+params.nombre)
// }).where('nombre', /^[a-z]+$/).prefix('/api')

// Route.get('/usuario/1','UserController.show')
// Route.get('/usuario/2','UserController.show')
// Route.get('/usuario/3','UserController.show')
// Route.get('/usuario/4','UserController.show')
// Route.get('/usuario/5','UserController.show')
// Route.get('/usuario/6','UserController.show')
// Route.get('/usuario/7','UserController.show')
// Route.get('/usuario/8','UserController.show')
// Route.get('/usuario/9','UserController.show')
// Route.group(()=>{
//   Route.get('/1','UserController.show')
//   Route.get('/2','UserController.show')
//   Route.get('/3','UserController.show')
//   Route.get('/4','UserController.show')
//   Route.get('/5','UserController.show')
//   Route.get('/6','UserController.show')
//   Route.get('/7','UserController.show')
//   Route.get('/8','UserController.show')
//   Route.get('/9','UserController.show')
// }).prefix('usuario')


Route.resource('usuario', 'UserController').apiOnly()
