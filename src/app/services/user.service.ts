import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable()
export class UserService {
    private url: string;
    constructor(private http: HttpClient) {
        // console.log('servicio listo');
        this.url = 'http://jsonplaceholder.typicode.com/users';

    }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.url);
    }

    // getuser(useridx: string) {
    //     return this.users[useridx];
    // }
}

