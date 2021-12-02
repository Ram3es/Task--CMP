import {  Divider } from "@mui/material"
import useStyles from "./styles"

const Board = () =>{
  const classes = useStyles()

    return (
        <div>
        <div className={classes.toolbar}>
        <div style={{width:"20%,",marginLeft:"30px"}}><h3>№</h3></div>
        <Divider  classes={{root:classes.divider}} orientation="vertical" variant="fullWidth" flexItem />
        <div style={{width:"40%"}}><h3>Country</h3></div>
        <Divider classes={{root:classes.divider}} orientation="vertical" variant="fullWidth" flexItem  />
        <div style={{width:"40%"}}><h3>Total Confirmed</h3></div>
        </div>
      
    </div>
    )
}

export default Board