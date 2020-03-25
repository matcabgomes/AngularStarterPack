import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/service/post.service';
import { Post } from '../shared/models/post';
import { Meta } from '../shared/models/meta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Meta<Post> = {} as Meta<Post>;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.buscarPosts();
  }

  buscarPosts(): void{
    this.postService.getPosts().subscribe((posts: Meta<Post>) => {
      this.posts = posts;
    });
  }

}
