import { Injectable } from '@nestjs/common';
import type { User } from '../../types/usersType';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

    //On fait le crud dans cette classe

    private users: User[] = [
        {
            id: 0,
            name: 'Simon',
            email: 'simonmarzin@gmail.com',
            role:'admin'
        },
        {
            id: 1,
            name: 'Jan-luc',
            email: 'jlmelanchon@gmail.com',
            role: 'user'
        }
    ];

    getUsers(): User[]{
        return this.users
    }

    getUserById(id: number): User{
        return this.users.find((user)=> user.id === id) as User;
    }

    create(user: CreateUserDto): User{
        const newId = this.users.length + 1;
        const newUser: User = {
            ...user,
            id: newId,
        }
        this.users.push(newUser);
        return newUser;
    }

    update(id: number, user: UpdateUserDto): User{
        const index = this.users.findIndex((user) => user.id === id);
        this.users[index] = {...user, id};
        return this.users[index];
    }

    delete(id: number): string{
        this.users = this.users.filter((user) => user.id !== id); //Filtre le tableau en mettant tout sauf celui avec l'id, donc en gros il le supprime
        return 'user deleted successfully';
    }
}
