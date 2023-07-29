import Home from '../components/screen/Home/Home.jsx';
import Services from '../components/screen/Services/Services.jsx';
import Internet from '../components/screen/Services/SeviceDetail/ServicePages/Internet.jsx';
import Iptv from '../components/screen/Services/SeviceDetail/ServicePages/Iptv.jsx';
import Outsors from '../components/screen/Services/SeviceDetail/ServicePages/Outsors.jsx';
import Security from '../components/screen/Services/SeviceDetail/ServicePages/Security.jsx';
import Web from '../components/screen/Services/SeviceDetail/ServicePages/Web.jsx';

export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/services',
    component: Services,
  },
  {
    path: '/services/internet',
    component: Internet,
  },
  {
    path: '/services/security',
    component: Security,
  },
  {
    path: '/services/outsors',
    component: Outsors,
  },
  {
    path: '/services/web',
    component: Web,
  },
  {
    path: '/services/iptv',
    component: Iptv,
  },
];
