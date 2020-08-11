import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlbumComponent } from './album/album.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'album', component: AlbumComponent},
	{ path: 'test', component: TestComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
