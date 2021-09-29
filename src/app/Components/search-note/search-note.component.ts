import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-note',
  templateUrl: './search-note.component.html',
  styleUrls: ['./search-note.component.css']
})
export class SearchNoteComponent implements OnInit {

  search: string = "";

  // Emit the search/change event
  @Output() onChange= new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  // onChange
  Search() {
    // emiit the change event 
    this.onChange.emit(this.search);
  }
}
