// Try on Modal ("ХОТИТЕ ПРИМЕРИТЬ ДАННУЮ МОДЕЛЬ ПЕРЕД ПОКУПКОЙ? ЛЕГКО!")
// console.log('Hello world');
import tryOnModelsModal from '../../../views/components/tryOnModelsModal.hbs';
import orderForm from '../../../views/components/orderForm.hbs';
import '../../../images/svg/try-on-modal/try-on-sprite.svg#icon-try-on-icon-1';

// create content for Try-One Modal which placed at Body (for example)
const body = document.querySelector('body');
body.insertAdjacentHTML('beforeend', tryOnModelsModal());

// add Order Form as second part of Try-One Modal content
const tryOnEl = document.querySelector('.try-on');
tryOnEl.insertAdjacentHTML('beforeend', orderForm());
// e:\для чайников\GoIT\Fullstack 37\projects\eleanshop\src\images\svg\try-on-modal\
