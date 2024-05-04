import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path:'',
    component:ProductListComponent,
    title: 'Product App'
  },
  {
    path:'product-details/:id',
    component: ProductDetailsComponent,
    title: "Product Details"
  },
  {
    path:'login',
    component: LoginComponent,
    title: "Login"
  },
  {
    path: "register",
    component: RegisterComponent,
    title: "Register"
  },
  {
    path: 'cart',
    component: CartComponent,
    title: "Cart"
  },
  {
    path: '**',
    component:NotFoundComponent
  }
];
