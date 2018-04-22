import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sample-thf-range-use-case',
  templateUrl: './sample-thf-range-use-case.component.html',
  styleUrls: ['./sample-thf-range-use-case.component.css']
})
export class SampleThfRangeUseCaseComponent implements OnInit {

    products = [
      {
        description: "Moto G 5S",
        price: 800,
        image: "motoG5S"
      },
      {
        description: "Samsung Galaxy J7 Prime",
        price: 800.50,
        image: "j7prime"
      },
      {
        description: "LG K10",
        price: 630,
        image: "lgk10"
      },
      {
        description: "Motorola Moto C Plus",
        price: 400,
        image: "motocplus"
      },
      {
        description: "Samsung Galaxy J1 Mini",
        price: 320,
        image: "j1mini"
      },
      {
        description: "Smartphone LG K4",
        price: 450,
        image: "lgk4"
      },
      {
        description: "Smartphone Motorola Moto E4",
        price: 580,
        image: "motoe4"
      },
      {
        description: "Moto Z2 Play",
        price: 1200,
        image: "motoz2play"
      },
      {
        description: "Iphone 8",
        price: 3600,
        image: "iphone8"
      },
      {
        description: "Iphone X",
        price: 5000,
        image: "iphonex"
      },
    ]

    filteredProducts = [];

    ngOnInit() {
      this.filteredProducts = Object.assign(this.products);
      this.sortProducts();
    }

    filterProducts(numbers: Array<number>) {
      this.filteredProducts = this.products.filter(p => p.price >= numbers[0] && p.price <= numbers[1]);
      this.sortProducts;
    }

    sortProducts() {
      this.filteredProducts = this.filteredProducts.sort(function(a, b) {
        return a.price - b.price;
      });
    }

}
