import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, OnDestroy {

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
