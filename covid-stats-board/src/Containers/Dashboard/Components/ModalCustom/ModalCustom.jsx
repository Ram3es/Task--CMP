import useStyles from "./styles";
import { Modal } from "../../../../shared";
import Button from "@mui/material/Button";

const ModalCustom = ({ toggle, onClose }) => {
  const classes = useStyles();

  return toggle ? (
    <Modal>
      <div className={classes.paper}>
        <h2>Country</h2>
        <div className={classes.wrapper}>
          <div className={classes.container}>
            <div className={classes.image}>
              <img className={classes.img} src="/assets/icons/Confirmed.svg" alt="logo" />
              <div className={classes.text}>Total Confirmed</div>
            </div>
            <div className={classes.data}>213774</div>
          </div>
          <div className={classes.container}>
            <div className={classes.image}>
              <img className={classes.img} src="/assets/icons/Death.svg" alt="logo" />
              <div className={classes.text}>Total Death</div>
            </div>
            <div className={classes.data}>213774</div>
          </div>
          <div className={classes.container}>
            <div className={classes.image}>
              <img className={classes.img} src="/assets/icons/Recovered.svg" alt="logo" />
              <div className={classes.text}>Total Recovered</div>
            </div>
            <div className={classes.data}>213774</div>
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
