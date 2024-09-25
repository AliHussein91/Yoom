import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComingSoonComponent } from "./components/coming-soon/coming-soon.component";
import { HomeComponent } from "./components/home/home.component";
import { FooterComponent } from "./components/shared/footer/footer.component";
import { HeaderComponent } from "./components/shared/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComingSoonComponent, HomeComponent, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'YOOM';
}
