import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comentario } from 'src/app/shared/models/comentario';
import { ComentarioService } from 'src/app/shared/service/comentario.service';
import { Meta } from 'src/app/shared/models/meta';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.scss']
})
export class ComentarioComponent implements OnInit {

  postId: string;
  comentarios: Meta<Comentario> = {} as Meta<Comentario>;

  constructor(private route: ActivatedRoute, private comentarioService: ComentarioService) { }

  ngOnInit(): void {
    this.postId = this.route.snapshot.params.id;
    this.buscarComentarios();
  }

  buscarComentarios(): void {
    this.comentarioService.getComentarioByPostId(this.postId).subscribe((comentarios: Meta<Comentario>) => {
      this.comentarios = comentarios;
      console.log(comentarios);
    });
  }
}
