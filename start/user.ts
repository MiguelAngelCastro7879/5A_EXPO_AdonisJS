
import Route from '@ioc:Adonis/Core/Route'


Route.get('/usuarios','UserController.index')
Route.get('/usuario/:id','UserController.show')
Route.post('/usuarios/create','UserController.store')
Route.put('/usuarios/update/:id','UserController.update')
Route.delete('/usuarios/delete/:id','UserController.destroy')
