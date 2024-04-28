import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import AppMapView from './AppMapView'
import Header from './Header'
import SearchBar from './SearchBar'
import { UserLocationContext } from '../../Context/UserLocationContext'
import GlobalApi from '../../Utils/GlobalApi'

export default function HomeScreen() {

  // const {location,setLocation} = useContext(UserLocationContext);
  // const GetNearByPlace=()=>{
  //   GlobalApi.NewNearByPlace(data).then(resp=>{
  //     console.log(resp.data);
  //   })
  // }
  return (
    <View>
      <View style={styles.headerContainer}>
        <Header />
        <SearchBar />
      </View>
     <AppMapView />
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer:{
    position:'absoulte',
    zIndex:10,
    padding:10,
    width:'100%',
    paddingHorizontal:20

  }
})