import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  ReloadPage()
  {
    this.router.navigate(['/servers'],{relativeTo:this.route});
    // here incase of ruuterlink if we not add /before servers then it will add server to the currnet path 
    // like if you are in servers page it will add servers/servers 
    // but in case of navigate it will not add hence /servers and severs works same
    // to pass the relative path use 2nd paramaeter with relative to

  }

}
