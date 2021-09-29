import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/Note';
import { NoteService } from 'src/app/services/note.service';



@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];
  search: any;
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.getNotes().subscribe(notes => {
      this.notes = notes;
      this.search = "";
    });
  }
  deleteNote(note: Note) {
    this.noteService.deleteNotes(note).subscribe( // delete task in the server-side
      () => (this.notes = this.notes.filter(t => t.id !== note.id)) // update the UI in client-side
    )
  }
  toggleFavorite(note: Note){
    note.favorite = !note.favorite;
    
    this.noteService.updateFavorite(note).subscribe();
    
  }
  addNote(note: Note) {
    this.noteService.addNote(note).subscribe(note => {
      this.notes.push(note);
    })
      
  }

  searchNote(search: string) {
    if (search.trim() == "") {
      this.ngOnInit();
    }
    else {
      
      this.notes = this.notes.filter(res => {
        return res.title.toLocaleLowerCase().match(search.trim().toLocaleLowerCase());
      })
    }

  }
}


