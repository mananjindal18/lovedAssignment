import React from 'react';
import { View, Text, Button,useWindowDimensions } from 'react-native';
import Animated,{ useAnimatedGestureHandler,useSharedValue,useAnimatedStyle,withSpring } from 'react-native-reanimated';
import { PanGestureHandler} from 'react-native-gesture-handler';
const SPRING_CONFIG = {
    damping:80,
    overshootClamping:true,
    restDisplacementThreshold:0.1,
    restSpeedThreshold:0.1,
    stiffness:50
};
const App = () => {
    
    const dimensions = useWindowDimensions();
    const top = useSharedValue(
        dimensions.height
    );
    const mystyle = useAnimatedStyle(()=>{
        return {
            top:withSpring(top.value,SPRING_CONFIG)
        }
    });
    const gestureHandler = useAnimatedGestureHandler({
        onStart:(_,context)=>{
            console.log("Starting"),context;
            context.startX = top.value
        },
        onActive:(event,context)=>{
            console.log("Active");
            top.value = context.startX + event.translationY;
        },
        onEnd:(event)=>{
            console.log("On End");
            if(top.value>dimensions.height/2 + 200){
                top.value = dimensions.height;
            }
            else{
                top.value = dimensions.height/2;
            }
        }
    });  
    return (
        <>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Hello</Text>
                <Button title="Open Sheet" onPress={() => {
                    top.value = withSpring(
                        dimensions.height/2,
                        SPRING_CONFIG
                    );
                 }} />
            </View>
            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View 
                    style={[{
                        position:'absolute',
                        left:0,
                        right:0,
                        bottom:0,
                        backgroundColor:'grey',
                        borderTopLeftRadius:20,
                        borderTopRightRadius:20,
                        shadowColor:'#000',
                        shadowOffset:{
                            width:0,
                            height:2
                        },
                        shadowOpacity:0.25,
                        shadowRadius:3.84,
                        elevation:5,
                        padding:20,
                        justifyContent:'center',
                        alignItems:'center'
                    },mystyle]}
                >
                    <Text>Sheet</Text>

                </Animated.View>
            </PanGestureHandler>

        </>

    )
}

export default App;