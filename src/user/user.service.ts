import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserDto, UpdateUserDto } from './user.dto';

@Injectable()
export class UserService {
    private users: User[] = [];

    findAll() {
        return this.users;
    }

    findOne(id: string) {
        return this.users.find(user => user.id === id);
    }

    create(createUserDto: CreateUserDto) {
        const newUser: User = {
            id: Date.now().toString(),
            name: createUserDto.name,
            email: createUserDto.email,
        };
        this.users.push(newUser);
        return newUser;
    }

    update(id: string, updateUserDto: UpdateUserDto) {
        const user = this.users.find(user => user.id === id);
        if (!user) {
            return null;
        }
        user.name = updateUserDto.name || user.name;
        user.email = updateUserDto.email || user.email;
        return user;
    }
}