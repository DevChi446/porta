import { Component } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-informacion',
  standalone: true,
  imports: [SkillsComponent],
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.css',
})
export class InformacionComponent {
  descargarCV() {
    const link = document.createElement('a');
    link.href = '24AgoCV.pdf';
    link.download = '24AgoCV.pdf';
    link.click();
  }
}
