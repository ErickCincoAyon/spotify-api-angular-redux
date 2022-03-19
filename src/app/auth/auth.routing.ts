import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AuthorizedComponent } from './authorized/authorized.component';

const routes: Routes = [
    { path: '', component: AuthComponent },
    { path: 'authorized', component: AuthorizedComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule { }