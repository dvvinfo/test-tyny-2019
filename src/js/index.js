import nav from './modules/nav.js';
import validateForm from './modules/form-valiedate.js'
import slider from './modules/slider'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();
nav();

validateForm()
