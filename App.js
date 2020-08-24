import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { DetailScreen, PostsScreen, UsersScreen } from "./screens";

UsersScreen.navigationOptions = {
  title: "Lista de Usuarios",
};

PostsScreen.navigationOptions = {
  title: "Loading...",
};

const AppNavigator = createStackNavigator(
  {
    Users: {
      screen: UsersScreen,
    },
    Posts: {
      screen: PostsScreen,
    },
    Detail: {
      screen: DetailScreen,
    },
  },
  {
    initialRouteName: "Users",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#eee",
        borderBottomWidth: 1,
        borderBottomColor: "#000",
      },
      headerTitleStyle: {
        fontWeight: "900",
        color: "#333",
      },
    },
  }
);

export default createAppContainer(AppNavigator);
