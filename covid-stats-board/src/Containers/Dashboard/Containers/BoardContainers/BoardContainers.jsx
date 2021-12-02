import { Header, Board, Countries } from "../../"
import useStyles from "./styles"

const BoardContainers = () => {
    const clasess = useStyles()


    return(
<div className={clasess.root}>
    <Header />
    <div>
    <Board />
    <Countries/>
    </div>
</div>
    )}

export default BoardContainers