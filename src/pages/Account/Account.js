import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import style from "../../assets/scss/Account.module.scss";

export default function Account() {
    const getData = (value) => {
        console.log(value);
    }
    return (<>
        <Suspense fallback={<div>Loading...</div>}>
            <div className={[style.wrapper, "d-flex justify-content-center align-items-center vh-100"].join(' ')}>
                <div className={"container"}>
                    <div className={"position-relative"}>
                        <div className={[style.account, "w-100"].join(' ')}>
                            <div className={["d-flex justify-content-between align-items-center h-100 p-3"]}>
                                <div className={[style.logo,"ps-3"].join(" ")}>
                                    Cart <span>Bliss</span>
                                </div>
                                <div className={""}>B</div>
                            </div>
                        </div>
                        <Outlet getDataVal={getData} />
                    </div>
                </div>
            </div>
        </Suspense>
    </>)
}
