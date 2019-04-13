import React, {Component} from "react";
import { View, Text, Image } from "react-native";
import PropTypes from "prop-types";

class ProfileThumbnail extends Component{

    render(){
        
        return(
            <View>
            {((this.props.imageURL === "" || this.props.imageURL === undefined) && (this.props.localImage === "" || this.props.localImage === undefined)) ? (
                <View 
                    style={{ 
                        height:this.props.size, 
                        width:this.props.size, 
                        justifyContent:"center",
                        borderRadius:(this.props.size/2), 
                        justifyContent:"center",
                        backgroundColor:this.props.backgroundColor
                    }} 
                    >
                    <Text style={[{textAlign:"center", alignSelf:"center", textAlignVertical:"center", fontSize:26, color:"white"}, this.props.textStyle]}>{this.props.label.charAt(0)}</Text>
                </View>
            ) : (
                (this.props.localImage === "" || this.props.localImage === undefined) ? (
                <Image 
                    style={{
                        height:this.props.size, 
                        width:this.props.size, 
                        justifyContent:"center",
                        borderRadius:(this.props.size/2), 
                    }}
                    source={{uri: this.props.imageURL}}
                />
                ) : (
                <Image 
                    style={{
                        height:this.props.size, 
                        width:this.props.size, 
                        justifyContent:"center",
                        borderRadius:(this.props.size/2), 
                    }}
                    source={this.props.localImage}
                />
                )
            )}
            </View>
        )
    }
    
    }
      ProfileThumbnail.defaultProps = {
        label: "A",
        size: 50,
        backgroundColor: "green",
        imageURL:"",
        errors: false
      };
    
      ProfileThumbnail.propTypes = {
        label: PropTypes.string,
        size: PropTypes.number,
        backgroundColor: PropTypes.string,
        imageURL: PropTypes.string,
        localImage: PropTypes.object,
        textStyle: PropTypes.object,
        errors: PropTypes.bool,
        
        
      };
    export default ProfileThumbnail;