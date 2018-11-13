import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {AuthService} from '../auth.service';
import {Observable} from 'rxjs';
import {error} from 'util';
import {AuthHomeService} from '../auth-home.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  guestinfo: any;
  token;
  Data;
  constructor(private heroService: HeroService,
              private authHome: AuthHomeService) {
  }

  ngOnInit() {
    this.getHeroes();
    this.authHome.getToken()
    .subscribe(token => {
      this.token = token;
      this.getData(token);
    });
  }

  getData(token) {
    console.log('inside getData', token);
    this.authHome.getData(token)
    .subscribe(data => {
      this.Data = data;
      console.log(this.Data);
    });
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
