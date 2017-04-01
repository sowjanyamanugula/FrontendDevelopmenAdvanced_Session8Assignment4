import { Component,OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';


@Component({
  selector: 'my-app',
  templateUrl:'./app/app.component.html',
  styles:[`input.ng-invalid{border-left:5px solid red;}
           input.ng-valid{border-left:5px solid green;}`] 
})
export class AppComponent  {
   public name1="Sowjanya";
  /* userForm=FormGroup;
   constructor(private _formBuilder:FormBuilder){}
   ngOnInit(){
     this.userForm=this._formBuilder.group({
       name:['',Validators.required],
       username:[],
       email:[],
       mobile:[],
       password:[],
       confrmpassword:[]
     })
   }*/

 userForm=new FormGroup({
       name:new FormControl('',[Validators.required,Validators.minLength(3)]),
       username:new FormControl(''),
       email:new FormControl(''),
       mobile:new FormControl(''),
       password:new FormControl(''),
       confrmpassword:new FormControl('')

    });
    onSumbit(){
      console.log(this.userForm.value);

    }
  
  }



