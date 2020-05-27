import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }  from  '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})

export class ArtistaComponent implements OnInit {

  artista:any={};
  loading: boolean;


  constructor(private route: ActivatedRoute,
              private spotify: SpotifyService
              ) { 

                this.loading=false;
              }


  ngOnInit(): void {

    //parametros recibidos debido al ActivatedRoute DI
    this.route.params.subscribe( params => {
      // console.log(params);
      // console.log(params['id']);      
      this.loading=true;
      this.getArtist( params['id'] );
    });
  }


  getArtist( id:string ){

    this.spotify.getArtist(id)
      .subscribe( artista =>{
          
        console.log(artista);

        this.artista=artista;
        this.loading=false;
      });

  }

}
