import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Nav }from './nav/nav';
import{SecOne } from './sec-one/sec-one';
import{SecTwo }from './sec-two/sec-two';
import{SecThree}from './sec-three/sec-three'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Nav,SecOne,SecTwo,SecThree],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('labTwo');
}
