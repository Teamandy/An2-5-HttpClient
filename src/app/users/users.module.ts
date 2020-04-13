import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersServicesModule } from './users-services.module';
import { UsersAPIProvider } from './users.config';

import { UserComponent } from './components';

@NgModule({
  imports: [CommonModule, FormsModule, UsersRoutingModule, UsersServicesModule],
  declarations: [UsersRoutingModule.components, UserComponent],
  providers: [UsersAPIProvider],
})
export class UsersModule {}
