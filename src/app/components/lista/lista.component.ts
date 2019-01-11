import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { AppState } from '../shared/store/reducers/index';
import { Store } from '@ngrx/store';
import { selectUsers } from '../shared/store/selector/user.selector';
import * as fromuser from '../shared/store/actions/users.action';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(private store: Store<AppState>) {
      this.users$ = store.select(selectUsers);
  }

  ngOnInit() {
    this.store.dispatch(new fromuser.GetUsers);
  }

}
