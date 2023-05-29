import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './pages/product-add/product-add.component';
// import { ProductEditComponent } from './pages/product-edit/product-edit.component';
// import { ProductlistComponent } from './productlist/productlist.component';


const routes: Routes = [

  {path : 'product/add',component: ProductAddComponent },
  // {path : 'product/:id/edit',component: ProductEditComponent},
  // {path : 'product',component: ProductlistComponent },


];
//admin/dashboard
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
