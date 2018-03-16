import {Component, OnInit} from '@angular/core';
import {Programme} from '../programmes';
import {PROGRAMMES} from '../dummy-programmes';

@Component({
    selector:'login',
    templateUrl:'./admin.component.html',
    styleUrls:['./admin.component.css']
})
export class AdminComponent implements OnInit{
    programmes=PROGRAMMES;
    selectedProgramme:Programme;

    constructor(){}

    ngOnInit(){

    }

    

}