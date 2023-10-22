import { Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import logo from "../../assets/images/logo.png"; 



const Logo = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={logo} style={styles.logo} />
    </TouchableOpacity>
  );
};

export default Logo;