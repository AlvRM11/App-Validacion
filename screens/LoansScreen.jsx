import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import spaceTraders from "../services/spaceTraders";

const LoansScreen = () => {
  const [loans, setLoans] = useState({});

    useEffect(() => {
      const getLoansInfo = async () => {
        try {
          const getLoansInfo = await spaceTraders.getAvailableLoans();
          console.log(getLoansInfo)
          setLoans(getLoansInfo);
        } catch (err) {
          console.log(err);
        }
      }

      getLoansInfo();
    }, []);

    const renderShips = () => {
      loans.map((key) => {
        return (
          <View style={{margin: 5}} key={key}>
            <Text>Amount: {loans.amount}</Text>
            <Text>Collateral Required: {!loans.collateralRequired ? 'No' : 'Yes'}</Text>
            <Text>Rate: {loans.rate}</Text>
            <Text>Term in Days: {loans.termInDays}</Text>
            <Text>Type: {loans.type}</Text>
          </View>
        );
      });
    };

  return (
    !loans ? <Text>Buscando datos...</Text> : renderShips()
  );
};

export default LoansScreen;