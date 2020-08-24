import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function DetailScreen({ navigation }) {
  const body = navigation.getParam("body");
  const title = navigation.getParam("title");
  const username = navigation.getParam("name");

  DetailScreen.navigationOptions = {
    headerBackTitle: "Back",
  };

  return (
    <View style={styles.container}>
      <View style={styles.tituloContainer}>
        <Text style={styles.titulo}>{`${title}`}</Text>
        <View style={styles.contenido}>
          <Text style={styles.autor}>{`Autor: ${username}`}</Text>
          <View style={styles.body}>
            <Text style={styles.textoBody}>{body}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tituloContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  contenido: {
    padding: 10,
    marginTop: 5,
  },
  titulo: {
    fontWeight: "700",
    textAlign: "center",
    fontSize: 20,
  },
  autor: {
    fontSize: 18,
    marginBottom: 10,
  },
  body: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 25,
  },
  textoBody: {
    fontSize: 20,
    textAlign: "justify",
  },
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
