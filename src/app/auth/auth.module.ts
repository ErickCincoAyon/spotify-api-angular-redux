import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth.routing';
import { AuthorizedComponent } from './authorized/authorized.component';
import { StoreModule } from '@ngrx/store';
import { authFeatureName } from './store/auth.state';
import { authReducer } from './store/reducers/auth.reducer';
import { AuthEffects } from './store/effects/auth.effect';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AuthComponent,
    AuthorizedComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    StoreModule.forFeature( authFeatureName, authReducer ),
    EffectsModule.forFeature([ AuthEffects ]),
  ]
})
export class AuthModule { }
