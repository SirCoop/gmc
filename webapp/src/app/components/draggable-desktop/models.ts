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
    'auto_resize': true,
    'cascade': 'up',
    'limit_to_screen': false, // if true, set auto-resize to false
    'maintain_ratio': true,
};

export const widgetmetadatas = [    
    {
        'id': 1,
        'config': { 'dragHandle': '.handle', 'row': 1, 'col': 1, 'resizable': true },
        'name': 'Ambition',
        'src': '../../../assets/draggable/ambition_3.jpg',
        'routerLink': 'ambition'
    },
    {
        'id': 2,
        'config': { 'dragHandle': '.handle', 'row': 1, 'col': 2, 'resizable': true },
        'name': 'Apps',
        'src': '../../../assets/draggable/apps.png',
        'routerLink': 'apps'
    },
    {
        'id': 3,
        'config': { 'dragHandle': '.handle', 'row': 1, 'col': 3, 'resizable': false },
        'name': 'Cognition',
        'src': '../../../assets/draggable/self-assessment.png',
        'routerLink': 'know-thyself'
    },
    {
        'id': 4,
        'config': { 'dragHandle': '.handle', 'row': 1, 'col': 4, 'resizable': false },
        'name': 'Contact',
        'src': '../../../assets/draggable/contact.png',
        'routerLink': 'contact'
    },
    {
        'id': 5,
        'config': { 'dragHandle': '.handle', 'row': 2, 'col': 1, 'resizable': false },
        'name': 'Credentials',
        'src': '../../../assets/draggable/credentials.png',
        'routerLink': 'credentials'
    },    
    {
        'id': 6,
        'config': { 'dragHandle': '.handle', 'row': 2, 'col': 2, 'resizable': false },
        'name': 'Failure',
        'src': '../../../assets/draggable/failure.png',
        'routerLink': 'failures',
    },
    
    {
        'id': 7,
        'config': { 'dragHandle': '.handle', 'row': 2, 'col': 3, 'resizable': false },
        'name': 'Good Reads',
        'src': '../../../assets/draggable/good-reads.png',
        'routerLink': 'reading-list'
    },
    {
        'id': 8,
        'config': { 'dragHandle': '.handle', 'row': 2, 'col': 4, 'resizable': false },
        'name': 'Leadership',
        'src': '../../../assets/draggable/achieve.png',
        'routerLink': 'leadership'
    },
    {
        'id': 9,
        'config': { 'dragHandle': '.handle', 'row': 3, 'col': 1, 'resizable': false },
        'name': 'Resume',
        'src': '../../../assets/draggable/resume.png',
        'routerLink': 'resume'
    },
    {
        'id': 10,
        'config': { 'dragHandle': '.handle', 'row': 3, 'col': 2, 'resizable': false },
        'name': 'Success',
        'src': '../../../assets/draggable/success.png',
        'routerLink': 'successes'
    },
    {
        'id': 11,
        'config': { 'dragHandle': '.handle', 'row': 3, 'col': 3, 'resizable': false },
        'name': 'Travel',
        'src': '../../../assets/draggable/travel.png',
        'routerLink': 'travel-gallery'
    },
    {
        'id': 12,
        'config': { 'dragHandle': '.handle', 'row': 3, 'col': 4, 'resizable': false },
        'name': 'Writings',
        'src': '../../../assets/draggable/musings.png',
        'routerLink': 'writings',
    }
];
