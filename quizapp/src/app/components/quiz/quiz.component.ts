import { Component, OnInit,AfterViewInit,ViewChild,ElementRef,Renderer2 } from '@angular/core';
import { quiz } from 'src/app/models/quiz.model';
import {NgForm} from '@angular/forms';
import { getLocaleWeekEndRange } from '@angular/common';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit, AfterViewInit {
  quizModel:quiz[] = [];
  error:boolean = false;
  selected:boolean = false;

  contador =1;
  total = 2;
  renders:any;
  @ViewChild("tarjetaA") tarj: ElementRef;
  @ViewChild("tarjetaB") tarb: ElementRef;
  @ViewChild("tarjetaC") tarc: ElementRef;
  @ViewChild("tarjetaD") tard: ElementRef;
  
  constructor(render: Renderer2) {
    this.renders = render;
   }

  ngOnInit(): void {
    this.llenar();
  }

  ngAfterViewInit(): void{
    //console.log(this.tarj);
//    this.tarj.nativeElement;
//    this.renders.setStyle(this.tarj.nativeElement, 'backgroundColor','purple');
  //  console.log(this.renders);
  }

 

  llenar(){
    let data = new quiz();

    data.id=1;
    data.question="Los nativos encontrados en la isla la espanola era de origen:"
    data.answer="";
    data.answera="Aztecas";
    data.answerb="Caribes";
    data.answerc="Mayas";
    data.answerd="Tainos";
    data.correctanswer="Tainos";

    this.quizModel.push(data);

    data = new quiz();

    data.id=2;
    data.question="la isla la espanola es compartida entre:"
    data.answer="";
    data.answera="haiti y jamaica";
    data.answerb="RD y Puerto Rico";
    data.answerc="haiti y Venezuela";
    data.answerd="haiti y RD";
    data.correctanswer="haiti y RD";

    this.quizModel.push(data);

  }
  

  siguiente(){
    this.selected=false;
    
    this.contador = this.contador+1;
    if(this.contador>2){
      this.contador =2;
      alert('Ha Finazlizado');
      return;
    }
    this.renders.removeClass(this.tarj.nativeElement,'tarjetaserror');
    this.renders.removeClass(this.tarb.nativeElement,'tarjetaserror');
    this.renders.removeClass(this.tarc.nativeElement,'tarjetaserror');
    this.renders.removeClass(this.tard.nativeElement,'tarjetaserror');

    this.renders.removeClass(this.tarj.nativeElement,'tarjetasvalida');
    this.renders.removeClass(this.tarb.nativeElement,'tarjetavalida');
    this.renders.removeClass(this.tarc.nativeElement,'tarjetasvalida');
    this.renders.removeClass(this.tard.nativeElement,'tarjetasvalida');

  }

  validar(control:string, event:any){
    
    if(this.selected){
      return;
    }
    if(control!=this.quizModel[this.contador-1].correctanswer){
        this.renders.addClass(event,'tarjetaserror');
    }
    else {
      console.log("entro");
        this.renders.addClass(event,'tarjetasvalida');
      }

    

    this.selected = true;
   /* if(control!=this.quizModel[this.contador-1].correctanswer){
      console.log(this.quizModel[this.contador-1].answer);
      event.target.classList.add('tarjetaserror');
      
    } else {
      event.target.classList.add('tarjetasvalida');
    }*/
  }

}
