import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  divider: {
    backgroundColor: "whiteblack",
    width: "1px",
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "5px",
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    color: "black",
    boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.25)",
  },
  numeric: {
    padding: "7px",
    marginLeft: "22px",
    width: "30px",
  },
  label: {
    width: "40%",
  },
}));
