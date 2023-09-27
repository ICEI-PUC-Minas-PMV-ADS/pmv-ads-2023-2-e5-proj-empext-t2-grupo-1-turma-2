import { SafeAreaView, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

const BasicButton = ({ text }) => {
  return (
    <TouchableOpacity style={styles.buttonArea}>
      <Text style={styles.text}> {text} </Text>
    </TouchableOpacity>
  );
};

export default BasicButton;