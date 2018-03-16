import {Component, OnInit} from '@angular/core';
import {Programme} from '../programmes';
import {PROGRAMMES} from '../dummy-programmes';

@Component({
    selector:'Login',
    templateUrl:'./admin.component.html',
    styleUrls:['./admin.component.css']
})
export class ProgrammeComponent implements OnInit{
    programmes=PROGRAMMES;
    selectedProgramme:Programme;

    constructor(){}

    ngOnInit(){

    }

    

}