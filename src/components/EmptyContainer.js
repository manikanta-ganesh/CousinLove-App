import React from 'react'
import {StyleSheet, Text} from 'react-native'
import {Container, Spinner} from 'native-base'

const EmptyContainer = () =>{
    return (
        <Container style = {styles.emptyContainer}>
            <Spinner/>
        </Container>
    )
}

export default EmptyContainer

const styles = StyleSheet.create({
    emptyContainer : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1b262c'
    }
})
