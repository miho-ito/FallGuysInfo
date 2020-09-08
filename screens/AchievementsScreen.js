import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import ListItem from "../components/ListItem";
import axios from "axios";

const URL =
  "https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=D774563617182531CBC4F3ED026A45C6&appid=1097150";

export default AchievementsScreen = () => {
  const [achievements, setAchievements] = useState([]);
  useEffect(() => {
    fetchAchievements();
  }, []);

  const fetchAchievements = async () => {
    try {
      const response = await axios.get(URL);
      setAchievements(response.data.game.availableGameStats.achievements);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={achievements}
        renderItem={({ item }) => (
          <ListItem
            title={item.displayName}
            imageUrl={item.icon}
            author={item.description}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        key={(item, index) => index}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
