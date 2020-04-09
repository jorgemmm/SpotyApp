import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { promise } from 'protractor';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

cargando= true;
searching=true;
ArtistFilter:any[]=[];

  constructor(
    private http: HttpClient,
  ) { 
    console.log('Spotify service listo');
    //this.getToken();
  }

 
   //upte mediante postman o mediante una petición post
   token:string='BQC-2jlCQ7KNV1DmZsmRLooJZJy2BV6e-lxMh1PWaTMqnUoFLyDtpsVxb5uU9OqG0M30-RirE0ggTlEYMxQ';

   spotifyurl:string='https://api.spotify.com'



   bodyfortoken:bodyType = {
     grant_type:'client_credentials',
     client_id: '02baaae616e84d1b9f57ef17238063d8',
     client_secret: '1b5a87de5e3747d6a958e406d1c17ba4'
   }


  getToken(){
       
        // return new Promise ( (resolve, reject)=>{
        //     this.http.post('https://accounts.spotify.com/api/token', this.bodyfortoken)
        //     .subscribe(  (data:any)=> {         
                
        //         console.log(data); 

        //         resolve();
        //     });
        // });
        
  }




  getNewReleases(){
  
     const headers= new HttpHeaders({
      //'Authorization':'Bearer BQD3hHSQTdBShhhAcXYxi_led8cgicoaq0QhvAnJiYbXVtEFR5qsz696I7H4AkJBF1qGG5yyAOqMwdzJFhs' //token expira alas 3 horas
      'Authorization':`Bearer ${ this.token }`
                      
    });
   
       //return this.http.get('https://api.spotify.com/v1/browse/new-releases' ,{headers});                    
       return this.http.get(`${ this.spotifyurl }/v1/browse/new-releases` ,{headers})
        
         .pipe( map ( data =>  data['albums'].items));
           
          //return data.albums.items;
         
    }


 getArtist(termino:string){

  const headers= new HttpHeaders({
    //'Authorization':'Bearer BQDDj8Ruabm7hyzrG5z75JeJGhpUqnMJUofj5C5nSxCeqJcVOEtUz_VKNUkmIBYEdRrvU8m6f1oDvfROYg4' //token expira alas 3 horas
    'Authorization':`Bearer ${ this.token }`
  });
    //return this.http.get(`${ this.spotifyurl }/v1/search?q=${ termino }&type=artist&limit=15` ,{headers});
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15` ,{headers})
    .pipe( map ( data => data['artists'].items ));   
      
 
  }

}

export interface bodyType{
  grant_type:string;
  client_id:string;
  client_secret;


}
