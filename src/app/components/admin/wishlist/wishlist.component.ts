import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { SwapService } from 'src/app/services/swap.service';
import { UserService } from 'src/app/services/user.service';
import { WhishlistService } from 'src/app/services/whishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  products: any;
  filterTerm!: string;
  p: number = 1;
  id_product: any;
  user: any = {};
  constructor(
    private productService: SwapService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.GetAllProducts();
  }

  GetAllProducts() {
    this.productService.getAllproducts().subscribe((data) => {
      this.products = data.products;
    });
  }

  viewProduct(id: any) {
    console.log('Show Details of products :');
    this.router.navigate([`view-product-swap/${id}`]).then(() => {
      this.ngOnInit();
      window.location.reload();
    });
  }

  DeleteProduct(id: any) {
    this.productService.deleteProduct(id).subscribe((data) => {
      console.log(data.message);
      this.ngOnInit();
    });
  }

  getIdProduct(id: any) {
    this.id_product = id;
  }

  EditProduct(id: any) {
    this.router.navigate([`edit-product/${id}`]).then(() => {
      window.location.reload();
    });
  }

  getUser(id: any) {
    console.log('Here In Get User In Profil');
    this.userService.getUserById(id).subscribe((data) => {
      this.user = data.user;
      console.log('this is user :', this.user);
    });
  }
}
