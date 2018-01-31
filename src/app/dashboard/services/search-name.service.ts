import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Injectable()
export class SearchNameService {

  private searchText: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  setSearchText(value: string){
    this.searchText.next(value);
  }

  searchTextObservable(){
    return this.searchText.asObservable();
  }
}
