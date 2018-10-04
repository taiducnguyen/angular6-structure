import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProgressBarModule } from 'primeng/progressbar';
import { TabViewModule } from 'primeng/components/tabview/tabview';
import { RatingModule } from 'primeng/rating';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TranslateModule } from '@ngx-translate/core';
import { MomentModule } from "angular2-moment";
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { CoreService } from "./core.service";
import { DataTablesModule } from "angular-datatables";
import { environment } from 'environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { SharedDirectives } from 'app/share-directives';
import { SharedControls } from 'app/share-controls';

@NgModule({
    declarations: [
        SharedDirectives,
        SharedControls,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        MomentModule,
        ProgressBarModule,
        TabViewModule,
        RatingModule,
        AutoCompleteModule,
        TranslateModule,
        MultiSelectModule,
        CalendarModule,
        SliderModule,
        CheckboxModule,
        DropdownModule,
        DataTablesModule,
    ],
    exports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        SharedDirectives,
        SharedControls,
        MomentModule,
        ProgressBarModule,
        TabViewModule,
        RatingModule,
        AutoCompleteModule,
        TranslateModule,
        MultiSelectModule,
        CalendarModule,
        SliderModule,
        CheckboxModule,
        DropdownModule,
        DataTablesModule
    ],
    providers: [
        HttpClientModule,
        CoreService
    ]
})
export class CoreModule { }
