import { Component } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
product!: IProduct[]
myName: string ="";
status: boolean = false;
constructor(private serviceService : ServicesService){
  this.serviceService.getProduct().subscribe(data =>{
    this.product = data 
  })
} 
setValue(e: any){
  this.myName = e.target.value;
}
toggle(){
  this.status = !this.status
}
removeItem(id:number){
  this.serviceService.deleteProduct(id).subscribe(()=>{
    this.product = this.product.filter(product => product.id !== id)
  })
}
}
