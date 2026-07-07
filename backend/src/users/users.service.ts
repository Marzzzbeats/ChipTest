import { Injectable } from '@nestjs/common';
import type { User } from '../../types/usersType';

@Injectable()
export class UsersService {

    //On fait le crud dans cette classe

    private users: User[] = [
        {
            id: '0',
            name: 'Simon',
            email: 'simonmarzin@gmail.com',
            role:'admin'
        },
        {
            id: '1',
            name: 'Jan-luc',
            email: 'jlmelanchon@gmail.com',
            role: 'user'
        }
    ];

    getUsers(): User[]{
        return this.users
    }

    getUserById(id: string): User{
        return this.users.find((user)=> user.id === id) as User;
    }

    create(user: User): User{
        const newId = (this.users.length + 1).toString();
        const newUser: User = {
            ...user,
            id: newId,
        }
        this.users.push(newUser);
        return newUser;
    }

    update(id: string, user: User): User{
        const index = this.users.findIndex((user) => user.id === id);
        this.users[index] = user;
        return user;
    }

    delete(id: string): string{
        this.users = this.users.filter((user) => user.id !== id); //Filtre le tableau en mettant tout sauf celui avec l'id, donc en gros il le supprime
        return 'user deleted successfully';
    }
}
