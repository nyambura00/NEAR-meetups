/* eslint-disable no-param-reassign */
import { v4 as uuid4 } from 'uuid';
import { addEvent } from '../assembly/index';

// const GAS = 100000000000000;

export function addEventFunction(event) {
  event.id = uuid4();
  return window.contract.addEvent({ event });
}

export function getEvents() {
  return window.contract.getEvents();
}

export function getEvent({ id }) {
  return window.contract.getEvent(id);
}
