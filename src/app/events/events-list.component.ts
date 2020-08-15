import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming event</h1>
        <hr/>
        <event-thumbnail (eventClick) = "handleEventClicked($event)"
         [event] = "event1"></event-thumbnail>
    </div>
    ` 
})

export class EventsListComponent {
    event1 = {
        id: 1, 
        name: 'Angular Connect',
        date: '15/08/2020',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/images/ng-conf.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }

    //Child componentten alınan veriyi işler 
    handleEventClicked(data) {
        console.log('received', data);
    }
}