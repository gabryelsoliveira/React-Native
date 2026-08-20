import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';
import Jobs from './components/Jobs';

class App extends Component{

  render(){
    let nome = 'Batemim';
    let imagem = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNoE1DISBu-GA9t0dR9G-vgfaNRrABqqdeSJ1JKRK_Aw&s=10';

    return(
      <View style={{flex:1, alignItems:"center", marginTop:20}}>
        <Text style={{marginTop:35}}>Olá
        </Text>

        <Jobs largura={250} altura={400} nome={nome} imagem={imagem}/>
      </View>
    );
  }
}

export default App;