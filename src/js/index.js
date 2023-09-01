import nav from './modules/nav.js';
import validateForm from './modules/form-valiedate.js'
import slider from './modules/slider'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();
nav();

validateForm()

