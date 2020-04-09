import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  
  newReleases:any[]=[];

  newArtistSeek:any[]=[];

  constructor(
    private _spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    // this._spotifyService.getNewReleases()
    // .subscribe(  (data:any) => {         
    // console.log(data.albums.items); 
    // this.newReleases=data.albums.items;
    // });
  }

  searchArtist(termino:string){
    console.log(termino);
    this._spotifyService.getArtist(termino)
       .subscribe( ( data:any )=>{
        // console.log(data);//.artists.items);

        this.newArtistSeek=data;//.artists.items;
       });

  }

}
