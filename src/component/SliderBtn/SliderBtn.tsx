import s from './SliderBtn.module.scss';

export const SliderBtn = () => {
  return <input className={s.input_range} type="range" min={4} max={64} />;
};
