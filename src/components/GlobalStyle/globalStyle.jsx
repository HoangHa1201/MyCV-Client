
import '../../assets/FontAwesome-6.2-PRO/css/all.css';
import './globalStyle.scss'
import { getAllDataColor } from "../../data/ApiColor";

function GlobalStyles({children}) {
    function getStyleColor() {
        return new Promise((resolve, reject) => {
            resolve(getAllDataColor());
        });
    }
    getStyleColor()
        .then((data) => {
            const root = document.documentElement;
            data.map((item) => {
                root.style.setProperty(`--${item.title}`, item.method);
            });
        })
    return children;
}

export default GlobalStyles;