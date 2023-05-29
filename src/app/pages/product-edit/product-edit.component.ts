import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ServicesService } from 'src/app/services/services.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  product!: IProduct;
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0]
  });
  constructor(
    private formBuilder: FormBuilder,
    private serviceService : ServicesService,
     private router: ActivatedRoute,
    ){
  this.router.paramMap.subscribe(params =>{
    const id = Number(params.get('id'));
    this.serviceService.getProduct(id).subscribe(data => {
      this.product = data;

      this.productForm.patchValue({
        name: data.name,
        price: data.price
      });
    }, error => console.log(error.message));
  
    
  });
  }
  onHandleSubmit(){
    if (this.productForm.valid){
      const product : IProduct = {
        id: this.product.id,
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0
      }
      this.serviceService.updateProduct(product).subscribe((updateProduct)=>{
        console.log('product', updateProduct);
        
      })
    }
    }
  
}
