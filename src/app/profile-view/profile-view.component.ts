import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { 
  GetUserService, 
  GetFavMovieService,
  EditUserService,
  GetMoviesService,
  DeleteUserService
} from '../fetch-api-data.service';
import { UserInfoUpdateComponent } from '../user-info-update/user-info-update.component';


@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {
  user: any = {};
  movies: any= [];
  favorites: any = [];
  constructor(
    public fetchApiData: GetUserService,
    public fetchApiData2: GetFavMovieService,
    public fetchApiData3: EditUserService,
    public fetchApiData4: DeleteUserService,
    public fetchApiData5: GetMoviesService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.getAUser();
  }

  getAUser(): void {
    this.fetchApiData.userInfo().subscribe((resp: any) => {
      this.user = resp;
      this.getMovies();
      console.log(this.user);
      return this.user;
    });
  }

  getMovies(): void {
    this.fetchApiData5.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      this.filterFavorites()
    });
  }

  filterFavorites(): void {
    this.favorites = this.movies.filter((movie: any) =>
    this.user.FavoriteMovies.includes(movie._id));
    return this.favorites;
  }

  openUserUpdateDialog(): void {
    this.dialog.open(UserInfoUpdateComponent, {
      width: '280px'
    });
  }

  removeFavorite(_id: string): void {
this.fetchApiData2.userFavMovie(_id).subscribe(() =>{
  this.snackBar.open(
    `Movie has been removed`, "OK", {
      duration: 2000,
    }
  );
  setTimeout(function() {
    window.location.reload();
  }, 1000);
});
  }

}