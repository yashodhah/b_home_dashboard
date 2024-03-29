import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MasterDataService} from '../services/master-data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  namesList: string[] = [];
  hairColorList: string[] = [];
  genderList: string[] = [];
  raceList: string[] = [];

  filterGroupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private masterDataService: MasterDataService
  ) {
    this.prepareDropdownOptions();

    this.filterGroupForm = this.formBuilder.group({
      name: '',
      hair: '',
      gender: '',
      race: '',
    });
  }

  private prepareDropdownOptions() {
    // TODO: Change this data structure to enable filtering in dropdowns and adding empty values
    this.namesList = this.masterDataService.nameList;
    this.hairColorList = this.masterDataService.hairColorList;
    this.genderList = this.masterDataService.genderList;
    this.raceList = this.masterDataService.raceList;

    // this.namesList.unshift('');
    // this.hairColorList.unshift('');
    // this.genderList.unshift('');
    // this.raceList.unshift('');
  }

  // TODO: Remove this after dropdown data structure change
  clearAllFilters() {
    this.filterGroupForm.reset();
  }
}
