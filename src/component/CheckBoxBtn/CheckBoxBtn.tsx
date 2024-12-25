import s from './CheckBoxBtn.module.scss';

type CheckBoxBtnProps = {
  title: string;
};

export const CheckBoxBtn = ({ title }: CheckBoxBtnProps) => {
  return (
    <div className={s.input_checkbox_wrapper}>
      <input className={s.input_checkbox} type="checkbox" />
      <span className={s.checkbox_title}>{title}</span>
    </div>
  );
};
