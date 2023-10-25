import previewImg from "../../img/preview__img.png";
import "../preview/preview.scss";

export const Preview = (props) => {
  console.log(props.language);
  return (
    <div className="main__preview container">
      <div className="preview__text">
        <h2 className="preview__title">Mind As Engine (MAE)</h2>

        {props.language == "RU" ? (
          <p>
            В Республике Узбекистан МАЕ реализует проекты в следующих областях,
            системы корпоративного обучения BilimBank, разрабатывает цифровые
            технологические решения для Uzmetall, Института ядерной физики
            Академии наук Узбекистана, разрабатывает системы обучения и
            управления сельскохозяйственными дронами проекта HUMOUN,
            консультирует международные компании в части трансфера технологий и
            цифровизации.
          </p>
        ) : (
          <p>
            In the Republic of Uzbekistan, MAY implements projects in the
            following areas, BilimBank corporate training systems, develops
            digital technological solutions for Uzmetall, the Institute of
            Nuclear Physics Academy of Sciences of Uzbekistan, develops training
            and management systems for agricultural drones of the HUMOUN
            project, advises international companies in terms of technology
            transfer and digitalization.
          </p>
        )}
      </div>
      <img className="prewiev__img" src={previewImg} alt="" />
    </div>
  );
};
