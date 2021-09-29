import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/app/Note';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
  
  
export class AddNoteComponent implements OnInit {
  // Events :
  @Output() onAddNote: EventEmitter<Note> = new EventEmitter();

  // properties :
  title!: string;
  text!: string;
  date!: Date;
  type: string = "public";
  favorite: boolean = false;
  showAddNote!: boolean;
  subscription!:  Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(
      value => this.showAddNote = value
    )
  }

  ngOnInit(): void {
  }
  onSubmit() {
    if (!this.title|| !this.title.trim()){
      alert("Please add a title");
       
      return;
      
    }
    if (!this.text || !this.text.trim()) {
      alert("Please add a text");
       
      return;
      
    }
      // after checking 
    const newNote = {
      title: this.title,
      text: this.text,
      date: new Date().toLocaleString(),
      type: this.type,
      favorite: this.favorite
    }
    
    // event emit
    
    this.onAddNote.emit(newNote);
    // reset form :
    this.text = this.title = "";
    this.favorite = false;
  }

}
