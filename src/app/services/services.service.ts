import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
constructor(private http: HttpClient){}
getProduct(): Observable<IProduct[]>{
  return this.http.get<IProduct[]>(`http://localhost:3000/product`)
}

deleteProduct(id: number): Observable<IProduct>{
  return this.http.delete<IProduct>(`http://localhost:3000/product/${id}`)
}
addProduct(product:IProduct): Observable<IProduct>{
  return this.http.post<IProduct>(`http://localhost:3000/product/`,product)
}
updateProduct(product: IProduct): Observable<IProduct>{
  return this.http.patch<IProduct>(`http://localhost:3000/product/${product.id}`, product)
}
}
