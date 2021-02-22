import { Injectable } from '@nestjs/common';

interface User {
  id: number;
  name: string;
}

@Injectable()
export class AppService {
  #users: User[] = [
    {
      id: 1,
      name: 'wilson'
    }
  ]

  getAll(): User[] {
    return this.#users
  }

  getById(id: string): User {
    const [ user ] = this.#users.filter(user => user.id === parseInt(id))
    return user
  }

  create(body: User): User {
    let user = {
      id: this.#users.length + 1,
      ...body
    }
    this.#users.push(user)
    return user
  }

  update(id: string, body: User): void {
    const index = this.#users.findIndex(user => user.id === parseInt(id))
    const allUsers = this.#users.filter(user => user.id !== parseInt(id))
    const user = this.#users[index]
    this.#users = [
      ...allUsers,
      {
        ...user,
        ...body
      }
    ]
  }

  delete(id: string): void {
    const allUsers = this.#users.filter(user => user.id !== parseInt(id))
    this.#users = [ ...allUsers ]
  }
}
