import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { SpotifyService } from 'src/app/services/spotify.service';
//import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
 
})
export class HomeComponent implements OnInit {

  paises:any[]=[];

  newReleases:any[]=[];
  newSongs:any[]=[];

  constructor(
    private http: HttpClient,    
    private _spotifyService: SpotifyService
                                            ){

    // console.log('constructor del home hecho');   
    // this.http.get('https://restcountries.eu/rest/v2/lang/es' )
    // .subscribe(  (resp:any)=> {         
    //      console.log(resp);
    //      this.paises= resp;
    // });
    
  }



  

  ngOnInit(): void {
    
    this._spotifyService.getNewReleases()
            .subscribe(  (data:any) => {         
            console.log(data); 
            
            this.newReleases=data;
            //this.newReleases=data.albums.items;
      });

  }




}
