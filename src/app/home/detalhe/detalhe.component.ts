import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/shared/service/post.service';
import { ComentarioService } from 'src/app/shared/service/comentario.service';
import { Post } from 'src/app/shared/models/post';
import { Comentario } from 'src/app/shared/models/comentario';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss']
})
export class DetalheComponent implements OnInit {

  postId: string;
  post: Post = {} as Post;

  constructor(private route: ActivatedRoute, private postService: PostService, private comentarioService: ComentarioService) { }

  ngOnInit(): void {
    this.postId = this.route.snapshot.params.id;
    this.buscarPost();
  }

  buscarPost(): void {
    this.postService.getPostById(this.postId).subscribe((post: Post) => {
      this.post = post;
    });
  }
}
