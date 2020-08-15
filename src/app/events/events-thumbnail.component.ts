import { Component, Input, Output, EventEmitter} from '@angular/core';

//Child Component in EventList component
@Component({
    selector: 'event-thumbnail',
    template: `   
    <div class= "well hoverwell thumbnail">
      <h2> {{event.name}}</h2>
      <div> Date: {{event.date}} </div>
      <div> Time: {{event.time}} </div>
      <div> Price: {{event.price}} </div>
      <div> 
         <span> Location: {{event.location.address}}</span>
         <span>&nbsp;</span>
         <span> {{event.location.city}}, {{event.location.country}}</span>
      </div>
    </div>`
})

export class EventThumbNailComponent {
    @Input() event: any //Parentten childa veri gönderimi

    someProperty : any = 'somePropery'
    logFoo() {
        console.log('foo')
    }

}
