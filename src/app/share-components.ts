
//--Layouts
import { 
    AppHeaderComponent,
    AppLayoutComponent,
    AppFooterComponent,
    AppSideBarComponent,
 } from "./components/_layout";

/**Import Components */
import {
    AboutComponent,
    HomeComponent,
    NoContentComponent,
    LoginComponent,
    ForgotPasswordComponent,
} from './components';

/**Export Components */
export const SharedComponents = [
    //--Layouts
    AppHeaderComponent,
    AppLayoutComponent,
    AppFooterComponent,
    AppSideBarComponent,
    //--Components
    AboutComponent,
    HomeComponent,
    NoContentComponent,
    LoginComponent,
    ForgotPasswordComponent,    
];