import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { PanierService } from 'src/app/services/panier.service';
import { ProductService } from 'src/app/services/product.service';
import { SwapService } from 'src/app/services/swap.service';
import { WhishlistService } from 'src/app/services/whishlist.service';
@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.css'],
})
export class SwapComponent implements OnInit {
  category: any;
  products: any;
  selectedCategory: any;
  categ: any;
  id_user: any;
  p: number = 1;
  constructor(
    private productService: SwapService,
    private router: Router,
    private categoryService: CategoryService,
    private whishlistService: WhishlistService,
    private panierService: PanierService
  ) {}

  ngOnInit(): void {
    this.id_user = localStorage.getItem('connectedUser');
    this.GetCategory();
    this.GetProduct();
  }

  GetProduct() {
    console.log('get all products');
    this.productService.GetProductInStock().subscribe((data) => {
      this.products = data.products;
      console.log('products', this.products);
    });
  }

  GetCategory() {
    console.log('Get All Category');
    this.categoryService.allCategory().subscribe((result) => {
      this.category = result.category;
      console.log('category :', this.category);
    });
  }

  SelectedCategory(ch: any) {
    this.selectedCategory = ch;
    console.log('this is category ', this.selectedCategory);
    this.GetSelectedCategory(ch);
  }

  GetSelectedCategory(category: any) {
    console.log('d5aal', category);
    this.productService.getProductByCategory(category).subscribe((data) => {
      this.products = data.produit;
      console.log('hellooww', this.products);
    });
  }

  cleanAll() {
    this.ngOnInit();
  }

  viewProduct(id: any) {
    console.log('Show Details of products :');
    this.router.navigate([`view-product-swap/${id}`]).then(() => {
      this.ngOnInit();
      window.location.reload();
    });
  }

  addWishlist(produit: any) {
    produit.user = this.id_user;
    console.log('Adding this product in Whislist :', produit);
    this.whishlistService.AddProduct(produit).subscribe((data) => {
      console.log(data.message);
      // this.ngOnInit();
    });
  }

  SaveInPanier(produit: any) {
    produit.stock = 'In stock';
    produit.stock = 'In stock';
    produit.swap_user = produit.user;
    produit.user = this.id_user;

    console.log('bbbbb', produit);
    this.panierService.AddPanierS(produit).subscribe((data) => {
      console.log('Here data from BE after add product in panier', data);
    });
  }
  getMyProduct() {
    console.log('nzelt 3liha');
    this.productService.getProductByUser(this.id_user).subscribe((data) => {
      if (data.product == 0) {
        this.products = data.product;
      } else {
        this.products = data.product;
        console.log('swap', this.products);
      }
    });
  }
}
