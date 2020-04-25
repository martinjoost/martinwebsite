import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-experiencies',
  templateUrl: './experiencies.component.html',
  styleUrls: ['./experiencies.component.css']
})
export class ExperienciesComponent implements OnInit {

 jobs:any = [
    {
      name:'Wintrillions',
      remote: true,
      location:'Remoto',
      position:'Frontend Developer',
      implementations: ['Angular 9', 'Angular Universal','i18n', 'Progressive Web App (PWA)', 'NODE.JS', 'ROUTES', 'MODULES', 'RXJS', 'NGRX STORE', 'REACTIVE FORMS', 'MANEJO DE TOKENS'],
      description:'En este interesante proyecto participé en el FrontEnd llevando a cabo mis capacidades conocimientos y habilidades en Angular en su versión 9 siendo parte de un buen equipo de desarrollo ágil con Bitbucket, Jira confluence. Llevé a cabo ciertas librerías e implementaciones exitosamente a lo largo de este proyecto: Angular UNIVERSAL (SSA). I18n Internationalization. Progressive Web App (PWA).Módulos, rutas, guards, pipes, operadores rxjs, ngrx. Manejo de peticiones API Restful por manejo de modelos. Validaciones seguras de tokens. Formularios reactivos, validadores del mismo',
      url:'./assets/images/trillonario.jpg',
      from:'',
      to:''
    }, 
    {
      name:'Ejército de Chile',
      remote: false,
      location:'Edificio Ejercito bicentenario',
      position:'Frontend Developer',
      implementations: ['AngularJS', 'VB.NET', 'HighCharts.js','Oracle DB', 'Soporte técnico presencial','Reportes', 'Mantención Sistema','Procedimientos Almacenados', 'Exposición de prototipos funcionales'],
      description:'Mantención del sistema, manipulación de información confidencial. Creación de procedimientos y tablas almacenadas en Oracle DB. Desarrollo de herramientas innovadoras para el sistema WebApp de Hoja de Vida Digital del ejército, creada con AngularJS, Visual Basic, y Oracle DB. Este sistema va dirigido hacia todo personal militar registrados vigentes e históricos de Chile, por consecuencia manipulando datos confidenciales.',
      url:'./assets/images/ejercito.jpg',
      from:'Octubre 2018',
      to:'Diciembre 2019'
    }, 
    {
      name:'Chileforma',
      remote: false,
      location:'Av. 18 de Septiembre #1881',
      position:'Asistente informático',
      implementations: [],
      description:'Emprendimiento familiar participando como asistente del docente en algunas capacitaciones para distintos lenguajes y frameworks',
      url:'./assets/images/chileforma.jpg',
      from:'Enero 2017',
      to:'Noviembre 2018'
    }
  ]


  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('martinwebsite - Users');
  }
}
