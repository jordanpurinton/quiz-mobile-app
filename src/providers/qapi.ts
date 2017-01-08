import {Injectable} from "@angular/core";

@Injectable() // needed for http service
export class qApi {
  public question:any;
  constructor() {
  }

  setQ(question){
    this.question = question;
    // console.log('set',q)
  }

  getQ():any{
    return this.question;
  }
}
