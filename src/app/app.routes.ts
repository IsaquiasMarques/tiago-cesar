import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/components/containers/home.component').then(component => component.HomeComponent),
        title: 'Tiago César - Página Inicial',
    },
    {
        path: 'about-us',
        loadComponent: () => import('./pages/about-us/about-us.component').then(component => component.AboutUsComponent),
        title: 'Saiba mais sobre nós'
    },
    {
        path: 'services',
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/services/services.component').then(component => component.ServicesComponent),
                title: 'Os nossos serviços'
            },
            {
                path: 'details/:service',
                loadComponent: () => import('./pages/services/details/details.component').then(component => component.DetailsComponent),
                title: 'Detalhes de serviço'
            }
        ],
    },
    {
        path: 'projects',
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/services/services.component').then(component => component.ServicesComponent),
                title: 'Os nossos projectos'
            },
            {
                path: 'details/:project',
                loadComponent: () => import('./pages/projects/details/details.component').then(component => component.DetailsComponent),
                title: 'Detalhes de projecto'
            }
        ]
    },
    {
        path: 'news',
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/news/news.component').then(component => component.NewsComponent),
                title: 'Acompanhe as nossas notícias'
            },
            {
                path: 'article/:new',
                loadComponent: () => import('./pages/news/details/details.component').then(component => component.DetailsComponent),
                title: 'Leitura de notícia'
            }
        ]
    },
    {
        path: 'contact-us',
        loadComponent: () => import('./pages/contact-us/contact-us.component').then(component => component.ContactUsComponent),
        title: 'Entre em contacto connosco'
    }
];
