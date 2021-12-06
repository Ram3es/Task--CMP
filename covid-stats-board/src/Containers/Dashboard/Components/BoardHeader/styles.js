import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  divider: {
    backgroundColor: "white",
    width: "1px",
  },
  toolbar: {
    width: "98%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "15px",
    backgroundColor: "#3d8bd9",
    borderRadius: "20px",
    color: "white",
    boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.25)",
  },
  numeric: {
    padding: "7px",
    marginLeft: "30px",
    width: "30px",
  },
  label: {
    width: "40%",
    display: "flex",
    alignItems: "center",
  },
}));
