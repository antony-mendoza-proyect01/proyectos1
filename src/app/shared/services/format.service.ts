import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatService {
  constructor() { }

  formatFecha(date: {year: number, month: number, day: number}) {
    return `${date.year}-${date.month <= 9 ? '0' + date.month : date.month}-${date.day <= 9 ? '0' + date.day : date.day}`;
  }
}
