import {View,Text,Button} from 'react-native'

const HomeScreen = (props)=> {
    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:30}}>
                Home Screen Drawer
            </Text>
            <View>
                <Button
                    title='Detalhes'
                    onPress={()=>props.navigation.navigate('DetailsScreen')
                    } />
            </View>
        </View>
    )
}

export default HomeScreen