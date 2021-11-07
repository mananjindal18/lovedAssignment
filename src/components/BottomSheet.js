import React from "react";
import { View, Text, Image, Button,TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {icons, COLORS} from '../constants';
const BottomSheet = () => {
    const navigation = useNavigation(); 
    return (
        <ScrollView style={{ }}>
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('Details')}>
                <View style={{height:80,width:'20%',justifyContent:'center'}}>
                    <Image
                        source={icons.transferCash}
                        style={{height:50,width:50,borderRadius:25}}
                    />
                </View>
                <View style={{width:'80%',justifyContent:'center'}}>
                    <View>
                        <Text style={{color:'black'}}>Transfer Cash</Text>
                    </View>
                    <View>
                        <Text>Add and withdraw cash</Text>
                    </View>
                    
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('Details')}>
                <View style={{height:80,width:'20%',justifyContent:'center'}}>
                    <Image
                        source={icons.saveForSomethingNew}
                        style={{height:50,width:50,borderRadius:25}}
                    />
                </View>
                <View style={{width:'80%',justifyContent:'center'}}>
                    <View>
                        <Text style={{color:'black'}}>Save for something new</Text>
                    </View>
                    <View>
                        <Text>Save & invest towards something in the future</Text>
                    </View>
                    
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('Details')}>
                <View style={{height:80,width:'20%',justifyContent:'center'}}>
                    <Image
                        source={icons.invite}
                        style={{height:50,width:50,borderRadius:25}}
                    />
                </View>
                <View style={{width:'80%',justifyContent:'center'}}>
                    <View>
                        <Text style={{color:'black'}}>Invite Cameron</Text>
                    </View>
                    <View>
                        <Text>Give Cameron access to link to their account</Text>
                    </View>
                    
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('Details')}>
                <View style={{height:80,width:'20%',justifyContent:'center'}}>
                    <Image
                        source={icons.shareProfileLink}
                        style={{height:50,width:50,borderRadius:25}}
                    />
                </View>
                <View style={{width:'80%',justifyContent:'center'}}>
                    <View>
                        <Text style={{color:'black'}}>Share profile link</Text>
                    </View>
                    <View>
                        <Text>Others can signup and contribute to this account</Text>
                    </View>
                    
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('Details')}>
                <View style={{height:80,width:'20%',justifyContent:'center'}}>
                    <Image
                        source={icons.shareProfileLink}
                        style={{height:50,width:50,borderRadius:25}}
                    />
                </View>
                <View style={{width:'80%',justifyContent:'center'}}>
                    <View>
                        <Text style={{color:'black'}}>Settings and Account Documents</Text>
                    </View>
                    <View>
                        <Text>View and change settings. Access monthly statements, trade confirms and tax docs</Text>
                    </View>
                    
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('Details')}>
                <View style={{height:80,width:'20%',justifyContent:'center'}}>
                    <Image
                        source={icons.deleteImg}
                        style={{height:50,width:50,borderRadius:25}}
                    />
                </View>
                <View style={{width:'80%',justifyContent:'center'}}>
                    <View>
                        <Text style={{color:'black'}}>Delete Account</Text>
                    </View>
                    <View>
                        <Text>Remove an account that is not in use</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}
export default BottomSheet;