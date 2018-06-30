import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer
export const Full_ROUTES: Routes = [
  {
    path: 'asset',
    loadChildren: './asset/asset.module#AssetModule'
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule'

  }

];