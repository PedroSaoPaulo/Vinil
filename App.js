import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [inputText2, setInputText2] = useState("");
  const [musicList, setMusicList] = useState([]);
  const [musicList2, setMusicList2] = useState([]);

  const appendItem = () => {
    setMusicList((previousMusics) => {
      return [...previousMusics, inputText];
    });
    setInputText("");
  };

  const appendItem2 = () => {
    setMusicList2((previousMusics) => {
      return [...previousMusics, inputText2];
    });
    setInputText2("");
  };

  const deleteItem = (id) => {
    setMusicList((previousMusics) => {
      return previousMusics.filter((item, index) => {
        return index !== id;
      });
    });
  };

  const deleteItem2 = (id) => {
    setMusicList2((previousMusics) => {
      return previousMusics.filter((item, index) => {
        return index !== id;
      });
    });
  };

  const renderMusics = ({ item, index }) => (
    <View style={styles.musicContainer}>
      <View stlye={styles.musicNameContainer}>
        <Text style={styles.musicName}>{item}</Text>
      </View>

      <View style={styles.deleteIconContainer}>
        <TouchableOpacity
          onPress={() => {
            deleteItem(index);
          }}
        >
          <Feather style={styles.deleteIcon} name="x" size={12} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.appHeader}>
        <View style={styles.appIconContainer}>
          <FontAwesome
            style={styles.appIcon}
            name="music"
            size={28}
            color="black"
          />
        </View>

        <View style={styles.appNameContainer}>
          <Text style={styles.appName1}>Vinil </Text>
          <Text style={styles.appName2}>App</Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            value={inputText}
            onChangeText={setInputText}
            style={styles.textInput}
            placeholder="Informe sua música"
            placeholderTextColor={"#569DAA"}
          />
        </View>
        <View style={styles.inputSubmitContainer}>
          <Button onPress={appendItem} color="#569DAA" title="OK" />
        </View>
      </View>

      <View style={styles.flatListContainer}>
        <FlatList numColumns={3} data={musicList} renderItem={renderMusics} />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            value={inputText2}
            onChangeText={setInputText2}
            style={styles.textInput}
            placeholder="Momentos adicionais"
            placeholderTextColor={"#569DAA"}
          />
        </View>
        <View style={styles.inputSubmitContainer}>
          <Button onPress={appendItem2} color="#569DAA" title="OK" />
        </View>
      </View>

      <ScrollView>
        {musicList2.map((music, index) => {
          return (
            <View style={styles.musicContainer}>
              <View stlye={styles.musicNameContainer}>
                <Text style={styles.musicName}>{music}</Text>
              </View>

              <View style={styles.deleteIconContainer}>
                <TouchableOpacity
                  onPress={() => {
                    deleteItem2(index);
                  }}
                >
                  <Feather
                    style={styles.deleteIcon}
                    name="x"
                    size={12}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B9EDDD",
    alignItems: "center",
  },

  appHeader: {
    flexDirection: "row",
    marginTop: 30,
  },

  appIconContainer: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    textShadowColor: "rgba(255, 255, 255, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },

  appIcon: {
    color: "#569DAA",
  },

  appNameContainer: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    textShadowColor: "rgba(255, 255, 255, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },

  appName1: {
    fontFamily: "Helvetica",
    fontWeight: "bold",
    fontSize: 32,
    color: "#577D86",
  },

  appName2: {
    fontFamily: "Helvetica",
    fontWeight: "bold",
    fontSize: 32,
    color: "#569DAA",
  },

  inputContainer: {
    flexDirection: "row",
  },

  textInputContainer: {
    margin: 5,
    justifyContent: "center",
  },

  textInput: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  inputSubmitContainer: {
    margin: 5,
    justifyContent: "center",
  },

  flatListContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  musicContainer: {
    padding: 5,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },

  musicName: {
    fontSize: 16,
    color: "#577D86",
    fontWeight: "bold",
  },

  deleteIconContainer: {
    justifyContent: "center",
    marginLeft: 5,
    padding: 10,
  },

  deleteIcon: {
    color: "red",
  },

  flatListContainer: {
    width: "100%",
  },
});
