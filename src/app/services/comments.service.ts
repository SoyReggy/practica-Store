import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://jsonplaceholder.typicode.com/comments';
   }

   getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.url);
   }

  // getCommentsById(postid: number): Comment[] {
  //   return this.comments.filter(commentData => commentData.postId === postid + 1);
  // }
}
