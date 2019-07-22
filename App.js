import React , {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';

export default class App extends Component {      

  constructor(props){
    super(props);
    this.state = {
      uri : require('./src/images/dice1.png')
    }
  }

  getRandomNumber = () => {
   return Math.floor(Math.random() * 6) + 1;
  }

  buttonPress = () => {
    var number = this.getRandomNumber();
    switch (number) {
      case 1:
        this.setState({uri: require('./src/images/dice1.png')})
        break;

      case 2:
        this.setState({uri: require('./src/images/dice2.png')})
        break;

      case 3:
          this.setState({uri: require('./src/images/dice3.png')})
          break;
      case 4:
        this.setState({uri: require('./src/images/dice4.png')})
        break;
      case 5:
        this.setState({uri: require('./src/images/dice5.png')})
        break;  
        
      case 6:
        this.setState({uri: require('./src/images/dice6.png')})
        break;

      case 1:
        this.setState({uri: require('./src/images/dice1.png')})
        break;


    
      default:
          require('./src/images/dice1.png')
        break;
    }
  }
  render(){

  
  return (
    <View style={styles.container}>
      <Image 
      source = {this.state.uri}
      />
      <TouchableOpacity onPress={this.buttonPress}>
      <Text style={styles.button}>Play game</Text>
      </TouchableOpacity>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EA7773',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    marginTop:100,
    borderWidth:2,
    color:'white',
    paddingVertical:5,
    paddingHorizontal:35,
    borderRadius:5,
    borderColor:'white',
    fontSize:25
  }
});
