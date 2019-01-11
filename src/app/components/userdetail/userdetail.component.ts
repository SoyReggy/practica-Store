import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { PostService } from 'src/app/services/post.service';
import { User } from '../../models/user';
import { Post } from '../../models/post';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent {

  user: any = {};
  post: Post[];
  post2: Post[];

  constructor(private activatedRoute: ActivatedRoute,
              private _userService: UserService,
              private _postService: PostService) {

    this.activatedRoute.params.subscribe( params => {
      console.log( params['userid'] );
      // this.user = this._userService.getuser( params['userid'] );
      // this.post = this._postService.getPostById(parseInt(params['userid']));
      // console.log('filtro: ', this.post);
      // console.log('recibiendo datos');
    });
 {
    }
   }


}
