import { Injectable, NotFoundException } from '@nestjs/common';
import type { User } from '../../types/usersType';
import { CreateUserDto } from '../common/dto/create-user.dto';
import { UpdateUserDto } from '../common/dto/update-user.dto';

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
        const usrs = this.users
        if(!usrs){
            throw new NotFoundException('User list is empty');
        }
        return usrs;
    }

    getUserById(id: number): User{
        const user = this.users.find((user)=> user.id === id);
        if(!user){
            throw new NotFoundException('User not found')
        }
        return user;
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
        if(index === -1){
            throw new NotFoundException('user not found');
        }
        this.users[index] = {...user, id};
        return this.users[index];
    }

    delete(id: number): string{
        const lgt = this.users.length;
        this.users = this.users.filter((user) => user.id !== id); //Filtre le tableau en mettant tout sauf celui avec l'id, donc en gros il le supprime
        if(this.users.length === lgt){
            throw new NotFoundException('user not found');
        }
        return 'user deleted successfully';
    }
}
