import React, { useEffect, useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Alert,
  TouchableOpacity,
  StatusBar,
  Image
} from 'react-native';



// import PostCard from '../components/PostCard';
import ListItem from '../components/ListItem';


import  {Container}  from '../styles/FeedStyles';



const ListHeader = () => (
  <>
    <View style={styles.titleWrapper}>
        <Text style={styles.largeTitle}>Markets</Text>
      </View>
    <View style={styles.divider} />
  </>
)

const HomeScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  // const [data, setData] = useState([]);


  const [data, setData] = useState([]);
  const [selectedCoinData, setSelectedCoinData] = useState(null);


  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (



    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) => (
          <ListItem
            name={item.name}
            symbol={item.symbol}
            currentPrice={item.current_price}
            priceChangePercentage7d={item.price_change_percentage_24h}
            logoUrl={item.image}
            
          />
        )}
        ListHeaderComponent={<ListHeader />}
      />
      </SafeAreaView>

     




  //   <View style={{ flex: 1, padding: 24 }}>
  //   {isLoading ? <Text>Loading...</Text> : 
  //   ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
  //       <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.title}</Text>
  //       <FlatList
  //         data={data}
  //         keyExtractor={({ id }, index) => id}
  //         renderItem={({ item }) => (
  //           <ListItem
  //           name={item.name}
  //           symbol={item.symbol}
  //           currentPrice={item.current_price}
  //           priceChangePercentage7d={item.market_cap_change_percentage_24h}
  //           logoUrl={item.image}
            
  //         />
  //         )}
  //       />
  //     </View>
  //   )}
  // </View>


    // <Container>
    //     <FlatList
    //     data={Posts}
    //      renderItem={({item}) => <PostCard item={item}/>  }
    //      keyExtractor={item  => item.id}
    //      showsVerticalScrollIndicator={false}         
    //   />
    //   </Container> 
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleWrapper: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#A9ABB1',
    marginHorizontal: 16,
    marginTop: 16,
  },
  bottomSheet: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
export default HomeScreen;