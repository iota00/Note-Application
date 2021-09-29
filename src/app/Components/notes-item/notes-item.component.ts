import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/app/Note';
import { faTimes, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notes-item',
  templateUrl: './notes-item.component.html',
  styleUrls: ['./notes-item.component.css']
})
export class NotesItemComponent implements OnInit {

  @Input() note!: Note;
  @Output() onDeleteNote: EventEmitter<Note> = new EventEmitter();
  @Output() onToggleFavorite: EventEmitter<Note> = new EventEmitter();

  
  faTimes = faTimes;
  faHeart = faHeart;
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(note: any) {
    this.onDeleteNote.emit(note);
  }
  onToggle(note: Note) {
    this.onToggleFavorite.emit(note);
  }


}
