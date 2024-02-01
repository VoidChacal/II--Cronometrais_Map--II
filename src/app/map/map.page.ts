import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions } from '@ionic-native/google-maps/ngx';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit, AfterViewInit {

  map!: GoogleMap;

  constructor(private platform: Platform) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.platform.ready().then(() => {
      this.loadMap();
    });
  }

  loadMap(){
    const mapOptions: GoogleMapOptions = {
      camera: {
        target:{
          lat: 37.7749,
          lng: -122.4194,
        },
        zoom: 12,
      },
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log('Map is ready!');
    });
  }

}
