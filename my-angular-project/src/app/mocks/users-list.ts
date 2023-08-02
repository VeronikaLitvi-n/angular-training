import { Gender, User } from "../models/user.interface";

export const users: User[] = [
    {
        firstName: 'Alexey',
        lastName: 'Alexeev',
        age: 23,
        gender: Gender.Male,
        activated: false,
        dateOfCreation: new Date(2019, 10, 30), 
        salary: 500
    },
    {
        firstName: 'Irina',
        lastName: 'Shurupkina',
        age: 47,
        gender: Gender.Female,
        activated: true,
        dateOfCreation: new Date(2020, 5, 15), 
        salary: 1000
    },
    {
        firstName: 'Petr',
        lastName: 'Petrov',
        age: 16,
        gender: Gender.Male,
        activated: false,
        dateOfCreation: new Date(2016, 0, 1), 
        salary: 200
    },
]