import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  @Input() card: any;
  @Input() rating: any;
  @Output() btnSelect = new EventEmitter();

  constructor() { }

  btnClick(){
    this.btnSelect.emit()
  }

  ngOnInit(): void {
  }

}
