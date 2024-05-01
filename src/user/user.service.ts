import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "firstName": "Leanne ",
            "lastName": "Leanne Graham",
            "email": "Sincere@april.biz",
            "position": "cadet",
        },
        {
            "id": 2,
            "firstName": "Ervin Howell",
            "lastName": "Ervin Howell",
            "email": "Shanna@melissa.tv",
            "position": "oficer",
        },
        {
            "id": 3,
            "firstName": "Clementine Bauch",
            "lastName": "Clementine Bauch",
            "email": "Nathan@yesenia.net",
            "position": "scienceOfficer",
        },
        {
            "id": 4,
            "firstName": "Patricia Lebsack",
            "lastName": "Patricia Lebsack",
            "email": "Julianne.OConner@kory.org",
            "position": "science",
        },
        {
            "id": 5,
            "firstName": "Chelsey Dietrich",
            "lastName": "Chelsey Dietrich",
            "email": "Lucio_Hettinger@annie.ca",
            "position": "admin",
        }]

    findAll(position?: 'cadet' | 'oficer' | 'scienceOfficer' | 'science' | 'admin') {
        if (position) {
            const positionArray = this.users.filter(user => user.position === position)
            if (positionArray.length === 0) throw new NotFoundException(`User with role ${position} not found`)
            return positionArray
        }
        return this.users
    }

    findOne(id: number) {
        const user = this.users.find(user => user.id === id)
        if (!user) throw new NotFoundException(`User with id ${id} not found`)
        return user
    }

    create(createUserDto: CreateUserDto) {
        const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id)
        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...createUserDto
        }
        this.users.push(newUser)
        return newUser
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        this.users = this.users.map(
            user => {
                if (user.id === id) {
                    return { ...user, ...updateUserDto }
                }
                return user
            })

        return this.findOne(id)
    }

    delete(id: number) {
        const removedUser = this.findOne(id)

        this.users = this.users.filter(user => user.id !== id)

        return removedUser
    }


}
