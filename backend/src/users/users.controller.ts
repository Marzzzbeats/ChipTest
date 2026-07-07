import { Body, Controller, Get, HttpCode, Param, Post, Patch, Delete, Query, ParseIntPipe} from '@nestjs/common';
import { UsersService } from './users.service';
import type { User } from '../../types/usersType';
import { CreateUserDto } from '../common/dto/create-user.dto';
import { UpdateUserDto } from '../common/dto/update-user.dto';


@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService){}

    //routes http

    @Get()
    @HttpCode(200)
    getUsers() : User[]{
        return this.usersService.getUsers();
    }

    @Get(':id')
    @HttpCode(200)
    getUserById(@Param('id', ParseIntPipe) id : number) : User{
        return this.usersService.getUserById(id);
    }

    @Post()
    @HttpCode(201)
    create(@Body() createUser : CreateUserDto) : User {
        return this.usersService.create(createUser);
    }

    @Patch()
    @HttpCode(200)
    update(@Param('id', ParseIntPipe) id : number, @Body() updateUser: UpdateUserDto) : User{
        return this.usersService.update(id, updateUser);
    }

    @Delete(':id')
    @HttpCode(200)
    delete(@Param('id', ParseIntPipe) id : number) : string{
        return this.usersService.delete(id)
    }

    //test pour les parametres de requete
    @Get()
    @HttpCode(200)
    getQueries(
        @Query('role') role : string,
        @Query('id') id : string
    ): string{
        return `Role : ${role}, Id : ${id}`;
    }

}
