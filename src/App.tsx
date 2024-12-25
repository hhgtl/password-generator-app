import s from './App.module.scss';
import { CheckBoxBtn } from './component/CheckBoxBtn/CheckBoxBtn';
import { PasswordWindow } from './component/PasswordWindow/PasswordWindow';
import { SliderBtn } from './component/SliderBtn/SliderBtn';

function App() {
  return (
    <div className={s.App}>
      <div className={s.inputWrapper}>
        <div className={`${s.reliability_text} ${s.green}`}>Надежный</div>
        <PasswordWindow />
      </div>
      <div className={s.password_generation_panel}>
        <span>Длина пароля</span>
        <input className={s.password_input_number} type="number" />
        <SliderBtn />
      </div>
      <div className={s.CheckBoxBtn_container}>
        <CheckBoxBtn title="Верхний регистр" />
        <CheckBoxBtn title="Нижний регистр" />
        <CheckBoxBtn title="Цифры" />
        <CheckBoxBtn title="Символы" />
      </div>
    </div>
  );
}

export default App;
