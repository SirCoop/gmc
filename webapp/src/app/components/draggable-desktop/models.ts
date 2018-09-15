import { INgWidgetContainerConfig } from 'ngx-draggable-widget';

export type WidgetType = string;

export interface WidgetMetaData {
    id: number;
    config: any;
    name: string;
    src: string;
}

export interface IWidgetDashboard {
    WidgetContainer: INgWidgetContainerConfig;
    Widgets: WidgetMetaData[];
}

export const containerConfig = {
    'margins': [5],
    'draggable': true,
    'resizable': false,
    'auto_resize': false,
    'limit_to_screen': true

};

export const widgetmetadatas = [
    {
        'id': 1,
        'config': { 'dragHandle': '.handle', 'row': 1, 'col': 1, 'resizable': false, 'payload': 1 },
        'name': 'About',
        'src': '../../../assets/draggable/about.png',
        'routerLink': 'about',
        'url': '/about'
    },
    {
        'id': 2,
        'config': { 'dragHandle': '.handle', 'row': 1, 'col': 2, 'resizable': false, 'payload': 2 },
        'name': 'Apps',
        'src': '../../../assets/draggable/apps.png',
        'routerLink': 'apps',
        'url': '/apps'
    },
    {
        'id': 3,
        'config': { 'dragHandle': '.handle', 'row': 1, 'col': 3, 'resizable': false, 'payload': 1 },
        'name': 'Contact',
        'src': '../../../assets/draggable/contact.png',
        'routerLink': 'contact',
        'url': '/contact'
    },
    {
        'id': 4,
        'config': { 'dragHandle': '.handle', 'row': 1, 'col': 4, 'resizable': false, 'payload': 2 },
        'name': 'DNA',
        'src': '../../../assets/draggable/dna.gif',
        'routerLink': 'dna',
        'url': '/dna'
    },

    {
        'id': 5,
        'config': { 'dragHandle': '.handle', 'row': 2, 'col': 1, 'resizable': false, 'payload': 1 },
        'name': 'Failure',
        'src': '../../../assets/draggable/failure.png',
        'routerLink': 'failures',
        'url': '/failures'
    },
    {
        'id': 6,
        'config': { 'dragHandle': '.handle', 'row': 2, 'col': 2, 'resizable': false, 'payload': 2 },
        'name': 'Good Reads',
        'src': '../../../assets/draggable/good-reads.png',
        'routerLink': 'reading-list',
        'url': '/reading-list'
    },
    {
        'id': 7,
        'config': { 'dragHandle': '.handle', 'row': 2, 'col': 3, 'resizable': false, 'payload': 1 },
        'name': 'Animation',
        'src': '../../../assets/draggable/lps-head.gif',
        'routerLink': 'animation',
        'url': '/animation'
    },
    {
        'id': 8,
        'config': { 'dragHandle': '.handle', 'row': 2, 'col': 4, 'resizable': false, 'payload': 2 },
        'name': 'Musings',
        'src': '../../../assets/draggable/musings.png',
        'routerLink': 'writings',
        'url': '/writings'
    },

    {
        'id': 9,
        'config': { 'dragHandle': '.handle', 'row': 3, 'col': 1, 'resizable': false, 'payload': 1 },
        'name': 'Resume',
        'src': '../../../assets/draggable/resume.png',
        'routerLink': 'resume',
        'url': '/resume'
    },
    {
        'id': 10,
        'config': { 'dragHandle': '.handle', 'row': 3, 'col': 2, 'resizable': false, 'payload': 2 },
        'name': 'Cognitive Analysis',
        'src': '../../../assets/draggable/self-assessment.png',
        'routerLink': 'know-thyself',
        'url': '/know-thyself'
    },
    {
        'id': 11,
        'config': { 'dragHandle': '.handle', 'row': 3, 'col': 3, 'resizable': false, 'payload': 1 },
        'name': 'Success',
        'src': '../../../assets/draggable/success.png',
        'routerLink': 'successes',
        'url': '/successes'
    },
    {
        'id': 12,
        'config': { 'dragHandle': '.handle', 'row': 3, 'col': 4, 'resizable': false, 'payload': 2 },
        'name': 'Travel',
        'src': '../../../assets/draggable/travel.png',
        'routerLink': 'travel-gallery',
        'url': '/travel-gallery'
    },

    {
        'id': 13,
        'config': { 'dragHandle': '.handle', 'row': 4, 'col': 1, 'resizable': false, 'payload': 1 },
        'name': 'Dark Secret',
        'src': '../../../assets/draggable/travel.png',
        'routerLink': 'about',
        'url': '/about'
    }
    // {
    //     'id': 14,
    //     'config': { 'dragHandle': '.handle', 'row': 4, 'col': 2, 'resizable': false, 'payload': 2 },
    //     'name': 'Widget Simple Product Market',
    //     'src': '../../../assets/draggable/travel.png'
    // },
    // {
    //     'id': 15,
    //     'config': { 'dragHandle': '.handle', 'row': 4, 'col': 3, 'resizable': false, 'payload': 1 },
    //     'name': 'Widget Simple Product Market',
    //     'src': '../../../assets/draggable/travel.png'
    // },
    // {
    //     'id': 16,
    //     'config': { 'dragHandle': '.handle', 'row': 4, 'col': 4, 'resizable': false, 'payload': 2 },
    //     'name': 'Widget Simple Product Market',
    //     'src': '../../../assets/draggable/travel.png'
    // },
    
];
