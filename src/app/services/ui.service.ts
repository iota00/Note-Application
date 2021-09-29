import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
  
  
export class UiService {
  private showNote: boolean = false;
  private subject = new Subject<any>();
  constructor() { }
  toggleAddNote(): void{
    this.showNote = !this.showNote;
    this.subject.next(this.showNote);
    

  }
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }



}
