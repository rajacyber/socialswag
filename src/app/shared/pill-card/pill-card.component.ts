import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pill-card',
  templateUrl: './pill-card.component.html',
  styleUrls: ['./pill-card.component.scss']
})

export class PillCardComponent implements OnInit {
  @Input() chartData: any;
  @Input() pilltype: any;
  @Output() callbackCountFilter = new EventEmitter();
  inArray = ['critical', 'high', 'medium', 'low', 'compliant', 'active', 'inactive', 'not logged-in > 30d',
    'non compliant', ];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      if (this.chartData.compliance) { this.updateCompliance({value: this.chartData.compliance}); }
    }, 3000);
  }

  updateCompliance($event: any): void {
    const selectedC = this.chartData.complianceData.filter((x: any) => x.value === $event.value);
    const compliance = selectedC[0].data.filter((x: any) => x.compliance);
    const noncompliance = selectedC[0].data.filter((x: any) => !x.compliance);
    this.chartData.data[0].value = noncompliance.length;
    this.chartData.data[1].value = compliance.length;
    this.chartData.count = noncompliance.length ; // + compliance.length
  }

  setFilter(chartData: any, name: string): void {
    this.callbackCountFilter.next({value: chartData, key: name});
  }
}
