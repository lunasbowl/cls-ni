import HomePage from '../pages/HomePage';
import Constitution from '../pages/Constitution/Constitution';
import History from '../pages/History/History';
import Events from '../pages/Events/Events';
import ManagementCommittee from '../pages/ManagementCommittee/ManagementCommittee';
import ParentCommittee from '../pages/ParentCommittee/ParentCommittee';
import Teachers from '../pages/Teachers/Teachers';
import Policy from '../pages/Policy/Policy';
import HiringPage from '../pages/Events/HiringPage/HiringPage';
import Admissions2026Page from '../pages/Events/Admissions2026/Admissions2026Page';

const routesById = {
  home: {
    id: 'home',
    path: '/',
    labelKey: 'home',
    Component: HomePage,
  },
  constitution: {
    id: 'constitution',
    path: '/about-constitution',
    labelKey: 'constitution',
    Component: Constitution,
  },
  history: {
    id: 'history',
    path: '/about-history',
    labelKey: 'history',
    Component: History,
  },
  events: {
    id: 'events',
    path: '/events',
    labelKey: 'events',
    Component: Events,
  },
  managementCommittee: {
    id: 'managementCommittee',
    path: '/about-management-committee',
    labelKey: 'management-committee',
    Component: ManagementCommittee,
  },
  parentCommittee: {
    id: 'parentCommittee',
    path: '/about-parent-committee',
    labelKey: 'parent-committee',
    Component: ParentCommittee,
  },
  teachers: {
    id: 'teachers',
    path: '/about-faculty-and-staff',
    labelKey: 'teachers',
    Component: Teachers,
  },
  policy: {
    id: 'policy',
    path: '/policy',
    labelKey: 'policy',
    Component: Policy,
  },
  hiring: {
    id: 'hiring',
    path: '/hiring',
    Component: HiringPage,
  },
  admissions2026: {
    id: 'admissions2026',
    path: '/admissions-2026',
    Component: Admissions2026Page,
  },
};

export const appRoutes = Object.values(routesById);

export const navigationItems = [
  {
    type: 'link',
    routeId: 'home',
  },
  {
    type: 'group',
    labelKey: 'about',
    children: [
      'constitution',
      'history',
      'managementCommittee',
      'teachers',
      'parentCommittee',
    ],
  },
  {
    type: 'link',
    routeId: 'events',
  },
  {
    type: 'link',
    routeId: 'policy',
  },
];

export function getRouteById(routeId) {
  return routesById[routeId];
}
