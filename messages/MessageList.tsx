import React from 'react';
import GradientText from "../components/GradientText";
import {ScrollView, StyleSheet, View} from "react-native";
import Message from "./Message";

export default function MessageList() {
    const messages= [
        {sender:'Kiki', message:'Tu es vraiment très belle !', date:"Aujourd'hui"},
        {sender:'Micha', message:"J'adore to style.", date:"Aujourd'hui"},
        {sender:'James', message:"Quand est ce qu'on se voit ?", date:'Hier'},
        {sender:'John', message:"C'était super !", date:'Hier'},
        {sender:'Ben', message:"On pourrait aller faire une promenade au parc, ce serait chouette !", date:'Hier'},
        {sender:'Toutou231', message:"Ce sera l'occasion de jouer à la balle", date:'2 j'},
        {sender:'BadDog4', message:'Oui quand tu veux !', date:'2 j'},
        {sender:'Samir', message:'Tu habites où?', date:'2 j'},
    ]
    return (
        <View>
            <GradientText text="Messages" style={styles.title}/>
            <ScrollView>
                {messages.map(({sender, date, message}, index)=>(
                    <Message sender={sender} date={date} message={message} key={index} />
                ))}
            </ScrollView>
        </View>

    );
}


const styles = StyleSheet.create({

    title: {
        marginTop:25,
        fontSize: 20,
        fontWeight: 'bold',
    },

});
