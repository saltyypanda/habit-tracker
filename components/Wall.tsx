import { View, Image, StyleSheet } from "react-native"

const Wall = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/wall.png')}
                style={styles.image}
                resizeMode="contain"
            />
        </View>
    );
}

export default Wall;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    // marginVertical: 20,
  },
  image: {
    width: 500,
    height: 500,
  },
});
