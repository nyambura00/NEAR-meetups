import { v4 as uuid4 } from "uuid";

//const GAS = 100000000000000;

export function addEvent(event) {
  event.id = uuid4();
  return window.contract.addEvent({ event });
}

export function getEvents() {
  return window.contract.getEvents();
}

export function getEvent({ id }){
    return window.contract.getEvent(id);
}