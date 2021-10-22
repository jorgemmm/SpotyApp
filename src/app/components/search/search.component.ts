import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  
  newReleases:any[]=[];

  Artists:any[]=[];
  loading: boolean;

  
  constructor(
    private _spotifyService: SpotifyService
  ) { 

    
  }

  ngOnInit(): void {
    
    // this._spotifyService.getNewReleases()
    // .subscribe(  (data:any) => {         
    // console.log(data.albums.items); 
    // this.newReleases=data.albums.items;
    // });
  }

  searchArtist(termino:string){
    
    if(termino.length>2){

        this.loading=true;
        console.log(termino);
        this._spotifyService.getArtists(termino)
          .subscribe( ( data:any )=>{
            
            console.log(data);//.artists.items);
    
            this.Artists=data;//.artists.items;
            this.loading=false;
          });
    }
   
      
      
      
  }

}
