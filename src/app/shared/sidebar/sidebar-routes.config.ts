import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    /*
    {
        path: '', title: 'Asset', icon: 'ft-layout', class: 'has-sub', badge: '1', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
        submenu: [
            { path: '/asset/list-asset', title: 'List Asset', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/asset/form-asset', title: 'New Asset', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ] 
    },
    
    {
        path: '', title: 'User', icon: 'ft-layout', class: 'has-sub', badge: '1', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
        submenu: [
            { path: '/user/list-user', title: 'List User', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/user/form-user', title: 'New User', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ] 
    },
    */
   {
    path: '/asset/list-asset', title: 'Asset', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },

   {
    path: '/user/list-user', title: 'User', icon: 'ft-user', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/changelog', title: 'Issue Tracking', icon: 'ft-file', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    { path: '/documentation', title: 'Documentation', icon: 'ft-folder', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    { path: '/support', title: 'Support', icon: 'ft-life-buoy', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },

];
