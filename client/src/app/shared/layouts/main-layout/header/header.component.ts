import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  isConnectedChat: boolean = false;
  isHiddenChat: boolean = false;

  constructor(
    private productService: ProductService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.productService.getAll();
  }

  ngOnDestroy(): void {
  }

  showChat(state: boolean) {
    if (this.isConnectedChat = true) this.isHiddenChat = false;
    this.isConnectedChat = state;
  }

  hiddenChat(state: boolean) {
    this.isHiddenChat = state;
  }
}
