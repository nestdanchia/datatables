import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { UsersService } from '../../services/users/users.service';

const pepe = {
  "id": 0,
  "name": "Pepe",
  "username": "Pepe",
  "email": "Pepe@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string
}

export interface ToDo {
  userId: number;

  id: number;
  title: string;
  completed: boolean;
}
export interface UserData {
  name: string;
  id: number,
  username?: string;
  posts: Post[];
  todos: ToDo[];
}
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
  phone: string;
  address: { street: string }
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy, AfterViewInit {


  dtOptions: DataTables.Settings = {
    paging: false,
    searching: false,
  };
  dtTrigger: Subject<any> = new Subject<any>();
  allUsers: User[] = [];
  @ViewChild('DataTableDirective', { static: false })
  dataTableDirective!: DataTableDirective;

  constructor(private service: UsersService, private http: HttpClient,
    private readonly chRef: ChangeDetectorRef) { }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      info: false,
      searching: false,
      paging: false,
      scrollY: '300px',
    };
    this.users();
  }
  users() {
    this.service
      .users()
      .subscribe((response: any) => {
        this.allUsers = response;
        console.log(this.allUsers);
        // iniciar tabla
        this.dtTrigger.next(0);
        // si la inicio desde ngAfterViewInit() al ordenar la tabla queda vacia
      });
  }
  ngAfterViewInit(): void { }
  displayToConsole(datatableElement: DataTableDirective): void {
    this.chRef.detectChanges();
    datatableElement.dtInstance.then((dtInstance: DataTables.Api) => console.log(dtInstance));
  }
  rerender(): void {

    try {
      this.dataTableDirective.dtInstance.then((dtInstance: DataTables.Api) => {
        // destruir tabla
        dtInstance.destroy();
        // renderizar nuevamente
        this.dtTrigger.next(0);
      });
    } catch (err) {
      //this.dtTrigger.next(0);
      console.log(err);
    }

  }
  removeRow() {
    this.allUsers = this.allUsers.slice(1);
    this.rerender();
  }
  addRow() {
    this.allUsers.push(pepe);
    this.rerender();
  }
}

    
   

  
  










    
    


  
   
  
    
  
  
/*
 // Action stream
  private userSelectedSubject = new BehaviorSubject<string>('');
  userSelectedAction$ = this.userSelectedSubject.asObservable();

const data1 = [
  [
      "Tiger Nixon",
      "System Architect",
      "Edinburgh",
      "5421",
      "2011/04/25",
      "$3,120"
  ],
  [
      "Garrett Winters",
      "Director",
      "Edinburgh",
      "8422",
      "2011/07/25",
      "$5,300"
  ]
]
//dtInstance!:DataTables.Api;
//, {static: true}) datatableElement!:DataTableDirective;
  //DataTableDirective dtInstance: Promise<DataTables.Api>;
 // this.rerender();da error de dtInstance
   
   this.dtOptions = this.http.get('data/dtOptions.json').toPromise()
   .then(response => response!.json()).catch(this.handleError);  
   
//this.chRef.detectChanges();
//this.dtTrigger.next(0);
   // if( this.dataTableDirective.dtInstance == undefined){
   // if(this.dtElement.dtInstance !==undefined){
//this.dataTableDirective.dtInstance.then((dtInstance: DataTables.Api) => {
//console.log('dtInstance:',dtInstance)
//dtInstance.destroy();
     // this.dtTrigger.next(0);
    //  console.log('rerender',this.allUsers)
//});
//}
//else{
  //this.chRef.detectChanges();
 // console.log('dtInstance:',this.dataTableDirective.dtInstance)
	//	this.dtTrigger.next(this.allUsers);
this.dtOptions = {
  ajax: 'data/data.json',
  columns: [{
    title: 'ID',
    data: 'id'
  }, {
    title: 'Name',
    data: 'name'
  }, {
    title: 'Username',
    data: 'username'
  },
  {
    title: 'Username',
    data: 'username'
  },{
    title: 'Email',
    data: 'email'
  },{
    title: 'Phone',
    data: 'phone'
  },
  
 

]
};

 //this.dtTrigger.next(0);
        
    $('#table_id').DataTable( { 
     // select: true,

      data: data1
  } );
   <table id="table_id" class="display">
            <thead>
                <tr>
                    <th>Column 1</th>
                    <th>Column 2</th>
                    <th>Column 1</th>
                    <th>Column 2</th>
                    <th>Column 1</th>
                    <th>Column 2</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Row 1 Data 1</td>
                    <td>Row 1 Data 2</td>
                </tr>
                <tr>
                    <td>Row 2 Data 1</td>
                    <td>Row 2 Data 2</td>
                </tr>
                <tr>
                    <td>Row 2 Data 1</td>
                    <td>Row 2 Data 2</td>
                </tr>
                <tr>
                    <td>Row 2 Data 1</td>
                    <td>Row 2 Data 2</td>
                </tr>
                <tr>
                    <td>Row 2 Data 1</td>
                    <td>Row 2 Data 2</td>
                </tr>
                <tr>
                    <td>Row 2 Data 1</td>
                    <td>Row 2 Data 2</td>
                </tr>
            </tbody>
        </table>
  */
