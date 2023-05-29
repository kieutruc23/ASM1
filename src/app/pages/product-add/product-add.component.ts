import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ServicesService } from 'src/app/services/services.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
productForm = this.formBuilder.group({
  name: ['',[Validators.required]],
  price : [0]
})
constructor(
  private formBuilder: FormBuilder,
  private serviceService : ServicesService
){

}
onHandleSubmit(){
  const product : IProduct = {
    name: this.productForm.value.name || "",
    price: this.productForm.value.price || 0
  }
  this.serviceService.addProduct(product).subscribe((product)=>{
    console.log('product', product);
    
  })
}
}
