import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public nameLower: string = 'bryan';
  public nameUpper: string = 'Bryan';
  public fullName: string = 'bRyAn GrUeSo';
  public customDate: Date = new Date();
}
