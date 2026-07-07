import { Body, Controller, Get, HttpCode, Param, Post, Patch, Delete, Query} from '@nestjs/common';
import { UsersService } from './users.service';
import type { User } from '../../types/usersType';


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
    getUserById(@Param('id') id : string) : User{
        return this.usersService.getUserById(id);
    }

    @Post()
    @HttpCode(201)
    create(@Body() user : User) : User {
        return this.usersService.create(user);
    }

    @Patch()
    @HttpCode(200)
    update(@Param('id') id : string, @Body() user: User) : User{
        return this.usersService.update(id, user);
    }

    @Delete(':id')
    @HttpCode(200)
    delete(@Param('id') id : string) : string{
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
