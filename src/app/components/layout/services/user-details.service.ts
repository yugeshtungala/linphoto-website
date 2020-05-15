import { Injectable } from '@angular/core';
//imporyng Userdatatype from classes/userdatatype
import { Userdatatype } from '../classes/userdatatype';
//imporyng HttpClient ,HttpHeaders from angular/common/http
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
//importing observable from rxjs
import { Observable, throwError } from 'rxjs';
//importing catch error rxjs/operators
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  //server data link
  private apiServer = "http://localhost:3000/user";
  //impoting http client
  constructor(private http: HttpClient) { }

  errorData;//variable for error message
  //it tells a server that am sending a content in json format
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  //  getting all the user data 
  getUserLists(): Observable<Userdatatype[]> {
    return this.http.get<Userdatatype[]>(this.apiServer).pipe(catchError(this.errorHandling))

  }
  //  getting single user data 
  getUserId(id: number): Observable<Userdatatype> {
    return this.http.get<Userdatatype>(`${this.apiServer}/${id}`)
  }
  //crating new data (adding new user)

  AddUserlist(user: Userdatatype): Observable<Userdatatype> {
    return this.http.post<Userdatatype>(this.apiServer, user, this.httpOptions)
  }
  //updating data
  update(id: number, userdata: any) {
    return this.http.put<any>(`${this.apiServer}/${id}`, userdata, this.httpOptions)
  }
  //deleting data
  deleteUser(id: number): Observable<Userdatatype> {
    return this.http.delete<Userdatatype>(`${this.apiServer}/${id}`)
  }
  //handling errors
  private errorHandling(errorMessage: HttpErrorResponse) {
    if (errorMessage.error instanceof ErrorEvent) {
      this.errorData('client side error: ', errorMessage.error.message);
    } else {
      this.errorData('server side: ', errorMessage)
    }
    return throwError('server problem error')

  }
  //handle error 2nd type
  private handleerror(err) {
    return throwError(err.message || 'server error')
  }

}
