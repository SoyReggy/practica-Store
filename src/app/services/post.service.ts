import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';


@Injectable()
export class PostService {
    private url: string;

    constructor(private http: HttpClient) {
      this.url = 'http://jsonplaceholder.typicode.com/posts';
    }

    getPosts(): Observable<Post[]> {
      return this.http.get<Post[]>(this.url);
    }

  }
    // getPostById(id: number): Post[] {
    //     return this.posts.filter(postData => postData.userId === id + 1);
    // }
