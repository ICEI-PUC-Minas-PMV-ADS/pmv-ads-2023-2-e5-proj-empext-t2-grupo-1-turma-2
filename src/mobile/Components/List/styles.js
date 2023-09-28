import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  borderArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#00a651",
    borderRadius: 15,
    width: 263,
    height: 70,
    marginBottom: 20,
  },
  buttonImage: {
    height: 56,
    width: 56,
    borderRadius: 15
  },
  buttonText: {
    color: "#00a651",
    fontSize: 16,
    textAlign: "center"
  },
  fab: {
    backgroundColor: "#00a651",
  },
});