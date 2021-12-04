import { useSelector } from "react-redux";
import useStyles from "./styles";
import { Modal } from "../../../../shared";
import Button from "@mui/material/Button";
import { getCountryVavue } from "../../store";

const ModalCustom = ({ toggle, onClose }) => {
  const classes = useStyles();
  const { Country, TotalConfirmed, TotalRecovered, TotalDeaths } = useSelector(getCountryVavue());

  return toggle ? (
    <Modal>
      <div className={classes.paper}>
        <h2 className={classes.h2}>{Country}</h2>
        <div className={classes.wrapper}>
          <div className={classes.container}>
            <div className={classes.image}>
              <img className={classes.img} src="/assets/icons/Confirmed.svg" alt="logo" />
              <div className={classes.text}>Total Confirmed</div>
            </div>
            <div className={classes.data}>{TotalConfirmed}</div>
          </div>
          <div className={classes.container}>
            <div className={classes.image}>
              <img className={classes.img} src="/assets/icons/Death.svg" alt="logo" />
              <div className={classes.text}>Total Death</div>
            </div>
            <div className={classes.data}>{TotalDeaths}</div>
          </div>
          <div className={classes.container}>
            <div className={classes.image}>
              <img className={classes.img} src="/assets/icons/Recovered.svg" alt="logo" />
              <div className={classes.text}>Total Recovered</div>
            </div>
            <div className={classes.data}>{TotalConfirmed - TotalDeaths}</div>
          </div>
        </div>
        <Button
          onClick={() => onClose((state) => !state)}
          style={{ width: "100px", marginBottom: "10px" }}
          variant="contained"
        >
          Ok
        </Button>
      </div>
    </Modal>
  ) : null;
};

export default ModalCustom;
