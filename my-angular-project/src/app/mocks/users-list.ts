import { Gender, User } from "../models/user.interface";

export const users: User[] = [
    {
        firstName: 'Alexey',
        lastName: 'Alexeev',
        age: 23,
        gender: Gender.Male,
        activated: false
    },
    {
        firstName: 'Irina',
        lastName: 'Shurupkina',
        age: 47,
        gender: Gender.Female,
        activated: true
    },
    {
        firstName: 'Petr',
        lastName: 'Petrov',
        age: 16,
        gender: Gender.Male,
        activated: false
    },
]