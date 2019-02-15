import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationService } from './services/authentication.services';
import { AuthGuard } from './guard/auth.guard';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
    ],
    exports: [
        CommonModule
    ],
    entryComponents: [

    ],
    providers: [
      AuthenticationService,
      AuthGuard
    ]
})

export class SharedModule { }
