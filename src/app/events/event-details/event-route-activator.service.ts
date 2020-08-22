import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { EventService } from '../shared/event.service';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class EventRouteActivator implements CanActivate{
    constructor(private eventService: EventService,
        private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot) {
       const eventExist = !!this.eventService.getEvent(+route.params['id']);//+ casting operator
       if (!eventExist) {
           this.router.navigate(['/404']);
       }
       return eventExist;
    }
}