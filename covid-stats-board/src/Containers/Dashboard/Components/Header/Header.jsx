import useStyles from "./styles";
import { SearchBar } from "../SearchBar";

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.div}>
        <img className={classes.photo} src="/assets/icons/logo.svg" alt="logo" />
        <h1>STATISTIC</h1>
      </div>
      <div className={classes.search}>
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
