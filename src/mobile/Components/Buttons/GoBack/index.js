import { Image, SafeAreaView, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import goback from "../../../assets/icons/Arrow.png";

const GoBack = ({ onPress }) => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image source={goback} style={styles.goback} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default GoBack;