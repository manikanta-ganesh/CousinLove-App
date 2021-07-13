import auth from "@react-native-firebase/auth"
import Snackbar from "react-native-snackbar"
import database from "@react-native-firebase/database"

export const signUp = (data) => async (dispatch) =>{

    console.log(data);
    const {name, instaUserName, bio, email, password, country, image} = data

    auth().createUserWithEmailAndPassword(email,password)
    .then((data)=>{
        console.log(data);
        console.log("User creation was success");

        database()
        .ref('/users/' + data.user.uid)
        .set({
            name,
            country,
            instaUserName,
            bio,
            image,
            uid: data.user.uid
        })
        .then(() => console.log("Data set Success"))
        Snackbar.show({
            text: 'account created',
            textColor: 'white',
            backgroundColor: '#1b262c'
        })
        
    })
    .catch((error)=>{
        console.error(error);
        Snackbar.show({
            text: "SignUp failed",
            textColor: "white",
            backgroundColor: "red"
        })
    })


}

export const signIn = (data) => async (dispatch) =>{

    console.log(data);

    const {email, password} = data;

    auth()
    .signInWithEmailAndPassword(email,password)
    .then(()=>{
        console.log('SignIn success');
        Snackbar.show({
            text: 'You are logged in',
            textColor: 'white',
            backgroundColor: '#1b262c'
        })
    })
    .catch((error) => {
        console.error(error);
        Snackbar.show({
            text: 'SignIn failed',
            textColor: 'white',
            backgroundColor: 'red'
        });
    })

}

export const signOut = () => async (dispatch) =>{
    auth()
    .signOut()
    .then(()=>{
        console.log('SignOut success')
        Snackbar.show({
            text: 'SignOut success',
            textColor: 'white',
            backgroundColor: '#1b262c'
        })
    })
    .catch((error) =>{
        console.log(error)
        Snackbar.show({
            text: 'SignOut failed',
            textColor: 'white',
            backgroundColor: 'red'
        })
    })
}