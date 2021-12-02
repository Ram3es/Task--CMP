import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme)=>({
  divider:{
    backgroundColor:"white",
    width:"1px"
  },
  toolbar:{
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      marginBottom:"10px",
      backgroundColor:"#3d8bd9",
      borderRadius:"20px",
      color: "white",
      boxShadow:" 0px 2px 4px rgba(0, 0, 0, 0.25)"


  }
}))