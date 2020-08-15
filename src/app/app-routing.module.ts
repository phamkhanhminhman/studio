import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlbumComponent } from './album/album.component';
import { TestComponent } from './test/test.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
	{ path: '', component: AboutComponent },
	{ path: 'home', component: HomeComponent},
	{ path: 'album', component: AlbumComponent},
	{ path: 'about', component: AboutComponent},
	{ path: 'test', component: TestComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
