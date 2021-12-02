import useStyles from "./styles";
import {  Divider } from "@mui/material"
const CountryItem = ({Country, idx, confirmed}) =>{
  const classes = useStyles();
    return (
     <div>
        <div className={classes.toolbar}>
         <label style={{marginLeft:"30px",padding:"7px"}} >{idx + 1 }</label>
         <Divider  classes={{root:classes.divider}} orientation="vertical" variant="fullWidth" flexItem />
         <label  style={{width:"40%"}} >{Country}</label>
         <Divider  classes={{root:classes.divider}} orientation="vertical" variant="fullWidth" flexItem />
         <label  style={{width:"40%"}}>{confirmed}</label>
         </div>
     </div>
    )
}

export default CountryItem