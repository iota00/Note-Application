import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Note } from '../Note';


// set header options
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class NoteService {
private apiURL = "http://127.0.0.1:5000/notes"
  constructor(private http:HttpClient) { }

  getNotes(): Observable<Note[]> {
    return  this.http.get<Note[]>(this.apiURL); // perform a get request
  }
  deleteNotes(note: Note): Observable<Note> {
    const url = `${this.apiURL}/${note.id}`;
    return this.http.delete<Note>(url);
  }
  
  
  updateFavorite(note: Note): Observable<Note> {
    const url = `${this.apiURL}/${note.id}`;
    
    return this.http.put<Note>(url, note, httpOptions); // we update the hole task, to make sure that the reminder is updated. (otherwise it'll not work correctly)
  }

  addNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.apiURL, note, httpOptions);
  }
}
