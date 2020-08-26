import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';

declare let toastr

@Component({
    template: `
    <div>
        <h1>Upcoming event</h1>
        <hr/>
        <div class ="row">
            <div *ngFor="let event of events" class="col-md-5" >
               <event-thumbnail (click)= "handleThumbnailClick(event.name)" [event] = "event">
               </event-thumbnail>
            </div>
        </div>
    </div>
    ` 
})

export class EventsListComponent implements OnInit{

    events: any;
    //app.moduledeki provider sayesinde buraya inject edileceğini biliyor.
    constructor(private eventService : EventService
        , private toastr: ToastrService
        , private route: ActivatedRoute) {
        
    }
    //Child componentten alınan veriyi işler 
    handleEventClicked(data) {
        console.log('received', data);
    }

    ngOnInit(){
        this.events = this.route.snapshot.data['events'];
    }

    handleThumbnailClick(eventName) {
        this.toastr.success(eventName);
    }
}