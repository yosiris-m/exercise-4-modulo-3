import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

export class Person {
  constructor(
    public name: string,
    public lastName: string,
    public age: number,
    public legalId: string,
    public birthday: string,
    public favoriteColor: string,
    public gender: string,
  ) {
  }
}

@Component({
  selector: 'app-person-data',
  templateUrl: './person-data.component.html',
  styleUrls: ['./person-data.component.sass']
})

export class PersonDataComponent implements OnInit {
  header = 'Crear contacto'
  numberOfContacts = 0;
  counterClass = 'warning';
  name = new FormControl('');

  public person: Person = {
    name: '',
    lastName: "",
    age: 0,
    legalId: "",
    birthday: Date(),
    favoriteColor: "",
    gender: "",
  };
  public Person: Person[] = [];
  public personForm: FormGroup;


  constructor() {
    this.person = {
      name: '',
      lastName: "",
      age: 0,
      legalId: "",
      birthday: Date(),
      favoriteColor: "",
      gender: "",
    };

    this.Person = [];
    this.personForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', []),
      age: new FormControl('', [Validators.required, Validators.min(0), Validators.max(129)]),
      legalId: new FormControl('', []),
      birthday: new FormControl('', [Validators.required, Validators.minLength(9)]),
      favoriteColor: new FormControl('', []),
      gender: new FormControl('', []),
    })
  }


  ngOnInit(): void {

  }

  persons: any = []

  public n: number = 0;


  add() {
    this.n += 1;
  }

  reset() {
    this.n
      += -1;
  }

  saveContact() {
    if (this.personForm.invalid) {
      return;
    }
    this.Person.push({...this.person});
    this.persons = [];
    this.add()
  }


  deleteContact1() {
    this.person = {
      name: '',
      lastName: "",
      age: 0,
      legalId: "",
      birthday: Date(),
      favoriteColor: "",
      gender: "",
    };
  }


  deleteContact(contactList: Person) {
    this.Person.splice(this.Person.indexOf(contactList), 1);
    this.reset()
  }


}
