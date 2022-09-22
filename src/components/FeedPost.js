import { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, } from 'react-native';
import LikeImage from "../../assets/images/like.png"

import {
  Entypo,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


const FeedPost = ({post}) => {
  const [isLiked, setIsLiked] = useState(false)
  const navigation  = useNavigation()
  return (
      <Pressable style= {styles.post}>
        {/* Header */}
        <Pressable 
        style={styles.header} 
        onPress={() => navigation.navigate("Profile", {id: post.User.id})}>
        <Image source={{uri:post.User.image}} style={styles.profileImage}/>
        <View>
          <Text style={styles.name}>{post.User.name}</Text>
          <Text style={styles.subtitle }>{post.createdAt}</Text>
        </View>
        <Entypo 
          name="dots-three-horizontal" 
          size={18} 
          color="gray" 
          style={styles.icon} 
         />
        </Pressable>

        {/* Body  */}
        {post.description && <Text style={styles.description}>{post.description}</Text>}
       {post.image && <Image source={{uri: post.image}} style={styles.image}/>}

        {/* Footer  */}
        <View style={styles.footer}>

          {/* Stats Row  */}
          <View style={styles.statsRow}>
            <Image style ={styles.likeIcon} source={LikeImage}/>
            <Text style={styles.likedBy}>Elon Musk and {post.numberOfLikes} other </Text>
            <Text style={styles.shares}>{post.numberOfShares} shares</Text>
          </View>

          {/* Buttons Row  */}
          <View style={styles.buttonsRow}>
            <Pressable 
            onPress={() => setIsLiked(!isLiked)} style={styles.iconButton}
            >
              <AntDesign 
              name="like2" 
              size={18} 
              color={ isLiked ? "royalblue":"gray"}/>
              <Text 
              style={[styles.iconButtonText, { color: isLiked ? "royalblue":"gray"},
              ]}
            >
              Like
              </Text>
            </Pressable>
            <View style={styles.iconButton}>
              <FontAwesome5 
              name="comment-alt" 
              size={18} 
              color="gray"
              />
              <Text style={styles.iconButtonText}>Comment</Text>
            </View>
            <View style={styles.iconButton}>
              <MaterialCommunityIcons name="share-outline" size={18} color="gray"/>
              <Text style={styles.iconButtonText}>Share</Text>
            </View>
          </View>
        </View>
    </Pressable>
  );
}


const styles = StyleSheet.create({
  // Header Style 
  post:{
    width: "100%",
    // marginVertical:10,
    backgroundColor: "#fff"
  },
  header:{
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  profileImage:{
    width: 40,
    height:40,
    borderRadius:25,
    marginRight: 10
  }, 
  name:{
    fontWeight: "500"
  },
  subtitle:{
    color: "gray"
  },
  icon:{
      marginLeft: "auto"
  },

  // Body Style 
  description:{
    paddingHorizontal:10,
    lineHeight: 20,
    letterSpacing: 0.3
  },
  image:{
   width: "100%",
   aspectRatio: 1,
   marginTop: 10
  },

  // Footer 
  footer:{
    paddingHorizontal:10
  },
  statsRow:{
    paddingVertical:10,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgray" 
  },
  likeIcon:{
      width: 20,
      height: 20,
      marginRight:5
  },
  likedBy:{
    color: "gray"
  },
  shares:{
    marginLeft: "auto",
    color: "gray"
  },

  // ButtonRow
  buttonsRow:{
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  iconButton:{
    flexDirection: "row",
    alignItems: "center"
  },
  iconButtonText:{
    marginLeft: 5,
    color: "gray",
    fontWeight: "500"
  }
});


export default FeedPost;