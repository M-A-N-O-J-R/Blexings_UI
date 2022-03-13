import { StyleSheet, Text, View,TouchableOpacity,ImageBackground,Image} from 'react-native';
import { Avatar } from 'react-native-elements';
import { Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Record = ({item}) => 
{
  const type=item.d_type;
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const image = { uri: "https://docs.expo.dev/static/images/tutorial/splash.png" };
  if(type==1)
  {
    return (
        <TouchableOpacity style={[styles.container,styles.boxWithShadow]}>
            <View style={styles.header}>
                <Avatar
                        size={35}
                        rounded
                        source={item.creator_url ? { uri: item.creator_url } : {}}
                        containerStyle={{backgroundColor: 'white'}}
                    />
                <Text style={{fontSize:10,marginLeft:2}}>@{item.creator_name}</Text>
            </View>
            <View>
                <Text style={{fontSize:15,textAlign:'center',lineHeight: 25}}>Should I "{item.tip_type}" {item.crypto_name} at {'\n'}  ${item.price}</Text>
            </View>
            {
              item.tip_type=="SELL"?
              <View style={styles.btnCont}>
                <TouchableOpacity
                    style={styles.btn1}
                ><Text style={{color:"white"}}>SELL</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn2}
                ><Text style={{color:"white"}}>HODL</Text>
                </TouchableOpacity>
              </View>:
              <View style={styles.btnCont}>
              <TouchableOpacity
                    style={styles.btn1}
                ><Text style={{color:"white"}}>BUY</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn2}
                ><Text style={{color:"white"}}>WAIT</Text>
                </TouchableOpacity>
              </View>}
        </TouchableOpacity>
      );
  }
  else if(type==2)
  {
    return (
        <TouchableOpacity style={[styles.container,styles.boxWithShadow]}>
            <View style={styles.header}>
                <Avatar
                        size={35}
                        rounded
                        source={item.creator_url ? { uri: item.creator_url } : {}}
                        containerStyle={{backgroundColor: 'white'}}
                    />
                <Text style={{fontSize:10,marginLeft:2}}>@{item.creator_name}</Text>
                
            </View>
            <View style={styles.qa}>
                <Text style={{fontSize:13,textAlign:'left',padding:7}}>{item.question}</Text>
                <View>
                    <View style={styles.option}>
                        <Text style={{fontSize:28}}>{'\u25E6'}</Text>
                        <Text style={{fontSize:11,textAlign:'left',padding:1}}>{item.opt1}</Text>
                    </View>
                    <View style={styles.option}>
                        <Text style={{fontSize:28}}>{'\u25E6'}</Text>
                        <Text style={{fontSize:11,textAlign:'left',padding:1}}>{item.opt2}</Text>
                    </View>
                    <View style={styles.option}>
                        <Text style={{fontSize:28}}>{'\u25E6'}</Text>
                        <Text style={{fontSize:11,textAlign:'left',padding:1}}>{item.opt3}</Text>
                    </View>
                    <View style={styles.option}>
                        <Text style={{fontSize:28}}>{'\u25E6'}</Text>
                        <Text style={{fontSize:11,textAlign:'left',padding:1}}>{item.opt4}</Text>
                    </View>
                </View>
            </View>
            

        </TouchableOpacity>
      );
  }
  else
  {
    return (
        <TouchableOpacity style={[styles.container,styles.boxWithShadow]}>
            <View style={styles.header}>
                <Avatar
                        size={35}
                        rounded
                        source={item.creator_url ? { uri: item.creator_url } : {}}
                        containerStyle={{backgroundColor: 'white'}}
                    />
                <Text style={{fontSize:10,marginLeft:2}}>@{item.creator_name}</Text>
                <View style={styles.itemLove}>
                            <Text style={styles.iconT}>{item.likes}</Text>
                            <AntDesign name="heart" size={15} color="rgb(217,17,54)" />
                </View>
            </View>
            <ImageBackground  source={{uri:item.meme_url}} style={styles.imgCont} resizeMode="cover" imageStyle={{ borderRadius: 12 }}>
            </ImageBackground>
        </TouchableOpacity>
      );
  }
  
}

const styles = StyleSheet.create({
    imgCont:
    {
        backgroundColor:'pink',
        height:320,
        width:320,
        borderRadius:15
    },
    option:{
        flexDirection:'row',
        alignItems:'center',
    },
    qa:{
        // backgroundColor:'yellow',
        padding:7,
        width:'100%',
        alignItems:'flex-start'
    },
    boxWithShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 2
    },
  btnCont:{
    // backgroundColor:'blue',
    flexDirection:'row',
    width:'88%',
    justifyContent:'space-evenly',
    alignItems:'center',
    marginTop:15,
  },
  btn1:{
    width:105,
    height:35,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:9,
    backgroundColor:"rgb(125,168,29)"
  },
  btn2:{
    width:105,
    height:35,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:9,
    backgroundColor:"rgb(217,17,54)"
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(255,255,255)',
    alignItems: 'center',
    minHeight:185,
    marginBottom:15,
    width:350,
    borderRadius:16,
    padding:20,
  },
  header:{
    flexDirection:"row",
    // backgroundColor:"pink",
    alignItems:"center",
    width:"100%",
    justifyContent:'flex-start',
    marginBottom:8,
  },
  likeLove:
    {
        flexDirection:'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        

    },
    itemLove:
    {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-evenly',
        width:'17%',
        padding:5,
        marginLeft:'55%'
    },
    iconT:
    {
        fontSize:12,
    },
});

export default Record;