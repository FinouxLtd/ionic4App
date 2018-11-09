import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment,
  Geocoder,
  GeocoderRequest,
  GeocoderResult,
  BaseArrayClass,
  ILatLng,
  Circle
} from '@ionic-native/google-maps/ngx';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { setTimeout } from 'timers';
declare var google: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('directionsPanel') directionsPanel: ElementRef;
  map: GoogleMap;
  constructor(private geolocation: Geolocation) { }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.loadMap(resp.coords.latitude, resp.coords.longitude);

     }).catch((error) => {
       console.log('Error getting location', error);
     });
     const watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      this.loadMap(data.coords.latitude, data.coords.longitude);
     });
  }
  loadMap(lat, long) {

    // This code is necessary for browser
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyCrzZkBKWBu8Ld3q32kKu89zmfOUiNm6PY',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyCrzZkBKWBu8Ld3q32kKu89zmfOUiNm6PY'
    });

    const mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: lat,
           lng: long
         },
         zoom: 18,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);
    // Add circle
    const GOOGLE: ILatLng = {"lat" : lat, "lng" : long};
    const circle: Circle = this.map.addCircleSync({
      'center': GOOGLE,
      'radius': 10,
      'strokeColor' : '#AA00FF',
      'strokeWidth': 5,
      'fillColor' : '#880000'
    });

    this.map.moveCamera({
      target: circle.getBounds()
    });
   const a = [
     {
      lat: lat,
      lng: long
     },
     {
      lat: 15.299326,
      lng: 74.123993
     }
   ];
   for (let i = 0; i < a.length; i++) {
    const marker: Marker = this.map.addMarkerSync(
      {
      title: 'Ionic',
      icon: 'red',
      animation: 'DROP',
      position: {
        lat: a[i].lat,
        lng: a[i].lng
      }
     }
    );
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe((params:any[]) => {
      const latLng: ILatLng = params[0];
      Geocoder.geocode({
        "position": latLng
      }).then((results: GeocoderResult[]) => {
        if (results.length == 0) {
          return null;
        }
        const ad = results[0].extra.lines[0];
        marker.setTitle(ad);
        marker.showInfoWindow();
      });
      });
    }

  }
}
