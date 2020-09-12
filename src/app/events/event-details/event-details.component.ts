import { Component, OnInit} from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
       .container { padding-left: 20px; padding-right: 20px;}
       .event-image { height: 100px;}
    `
    ]
})

export class EventDetailsComponent  implements OnInit{
    event: IEvent;

    //Inject event service
    constructor(private eventService: EventService, 
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      this.event = this.eventService.getEvent(
          +this.route.snapshot.params['id']
      );
        
    }
   
}