import { Image } from "react-native";
import { styles } from "./styles";
import logo from "../../../assets/images/logo.png"; 

const Logo = () => {
  return <Image source={logo} style={styles.logo} />;
};

export default Logo;