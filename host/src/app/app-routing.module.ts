import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'remote',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:5000/remoteEntry.js',
      remoteName: 'remoteApp',
      exposedModule: './ProfileModule'
    }).then(m => m.ProfileModule).catch(err => console.error('teste', err))
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
