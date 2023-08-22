import "./AboutProject.css";

function aboutProject() {
return(
<section className="about-project">
  <h2 className="about-project__title">О проекте</h2>
  <div className="about-project__container">
    <div className="about-project__info">
      <p className="about-project__subtitle">Дипломный проект включал 5 этапов</p>
      <p className="about-project__text">
        Составление плана, работу над бэкендом, вёрстку, добавление
        функциональности и финальные доработки.
      </p>
    </div>
    <div className="about-project__info">
      <p className="about-project__subtitle">На выполнение диплома ушло 5 недель</p>
      <p className="about-project__text">
        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
        соблюдать, чтобы успешно защититься.
      </p>
    </div>
  </div>
  <div className="about-project__container">
    <div className="about-project__timeline">
      <div className="about-project__timeline-title">1 неделя</div>
      <p className="about-project__timeline-text">Back-end</p>
    </div>
    <div className="about-project__timeline">
      <div className="about-project__timeline-title about-project__timeline-title_type_light">
        4 недели
      </div>
      <p className="about-project__timeline-text">Front-end</p>
    </div>
  </div>
</section>
)
}
export default aboutProject;