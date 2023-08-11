import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  products: any = []; // TODO: Populate with https://fakestoreapi.com/docs data
  visibleForm = false;
  product = {
    title: '',
    category: '',
    description: '',
  };

  toggleForm() {
    this.visibleForm = !this.visibleForm;
  }

  createProduct(): void {
    console.log(this.product);
    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      body: JSON.stringify(this.product),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  }

  ngOnInit(): void {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        this.products = json;
        console.log(this.products);
      });
  }
}
