import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccessibilityCase } from '../models/accessibility-case';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  public folder: string = "";
  public AccessibilityCase: any;

  public listExamples: string[] = ["Element 1", "Element 2", "Element 3"];

  constructor(private activatedRoute: ActivatedRoute) {
    this.AccessibilityCase = AccessibilityCase;
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  showAlert() {
    // TODO
  }

}
