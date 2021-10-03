// Try on Modal ("ХОТИТЕ ПРИМЕРИТЬ ДАННУЮ МОДЕЛЬ ПЕРЕД ПОКУПКОЙ? ЛЕГКО!")
import refs from '../../refs/refs.js';
import backdrop from '../../../views/components/backdrop.hbs';
import tryOnModelsModal from '../../../views/components/tryOnModelsModal.hbs';
import orderForm from '../../../views/components/orderForm.hbs';
import '../../../images/svg/try-on-modal/try-on-sprite.svg#icon-try-on-icon-1';

// create content for Try-One Modal which placed at Body (for example)
refs.bodyEl.insertAdjacentHTML('beforeend', backdrop());

const formWrapper = document.querySelector('.form__wrapper');
formWrapper.insertAdjacentHTML('beforeend', tryOnModelsModal());

// add Order Form as second part of Try-One Modal content
const tryOnEl = document.querySelector('.try-on');
tryOnEl.insertAdjacentHTML('beforeend', orderForm());
