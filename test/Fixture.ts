/// <reference path="../node_modules/vineyard-ground/ground.d.ts"/>
/// <reference path="../node_modules/vineyard-plantlab/plantlab.d.ts"/>
declare function require(name:string):any;

require('when/monitor/console');
import PlantLab = require('vineyard-plantlab')
var when = require('when')
var pipeline = require('when/pipeline')

export class Fixture extends PlantLab.Fixture {
  users = {}

  populate():Promise {
    var users = [
      {
        id: 2,
        name: 'anonymous',
        password: ''
      },
      {
        id: 7,
        name: 'cj',
        password: 'pass'
      },
      {
        id: 9,
        name: 'froggy',
        password: 'pass'
      },
      {
        id: 12,
        name: 'hero',
        password: 'pass'
      }
    ]

    this.users = {}
    for (var i in users) {
      var user = users[i]
      user['username'] = user.name
      this.users[user.name] = user
    }

    var inserts = users.map((user)=> this.insert_object('user', user))

    var admin = {
      id: 1,
      name: 'admin'
    }

    var member = {
      id: 2,
      name: 'member'
    }

    inserts.push(this.insert_object('role', {id: 1, name: "admin"}))
    inserts.push(this.add_role('cj', admin))

    inserts.push(this.insert_object('role', {id: 2, name: "member"}))
    inserts.push(this.add_role('froggy', member))
    inserts.push(this.add_role('hero', member))

    return when.all(inserts)
  }

  add_role(user_name, role):Promise {
    var user = this.users[user_name]
    user.roles = user.roles || []
    user.roles.push(role)
    return this.ground.db.query("INSERT INTO roles_users (role, user) VALUES (?, ?)", [role.id, user.id])
  }

}
