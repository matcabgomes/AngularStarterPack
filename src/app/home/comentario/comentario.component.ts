import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comentario } from 'src/app/shared/models/comentario';
import { ComentarioService } from 'src/app/shared/service/comentario.service';
import { Meta } from 'src/app/shared/models/meta';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.scss']
})
export class ComentarioComponent implements OnInit {

  postId: string;
  comentarios: Meta<Comentario> = {} as Meta<Comentario>;
  contactForm: FormGroup;
  oComentario: Comentario = {} as Comentario;

  constructor(private route: ActivatedRoute, private comentarioService: ComentarioService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.postId = this.route.snapshot.params.id;
    this.buscarComentarios();
    this.criaFormComentario();
  }

  buscarComentarios(): void {
    this.comentarioService.getComentarioByPostId(this.postId).subscribe((comentarios: Meta<Comentario>) => {
      this.comentarios = comentarios;
    });
  }


  onSubmit(): void {
    if (this.contactForm.valid) {

      this.oComentario = this.contactForm.value;
      this.oComentario.post_id = parseInt(this.postId, 10);

      this.comentarioService.saveComentario(this.oComentario).subscribe((comentario: Comentario) => {
        this.buscarComentarios();
      });
    } else {
      console.log('Formulário inválido');
    }


  }

  criaFormComentario(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(100)])],
      body: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])]
    });
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get body() {
    return this.contactForm.get('body');
  }
}
