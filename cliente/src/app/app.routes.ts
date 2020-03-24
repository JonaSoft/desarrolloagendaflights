import {RouterModule, Routes} from '@angular/router';
//import {HomeComponent} from './components/home/home.component';
import {UploadComponent} from './components/upload/upload.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AllnotesComponent } from './components/allnotes/allnotes.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { AddnoteComponent } from './components/addnote/addnote.component';
import { EditnoteComponent } from './components/editnote/editnote.component';


const APP_ROUTES: Routes = [

    //{path:'home', component:HomeComponent},
    {
        path:'home',
        component:HomeComponent,
        children: [
            {path:'allnotes',component: AllnotesComponent},
            {path:'addnote',component: AddnoteComponent },
            {path:'calendar',component: CalendarComponent},
            {path:'editnote/:id',component: EditnoteComponent}
        ],
        canActivate: [AuthGuard]
    },
    {path:'login', component:LoginComponent},
    //{path:'notfound', component:NotfoundComponent,  canActivate: [AuthGuard]},
    //{path:'mantenaice/newflight', component:NewflightComponent,  canActivate: [AuthGuard]},
    //{path:'mantenaice/newflight/:id', component:NewflightComponent,  canActivate: [AuthGuard]},
    //{path:'mantenaice/:id',component:MantenaiceComponent,  canActivate: [AuthGuard]},
    //{path:'', component:LoginComponent, canActivate: [AuthGuard]},
    //{path:'flight/:id', component:NotfoundComponent},
    {path:'', pathMatch:'full', redirectTo:'login' },
    {path:'**', pathMatch:'full', redirectTo:'login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
