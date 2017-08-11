import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import MessageBox from './../layout/MessageBox.js';
import { connect } from 'react-redux';
import { fetchNotesStart, fetchNotesStop, updateNotes } from './../note/Actions';

class GetNotesMain extends Component {
    handleFail(error) {
        MessageBox("Fetch Failed", "Reason : " + error, "close-square", {color: 'red'})
    }

    handleData(data) {
        this.props.updateNotes(data)
        this.props.onStopFetchingNotes()
        MessageBox("Senpai, notice me", "Notes Fetched from Server !", "check", { color: 'green' })
    }

    render() {
        MessageBox("Senpai, notice me", "Fetching Notes from remote server", "retweet", { color: 'blue' });
        this.props.onStartFetchingNotes()
        fetch(process.env.REACT_APP_API_URL + '/notes')
        .then(
            response => response.json(),
            error => this.handleFail(error)
        ).then(
            response => this.handleData(response.data),
            error => console.log("This can't fail")
        )
        return (
            <div></div>
        )
    };
}

const mapDispatchToProps = (dispatch) => ({
    onStartFetchingNotes: () => {
        dispatch(fetchNotesStart())
    },
    onStopFetchingNotes: () => {
        dispatch(fetchNotesStop())
    },
    updateNotes: (data) => {
        dispatch(updateNotes(data))
    }
 })

const GetNotes = connect(null, mapDispatchToProps)(GetNotesMain)

export default GetNotes;