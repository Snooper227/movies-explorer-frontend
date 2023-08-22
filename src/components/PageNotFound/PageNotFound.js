import './PageNotFound.css';

function PageNotFound() {
    return (
        <section className='pageNotFound'>
            <h1 className='pageNotFound__title'>404</h1>
            <p className='pageNotFound__subtitle'>Страница не найдена</p>

            <button className='pageNotFound__button'>Назад</button>
        </section>
    )
}
export default PageNotFound;