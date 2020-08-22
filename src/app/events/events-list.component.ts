import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

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
       
         <button class = "btn btn-primary" (click)= "thumbnail.logFoo()">
             Log me something
         </button>
    </div>
    ` 
})

export class EventsListComponent implements OnInit{

    events: any[];
    //app.moduledeki provider sayesinde buraya inject edileceğini biliyor.
    constructor(private eventService : EventService, private toastr: ToastrService) {
        
    }
    //Child componentten alınan veriyi işler 
    handleEventClicked(data) {
        console.log('received', data);
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.events = this.eventService.getEvents();
    }

    handleThumbnailClick(eventName) {
        this.toastr.success(eventName);
    }
}