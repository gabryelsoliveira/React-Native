import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';
import Jobs from './components/Jobs';

class App extends Component{

  render(){
    let nome = 'Spider-Homem';
    let imagem = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM2T8Re9o-ueVaVz1gpMVvtVvsU_oaAQCtuteYjMuU6g&s=10';

    return(
      <View style={{flex:1, alignItems:"center", marginTop:20}}>
        <Text style={{marginTop:35}}>Olá
        </Text>

        <Jobs largura={250} altura={100} nome={nome} imagem={imagem}/>
      </View>
    );
  }
}

export default App;