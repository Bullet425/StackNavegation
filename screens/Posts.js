import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import ListItem from "../components/ListItem";

export default function PostsScreen({ navigation }) {
  const nombre = navigation.getParam("name");

  const userId = navigation.getParam("user_id");
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  PostsScreen.navigationOptions = {
    title: `${nombre}`,
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Cargando...</Text>
      ) : (
        <FlatList
          style={styles.list}
          data={posts.filter((x) => x.userId === userId)}
          keyExtractor={(x) => String(x.id)}
          renderItem={({ item }) => (
            <ListItem
              onPress={() =>
                navigation.navigate("Detail", {
                  title: item.title,
                  body: item.body,
                  name: nombre,
                })
              }
              title={`Post ${item.id}: ${item.title}`}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    alignSelf: "stretch",
  },
});
