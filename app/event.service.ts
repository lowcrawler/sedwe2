import { Injectable } from '@angular/core';
import { EVENTS } from './mock-events';


@Injectable()
export class EventService  {

	//private var events;  //TODO implement when instantiation and/or pre-fetch?


	getEvents() { // returns all events that pass (do not match) the filter. If filter is null, return all events)
	//TODO define filter (keep expectations in check, don't over engineer)
	console.log('getEvents');
	console.log(""+EVENTS);
	//if (events==null) {
	//	events = getEvents();
	//}

	//var parsed = JSON.parse(EVENTS.toString());
	//console.log(parsed);
	var filteredList = EVENTS; //this.getAllEvents();



	return filteredList;  // returns json array of the events filtered as needed
	}




	private getAllEvents() { // returns events for internal use/caching
		// TODO - caching
		// TODO - mock/testing  and  live/DB option
		return new Promise(function(resolve, reject) {
			//TODO - grab 'EVENTS' async
			var returnedEvents = EVENTS;

			if (returnedEvents instanceof Array && returnedEvents.length > 0 ) { //TODO, better success test
				resolve(returnedEvents);
			}
			reject(Error("getAllEvents function unable to retrieve events"));
		});
	}


	getEvent(eventID)  { // returns the FIRST object that has a key that matches the eventID
		this.getAllEvents().then(function(allEvents) {
		  console.log(allEvents); // "Stuff worked!"
			for(var i=0;i< allEvents.length;i++) {
				alert("here");
				var obj = allEvents[i];
				if(obj['eventID']==eventID.toString()) {    //todo -- I think I can directly grab this.  Can be tightened up.
					return obj;
				}
			}
			return null;
		}, function(err) {
		  console.log(err); // Error: "It broke"
		});
	}


	/*
	saveEvent(event:string, overwrite:boolean) { // recieves JSON version of event, saves it (overwriting?)
	//TODO
	return null;
	}

	getEventFromXML(XML:string) {
	//TODO
	// convert XML to JSON
	// Add to list (via Save) and then use get Event ID?
	return null;
	}



	private singleEvent = {
		"id": "1",
		"name": "FirstEventName",
		"location"}


	private allEvents =

	*/

}
