import React, {Component} from "react";
import { View, Text,StyleSheet, Image, FlatList } from "react-native";
import PropTypes from "prop-types";
import ProfileThumbnail from "./ProfileThumbnail";

class ThumbnailList extends Component{

    render(){
        return(
            <View style={{flex: 1 }}>
                <FlatList
                    style={{flex:1}}
                    data={this.props.data}
                    renderItem={({item}) => (
                        <View style={styles.cardStyle}>
                        <ProfileThumbnail 
                            label={item.title.charAt(0)} 
                            backgroundColor={item.backgroundColor}
                            size={this.props.size}
                            imageURL={item.imageURL}
                            localImage={item.localImage}
                            textStyle={this.props.textStyle}/>
                            <View style={{
                                flex:1, 
                                flexDirection:"column", 
                                marginLeft:20, 
                                justifyContent:"center"
                                }}>
                                <Text numberOfLines={1} style={[{fontSize:20, color:"black"}, this.props.titleStyle]}>{item.title}</Text>
                                <Text numberOfLines={2} style={this.props.descriptionStyle}>{item.description}</Text>
                            </View>
                        </View>
                    )}
                    />
                
            </View>
        )
    }
    
    }
    ThumbnailList.defaultProps = {
        label: "A",
        size: 50,
        backgroundColor: "green",
        imageURL:"",
        data:[
            {
                title: "Java",
                description:"Java Description",
                backgroundColor:"green",   
            },
            {
                title: "React native",
                description:"React native Description",
                backgroundColor:"red",   
            },
            {
                title: "Java script",
                description:"Java script Description",
                backgroundColor:"blue",   
            }
        ],
        errors: false,
      };
    
      ThumbnailList.propTypes = {
        label: PropTypes.string,
        size: PropTypes.number,
        backgroundColor: PropTypes.string,
        imageURL: PropTypes.string,
        localImage: PropTypes.object,
        textStyle: PropTypes.object,
        descriptionStyle: PropTypes.object,
        titleStyle: PropTypes.object,
        data: PropTypes.array,
        
      };
      const styles = StyleSheet.create({
        cardStyle: {
            // shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 0
            },
            flex:1,
            padding:10,
            flexDirection:"row",
            alignItems:"center",
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            shadowOpacity: 0.2,
            shadowRadius: 2,
            elevation: 2,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 10,
            backgroundColor: "#fff"
          }
    
      });
    
    export default ThumbnailList;