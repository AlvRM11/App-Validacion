import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import spaceTraders from "../services/spaceTraders";

const HomeScreen = ({token}) => {
  const [profile, setProfile] = useState();

    useEffect(() => {
      const getProfile = async () => {
        try {
          const userProfile = await spaceTraders.getUserProfile(token);
          setProfile(userProfile);
        } catch (err) {
          console.log(err);
        }
      }

      getProfile();
    }, []);

  return (
    <View>
      {!profile ? <Text>Buscando datos...</Text> : <Text>User: {profile.user.username}</Text>}
      {!profile ? <Text>Buscando datos...</Text> : <Text>Ship Count: {profile.user.shipCount}</Text>}
      {!profile ? <Text>Buscando datos...</Text> : <Text>Structure Count: {profile.user.structureCount}</Text>}
      {!profile ? <Text>Buscando datos...</Text> : <Text>Credits: {profile.user.credits}</Text>}
      {!profile ? <Text>Buscando datos...</Text> : <Text>Joined At: {profile.user.joinedAt}</Text>}
    </View> 
  );
};

export default HomeScreen;