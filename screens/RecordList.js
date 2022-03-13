import { StyleSheet, Text, View,FlatList } from 'react-native';
import React,{useState}  from 'react'
import Record from './Record';

const RecordList = () => 
{
  const [data,setData]=useState([
    {
      d_id:13,
      d_type:3,
      creator_name:"sangimangi",
      creator_url:"https://i.pinimg.com/236x/cd/51/ac/cd51ac499066d012c5128a14bd356ecb.jpg",
      meme_url:"https://images.squarespace-cdn.com/content/v1/5d641c0fc8f92f0001cd9358/1568862118572-XTG3L4ETKWQZANH8WTTA/hodl+crypto+meme+2.jpg",
      likes:57,
    },
    {
      d_id:7,
      d_type:2,
      creator_name:"madan_gowri",
      creator_url:"https://i0.wp.com/hypebeast.com/image/2020/07/apple-memoji-update-headwear-masks-hairstyles-5.png?q=90&w=1090",
      question:"What's your view on ETH London Fork?",
      opt1:"Looks Awesome",
      opt2:"Cheap Scam",
      opt3:"Love the Buff",
      opt4:"Developer Love",
  },
    {
      d_id:14,
      d_type:3,
      creator_name:"Snake Babu",
      creator_url:"https://i.insider.com/5ba15375e361c01c008b5cf7?width=750&format=jpeg&auto=webp",
      meme_url:"https://www.letseatcake.com/wp-content/uploads/2021/04/Crypto-Memes-7.jpg",
      likes:29,
    },
    {
      d_id:1,
      d_type:1,
      creator_name:"dancing_rose",
      creator_url:"https://i.pinimg.com/474x/bf/57/02/bf57026ee75af2f414000cec322f7404.jpg",
      tip_type:"SELL",
      crypto_name:"ETH",
      price:"45,607",
  },
  {
    d_id:11,
    d_type:3,
    creator_name:"kaipulla",
    creator_url:"https://i.pinimg.com/236x/cd/51/ac/cd51ac499066d012c5128a14bd356ecb.jpg",
    meme_url:"https://ahseeit.com/finance/king-include/uploads/2021/02/146321993_171220831429324_8480702517982373399_n-7826964247.jpg",
    likes:57,
  },
    {
        d_id:3,
        d_type:1,
        creator_name:"Nesamani",
        creator_url:"https://i3.wp.com/hypebeast.com/image/2020/07/apple-memoji-update-headwear-masks-hairstyles-10.png?q=90&w=1090",
        tip_type:"SELL",
        crypto_name:"ETH",
        price:"607",
    },
    
      {
        d_id:5,
        d_type:1,
        creator_name:"jftamil",
        creator_url:"https://i3.wp.com/hypebeast.com/image/2020/07/apple-memoji-update-headwear-masks-hairstyles-3.png?q=90&w=1090",
        tip_type:"BUY",
        crypto_name:"ETH",
        price:"45,607",
    },
    {
        d_id:6,
        d_type:1,
        creator_name:"Soonaa Paanaa",
        creator_url:"https://i3.wp.com/hypebeast.com/image/2020/07/apple-memoji-update-headwear-masks-hairstyles-1.png?q=90&w=1090",
        tip_type:"BUY",
        crypto_name:"ETH",
        price:"607",
    },
  {
    d_id:8,
    d_type:2,
    creator_name:"jftamil",
    creator_url:"https://i0.wp.com/hypebeast.com/image/2020/07/apple-memoji-update-headwear-masks-hairstyles-5.png?q=90&w=1090",
    question:"What's your view on ETH London Fork",
    opt1:"option1",
    opt2:"option1",
    opt3:"option1",
    opt4:"option1",
},
{
  d_id:4,
  d_type:1,
  creator_name:"Sudalaimuthu",
  creator_url:"https://i0.wp.com/hypebeast.com/image/2020/07/apple-memoji-update-headwear-masks-hairstyles-5.png?q=90&w=1090",
  tip_type:"SELL",
  crypto_name:"ETH",
  price:"45,607",
},
{
  d_id:9,
  d_type:2,
  creator_name:"jftamil",
  creator_url:"https://i0.wp.com/hypebeast.com/image/2020/07/apple-memoji-update-headwear-masks-hairstyles-5.png?q=90&w=1090",
  question:"What's your view on ETH London Fork",
  opt1:"option1",
  opt2:"option1",
  opt3:"option1",
  opt4:"option1",
},
{
  d_id:10,
  d_type:3,
  creator_name:"jftamil",
  creator_url:"https://i0.wp.com/hypebeast.com/image/2020/07/apple-memoji-update-headwear-masks-hairstyles-5.png?q=90&w=1090",
  meme_url:"https://thumbor.granitemedia.com/dogecoin-meme/zL0xERz4lZJ97FZfJI5f6aIvnZM=/720x0/filters:quality(80)/granite-web-prod/68/81/688161b094384bca81f3340d9ba52850.jpeg",
  likes:43,
},

{
  d_id:12,
  d_type:3,
  creator_name:"jftamil",
  creator_url:"https://i.insider.com/5ba15375e361c01c008b5cf7?width=750&format=jpeg&auto=webp",
  meme_url:"https://img-9gag-fun.9cache.com/photo/ajmP8d1_460s.jpg",
  likes:29,
},
{
  d_id:2,
  d_type:1,
  creator_name:"jftamil",
  creator_url:"https://wallpapercave.com/wp/wp7021849.jpg",
  tip_type:"SELL",
  crypto_name:"ETH",
  price:"45,607",
},
    
  ]);
  return (
    <View style={styles.container}>
        <FlatList
          keyExtractor={(item)=>item.d_id}
          data={data}      
          renderItem={({item})=>(
              <Record item={item}/>
                )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(229,229,229)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50,
  },
});

export default React.memo(RecordList);