import { SafeAreaView, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

const BasicButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonArea} onPress={onPress}>
      <Text style={styles.text}> {text} </Text>
    </TouchableOpacity>
  );
};

export default BasicButton;