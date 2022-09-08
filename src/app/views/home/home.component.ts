import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  apiData: any;
  repoData: any;
  valueInput: String = 'VeniLima';

  constructor(private http:HttpClient) {

    this.getData().subscribe(data => {
      console.warn(data);
      this.apiData = data;
    })

    this.getReposData().subscribe(data => {
      console.warn(data);
      this.repoData = data;
    })
   }

  getData(valueInput?: String){

    const url = `https://api.github.com/users/${this.valueInput}`;
    return this.http.get(url);
  }

  getReposData(valueInput?: String){
    const url = `https://api.github.com/users/${this.valueInput}/repos`;
    return this.http.get(url);
  }

  getValue(value: String){

    this.valueInput = value;

    this.getData().subscribe(data => {
      console.warn(data);
      this.apiData = data;
    })

    this.getReposData().subscribe(data => {
      console.warn(data);
      this.repoData = data;
    })
  }

 

  onClickSubmit(data: any){
    alert(data.value);
  }

  ngOnInit(): void {
  }

}
