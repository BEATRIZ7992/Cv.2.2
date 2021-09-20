import { Component, OnInit } from '@angular/core';
import { Informacion, InformacionService } from 'src/app/services/informacion.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.scss']
})
export class SobremiComponent implements OnInit {

  ponerCv: Informacion[]
  listaCategory: string[]

  constructor(private informacionService: InformacionService) { }

  ngOnInit(): void {
  }

  async onChange($event) {
    try {
      if ($event.target.value === 'todos') {
        this.ponerCv = await this.informacionService.getAllCv()
      } else {
        this.ponerCv = await this.informacionService.getPostByCategory($event.target.value)
      }
    } catch (error) {
      console.log(error);

    }

  }
}


