import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "400px",
    height: "300px",
    backgroundColor: "white",
    borderRadius: "20px",
  },
  wrapper: {
    width: "100%",
    height: "300px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "50px",
  },

  image: {
    display: "flex",
    margin: "20px 10px",
    width: "50%",
  },
  text: {
    marginLeft: "20px",
  },
  img: {
    width: "30px",
    maxHeight: "25px",
  },

  data: {
    marginRight: "20px",
  },
  h2: {
    marginLeft: "15px",
  },
}));
