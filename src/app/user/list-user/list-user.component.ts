import { Component, OnInit } from '@angular/core';
import { User } from '../../class/user';
import { UserInterface } from '../../interfaces/user';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../services/user.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  users: User[];
  usersObs: Observable<User[]>;
  userInf: UserInterface[];
  ngOnInit() {
    this.loadListUser();
  }

  constructor(private userService: UserService) { }

  loadListUser() {
    this.usersObs = this.userService.loadListAssetWS();
    this.usersObs.subscribe((usersObs) => {
      this.userInf = usersObs;
      this.users = this.userInf;
    }
    )
  }

  changePage(page: number){
    console.log("Page Number:",page);
    this.loadListUser();
}

checkAll(event: any){
  for(var i =0;i<this.users.length;i++){
      this.users[i].select=event.currentTarget.checked;
  }
}

}
