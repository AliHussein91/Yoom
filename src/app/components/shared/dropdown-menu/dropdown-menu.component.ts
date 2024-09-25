import { AsyncPipe } from '@angular/common';
import { CountryCode } from './../../../interfaces/country-code';
import { CountryCodesService } from './../../../services/country-codes.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.scss',
})
export class DropdownMenuComponent implements OnInit {
  
  countyCodes: CountryCode[] = [];;
  selectedCountry: CountryCode | string = 'eg';
  
  
  constructor(private countryCodeService: CountryCodesService) {}
  ngOnInit(): void {
    
    this.countryCodeService.getAllCode().subscribe(data => this.countyCodes = data);
    
  }
  @Output() countryKey: EventEmitter<string> = new EventEmitter<string>();
  dropdownDisplay: boolean = false;
  updateSelection(countrykey?: string, code?: string): void {
    
    this.dropdownDisplay = !this.dropdownDisplay;
    return this.countryKey.emit(countrykey);
  }

}
