import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import spaceTraders from "../services/spaceTraders";

const ShipScreen = () => {
  const [ships, setShips] = useState();

    useEffect(() => {
      const getships = async () => {
        try {
          const getships = await spaceTraders.getAvailableShips();
          console.log(getships)
          setShips(getships);
        } catch (err) {
          console.log(err);
        }
      }

      getships();
    }, []);

    const renderShips = () => {
      ships.map((key) => {
        return (
          <View style={{margin: 5}} key={key}>
            {!ships ? <Text>Buscando datos...</Text> : <Text>Class: {ships.ships.class}</Text>}
            {!ships ? <Text>Buscando datos...</Text> : <Text>Manufacturer: {ships.ships.manufacturer}</Text>}
            {!ships ? <Text>Buscando datos...</Text> : <Text>Max Cargo: {ships.ships.maxCargo}</Text>}
            {!ships ? <Text>Buscando datos...</Text> : <Text>Plating: {ships.ships.plating}</Text>}
            {!ships ? <Text>Buscando datos...</Text> : <Text>Speed: {ships.ships.speed}</Text>}
            {!ships ? <Text>Buscando datos...</Text> : <Text>Type: {ships.ships.type}</Text>}
            {!ships ? <Text>Buscando datos...</Text> : <Text>Weapons: {ships.ships.weapons}</Text>}
          </View>
        );
      });
    };

  return (
    renderShips()
  );
};

export default ShipScreen;