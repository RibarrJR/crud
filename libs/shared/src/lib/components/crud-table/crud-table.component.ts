import { Component, OnInit } from '@angular/core';
import { CrudVinhosDataModel } from '@cruds-shared'

enum statusBadge {
 RECOMENDO = 'Recomendo',
 NAORECOMENDO = 'Não Recomendo',
 SUPERRECOMENDO = 'Super Recomendo'
}
interface ProductCrud {
  Name: string;
  Price: number;
  Category: string;
  Rating: number;
  Status: string;
  id: number;
}

@Component({
  selector: 'shared-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss']
})
export class CrudTableComponent implements OnInit {

  public statusBadge= statusBadge;
  public statuses: CrudVinhosDataModel[] = [];
  public rating = 3;
  public selectedProducts: ProductCrud[] = [];
  public products: ProductCrud[] =
    [
      { Category: 'Merlot', Name: 'testando', Price:80.99 , Rating: 1, Status: statusBadge.NAORECOMENDO, id: 1 },
      { Category: 'Chardonnay', Name: 'testando2', Price: 44.99, Rating: 2, Status: statusBadge.NAORECOMENDO, id: 2 },
      { Category: 'Tannat', Name: 'testando3', Price: 180.99, Rating: 3, Status: statusBadge.RECOMENDO, id: 3 },
      { Category: 'Pinot Noir', Name: 'testando4', Price: 280.99, Rating: 5, Status: statusBadge.SUPERRECOMENDO, id: 4 },
      { Category: 'Malbec', Name: 'testando4', Price: 50.99, Rating: 4, Status: statusBadge.RECOMENDO, id: 5 }
    ];

ngOnInit() {



  this.statuses = [
    { label: 'RECOMENDO', value: 'recomendo' },
    { label: 'NÃO RECOMENDO', value: 'nrecomendo' },
    { label: 'SUPER RECOMENDO', value: 'srecomendo' }
  ];
}

openNew() {
  // this.product = {};
  // this.submitted = false;
  // this.productDialog = true;
}

deleteSelectedProducts() {
  // this.confirmationService.confirm({
  //     message: 'Are you sure you want to delete the selected products?',
  //     header: 'Confirm',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //         this.products = this.products.filter(val => !this.selectedProducts.includes(val));
  //         this.selectedProducts = null;
  //         this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
  //     }
  // });
}

editProduct(product: ProductCrud) {
  return product
  // this.product = {...product};
  // this.productDialog = true;
}

deleteProduct(product: ProductCrud) {
  // this.confirmationService.confirm({
  //     message: 'Are you sure you want to delete ' + product.name + '?',
  //     header: 'Confirm',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //         this.products = this.products.filter(val => val.id !== product.id);
  //         this.product = {};
  //         this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
  //     }
  // });
}

hideDialog() {
  // this.productDialog = false;
  // this.submitted = false;
}

saveProduct() {
  // this.submitted = true;

  // if (this.product.name.trim()) {
  //     if (this.product.id) {
  //         this.products[this.findIndexById(this.product.id)] = this.product;
  //         this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
  //     }
  //     else {
  //         this.product.id = this.createId();
  //         this.product.image = 'product-placeholder.svg';
  //         this.products.push(this.product);
  //         this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
  //     }

  //     this.products = [...this.products];
  //     this.productDialog = false;
  //     this.product = {};
  // }
}

findIndexById(id: string) {
  // let index = -1;
  // for (let i = 0; i < this.products.length; i++) {
  //     if (this.products[i].id === id) {
  //         index = i;
  //         break;
  //     }
  // }

  // return index;
}

createId() {
  // let id = '';
  // var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  // for ( var i = 0; i < 5; i++ ) {
  //     id += chars.charAt(Math.floor(Math.random() * chars.length));
  // }
  // return id;
}

}
