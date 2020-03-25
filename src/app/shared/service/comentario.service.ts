import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Comentario } from '../models/comentario';
import { Observable } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { Meta } from '../models/meta';

@Injectable({
  providedIn: 'root'
})

export class ComentarioService {
 
  private url: string;
  private handleError: any;
 
  constructor(private httpClient: HttpClient) {
  this.url = `${environment.server}${environment.apiUrl}comments`;
 }

 getComentarioByPostId(id: string): Observable<Meta<Comentario>> {
  return this.httpClient.get<Meta<Comentario>>(`${this.url}?post_id=${id}`)
  .pipe(
    retry(2), 
    catchError(this.handleError));
 }

 saveComentario(comentario: Comentario): Observable<Comentario>{

  return this.httpClient.post<Meta<Comentario>>(`${this.url}`,  JSON.stringify(comentario))
  .pipe(
    retry(2), 
    catchError(this.handleError));
 }
}