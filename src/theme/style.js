import { StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';


const Main = useSelector(x => x.color.Main);

export default GlobalStyle = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:Main,
    },
    text:{
        color:'black'
    },
    color:{
        backgroundColor:Main,
    
    }
})