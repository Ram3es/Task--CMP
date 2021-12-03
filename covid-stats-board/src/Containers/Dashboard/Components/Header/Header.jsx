import useStyles from "./styles"

const Header = () =>{
    const classes = useStyles()
 

    return <div>
        <div className={classes.div} >
            <img className={classes.photo} src="/assets/icons/logo.svg" alt="logo"/>
             <h1>STATISTIC</h1>  
        </div>
    </div>
}

export default Header