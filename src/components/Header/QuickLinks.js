import style from './Header.module.scss';

const QuickLinks = () => {
  return <>
    <div className={[style.quicklink, "d-flex justify-content-end ps-4"].join(" ")}>
      <div className={"text-center px-3"}>
        <i className="bi bi-heart"></i>
        <h5 className={'mb-0'}>Wish List</h5>
      </div>
      <div className={"text-center px-3"}>
        <i className="bi bi-cart"></i>
        <h5 className={'mb-0'}>Cart</h5>
      </div>
      <div className={"text-center ps-3"}>
        <i className="bi bi-person"></i>
        <h5 className={'mb-0'}>Sign In</h5>
      </div>
    </div>
  </>
}

export default QuickLinks;