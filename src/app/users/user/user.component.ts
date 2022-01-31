import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.user=
    {
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']
      //here snapshot will work only when on another page or intantiate for the first time
      //but when in the same page it will not instantiate so here route.params will be used
    };

    // here subsribe method will be used with route.params to subscribe an event 
    // fired when new data is send through the obserbable


    this.route.params.subscribe(
      (params:Params)=>{
        this.user.id=params['id'],
        this.user.name=params['name']
      }

    );

  }

}
