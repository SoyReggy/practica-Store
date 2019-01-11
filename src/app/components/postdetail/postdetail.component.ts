import { Component } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css']
})
export class PostdetailComponent {

  user: any = {};
  post: Post[];
  comments: Comment[];

  constructor(private activatedRoute: ActivatedRoute,
              private _userService: UserService,
              private _commentsService: CommentsService,
              private _postService: PostService) {

      // // this.activatedRoute.params.subscribe( params => {
      // //   console.log( params ['postid'] );
      // //   this.user = this._userService.getuser( params ['postid']);
      // //   this.post = this._postService.getPostById( params ['postid']);
      // //   this.comments = this._commentsService.getCommentsById(parseInt(params['postid']));
      // //   console.log(this.comments);

      // });
    }


}
