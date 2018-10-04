import { NgModule } from '@angular/core';
import { SharedServices } from './share-services';
import { SharedComponents } from './share-components';
import { SharedDirectives } from './share-directives';
import { CoreModule } from './shared/services/core/core.module';

@NgModule({
    declarations: [
        SharedComponents,
    ],
    imports: [
        CoreModule,
    ],
    exports: [
        SharedComponents,
    ],
    providers: [
        SharedServices,
    ]
})
export class SharedModule { }
