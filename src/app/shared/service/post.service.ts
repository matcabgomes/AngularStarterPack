import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Meta } from '../models/meta';
import { Post } from '../models/post';
 
@Injectable({
 providedIn: 'root'
})

export class PostService {
 
  private url: string;
  private handleError: any;
 
  constructor(private httpClient: HttpClient) {
  this.url = `${environment.server}${environment.apiUrl}posts`;
 }
 
  getPosts(): Observable<Meta<Post>> {
  return this.httpClient.get<Meta<Post>>(this.url)
  .pipe(retry(2), catchError(this.handleError));
 
 }
 
}