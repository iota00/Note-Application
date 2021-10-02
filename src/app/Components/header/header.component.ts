import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { NoteService } from 'src/app/services/note.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'; // used to figure out on which router we're


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = "Notes Application";
  showAddNote: boolean = false;
  subscription!: Subscription;


  constructor(private uiService: UiService, private route: Router, private noteService: NoteService) {
    this.subscription = this.uiService.onToggle().subscribe(
      value => this.showAddNote = value // the value here refers to the value of the "ShowTask" property on the service ui
    );
   }
  
  ngOnInit(): void {
  }
  toggleNotes() {
    
    this.uiService.toggleAddNote();
  }
  hasRoute(route: string) {
    return this.route.url === route;
  }
  

}
