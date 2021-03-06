import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';


// Declaring the api url that will provide data for the client app
const apiUrl = 'https://myflix1-0.herokuapp.com/'
@Injectable({
  providedIn: 'root'
})
// User registration 
export class UserRegistrationService {
  // Inject the HttpClient module to the constructor params
  // this will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) { 
  }

  // Making the api call for the user registration endpoint
  public userRegistration(userData: any): Observable<any> {
    console.log(userData);
    return this.http.post(apiUrl + 'users', userData).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
      'Something bad happened');
  }
}

// Gets all movies
@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {
  constructor(private http: HttpClient) {
  }

  getAllMovies(): Observable<any> {
      const token = localStorage.getItem('token');
      return this.http.get(apiUrl + 'movies', {headers: new HttpHeaders(
        {
          Authorization: 'Bearer ' + token,
        })}).pipe(
          map(this.extractResponseData),
          catchError(this.handleError)
        );
    }
    // non-typed response extraction
    private extractResponseData(res: Response | Object): any {
      const body = res;
      return body || { };
    }

    private handleError(error: HttpErrorResponse): any{
      if (error.error instanceof ErrorEvent) {
        console.error('Some error occurred:', error.error.message);
      } else {
        console.error(
          `Error Status code ${error.status}, ` +
          `Error body is: ${error.error}`)
      }
      return throwError(
        'Something bad happened');
    }
}

// get user to login
@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  constructor(private http: HttpClient) {
  }

  public userLogin(userData: any): Observable<any> {
    return this.http.post(apiUrl + 'login', userData).pipe(
        catchError(this.handleError)
      );
  }
  private handleError(error: HttpErrorResponse): any{
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`)
    }
    return throwError(
      'Something bad happened');
  }
}
// gets one movie
@Injectable({
  providedIn: 'root'
})
export class OneMovieService {
  constructor(private http: HttpClient) {
  }

  getOneMovie(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'movies/:Title', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }
  // non-typed response extraction
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
}
private handleError(error: HttpErrorResponse): any{
  if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
  } else {
    console.error(
      `Error Status code ${error.status}, ` +
      `Error body is: ${error.error}`)
  }
  return throwError(
    'Something bad happened');
  }
}
// Gets director 
@Injectable({
  providedIn: 'root'
})
export class GetDirectorService {
  constructor(private http: HttpClient) {
  }

  getDirector(): Observable<any> {
    const token = localStorage.getItem('item');
    return this.http.get(apiUrl + 'movies/:Director', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }
  // non-typed response extraction
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
}
  private handleError(error: HttpErrorResponse): any{
  if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
  } else {
    console.error(
      `Error Status code ${error.status}, ` +
      `Error body is: ${error.error}`)
  }
  return throwError(
    'Something bad happened');
  }

}
// Gets genre title
@Injectable({
  providedIn: 'root'
})
export class GetGenreService {
  constructor(private http: HttpClient) {
  }

  getGenre(): Observable<any> {
    const token = localStorage.getItem('item');
    return this.http.get(apiUrl + 'movies/:Genre', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }
   // non-typed response extraction
   private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
}
  private handleError(error: HttpErrorResponse): any{
  if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
  } else {
    console.error(
      `Error Status code ${error.status}, ` +
      `Error body is: ${error.error}`)
  }
  return throwError(
    'Something bad happened');
  }
}
// get user info
@Injectable({
  providedIn: 'root'
})
export class GetUserService {
  constructor(private http: HttpClient) {
  }
// Fix this little part
  userInfo(): Observable<any> {
    const token = localStorage.getItem('item');
    const user = localStorage.getItem('user');
    return this.http.get(apiUrl + `user/${user}`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }
  // non-typed response extraction
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
}
  private handleError(error: HttpErrorResponse): any{
  if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
  } else {
    console.error(
      `Error Status code ${error.status}, ` +
      `Error body is: ${error.error}`)
  }
  return throwError(
    'Something bad happened');
  }
}
// Adds user favorite movie
@Injectable({
  providedIn: 'root'
})
export class AddMovieService {
  constructor(private http: HttpClient) {
  }

  addFavMovie(_id: string): Observable<any> {
    const token = localStorage.getItem('item');
    const user = localStorage.getItem('user');
    return this.http.post(apiUrl + `users/${user}/movies/${_id}`, _id, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }
  // non-typed response extraction
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
}
  private handleError(error: HttpErrorResponse): any{
  if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
  } else {
    console.error(
      `Error Status code ${error.status}, ` +
      `Error body is: ${error.error}`)
  }
  return throwError(
    'Something bad happened');
  }
}



// Deletes user favorite movies
@Injectable({
  providedIn: 'root'
})
export class GetFavMovieService {
  constructor(private http: HttpClient) {
  }

  userFavMovie(_id: string): Observable<any> {
    const token = localStorage.getItem('item');
    const user = localStorage.getItem('user');
    return this.http.delete(apiUrl + `users/${user}/movies/${_id}`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }
  // non-typed response extraction
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
}
  private handleError(error: HttpErrorResponse): any{
  if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
  } else {
    console.error(
      `Error Status code ${error.status}, ` +
      `Error body is: ${error.error}`)
  }
  return throwError(
    'Something bad happened');
  }
}
// Edits user info
@Injectable({
  providedIn: 'root'
})
export class EditUserService {
  constructor(private http: HttpClient) {
  }

  userEditInfo(userDetails: any): Observable<any> {
    const token = localStorage.getItem('item');
    const user = localStorage.getItem('user');
    console.log(userDetails);
    return this.http.put(apiUrl + `user/${user}`, userDetails,  {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }
  // non-typed response extraction
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
}
  private handleError(error: HttpErrorResponse): any{
  if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
  } else {
    console.error(
      `Error Status code ${error.status}, ` +
      `Error body is: ${error.error}`)
  }
  return throwError(
    'Something bad happened');
  }
}
// Deletes user
@Injectable({
  providedIn: 'root'
})
export class DeleteUserService {
  constructor(private http: HttpClient){
  }
  userDelete(username: string): Observable<any> {
    const token = localStorage.getItem('item');
    const user = localStorage.getItem('user');
    return this.http.delete(apiUrl + `users/${user}`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }
   // non-typed response extraction
   private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
}
  private handleError(error: HttpErrorResponse): any{
  if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
  } else {
    console.error(
      `Error Status code ${error.status}, ` +
      `Error body is: ${error.error}`)
  }
  return throwError(
    'Something bad happened');
  }
}
