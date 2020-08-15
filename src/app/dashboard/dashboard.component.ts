import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
Designation: string;
Username: string;
NoOfTeamMembers: number;
TotalCostOfAllProjects: number;
PendingTasks: number;
UpComingProjects: number;
ProjectCost: number;

CurrentExpenditure: number;
AvailableFunds: number;

Clients: string[];
Projects: string[];
Years: string[];
TeamMembersSummary: any[];
  ngOnInit(): void { 
    this.Designation="Team Leader";
    this.Username="Kanhu";
    this.NoOfTeamMembers=67;
    this.TotalCostOfAllProjects=240;
    this.PendingTasks=15;
    this.UpComingProjects=2;
    this.ProjectCost=2113507;
    this.CurrentExpenditure=96788;
    this.AvailableFunds=52536;

    this.Clients=[
      "ABC Infotech Ltd.","DEF Ltd.","GHI Software Ltd."
    ];
    this.Projects=[
      "Project A","Project B","Project C","Project D"
    ];
    this.Years=[
      "2018","2019","2020","2021"
    ];
    this.TeamMembersSummary=[
     {Region:"East",TeamMembersCount:"50",UnavailableMembers:"20",AvailableMembers:"30"},
     {Region:"West", TeamMembersCount:"40", UnavailableMembers:"20", AvailableMembers:"30"},
     {Region:"North", TeamMembersCount:"50", UnavailableMembers:"20", AvailableMembers:"30"},
     {Region:"South", TeamMembersCount:"50", UnavailableMembers:"20", AvailableMembers:"30"},
     {Region:"North East", TeamMembersCount:"50", UnavailableMembers:"20", AvailableMembers:"30"},
      
    ];
  }
  onProjectChange($event)
  {
    if($event.target.innerHTML == "Project A"){
      this.ProjectCost=2113507;
    this.CurrentExpenditure=96788;
    this.AvailableFunds=52536;
    }
    else if($event.target.innerHTML == "Project B")
    {
      this.ProjectCost=113507;
    this.CurrentExpenditure=6788;
    this.AvailableFunds=102536;
    }
    else if($event.target.innerHTML == "Project C")
    {
      this.ProjectCost=100;
    this.CurrentExpenditure=200;
    this.AvailableFunds=300;
    }
    else if($event.target.innerHTML == "Project D")
    {
      this.ProjectCost=507;
    this.CurrentExpenditure=6788;
    this.AvailableFunds=10253600;
    }
  }
}
