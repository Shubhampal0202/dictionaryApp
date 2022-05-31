
import React, { Component } from 'react'
import './Dictionary.css';
import axios from "axios";


export default class Dictionary extends Component {
    constructor() {
        super();
        this.state = {
            word: "",
            info: { synonyms:''}
        }
    }
    handleChange = (e) => {
        this.setState({
            word: e.target.value
        })
    }
    handleSubmit = async () => {
        const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.state.word}`)
        console.log(res.data);
        const data = res.data;
        // console.log(data[0].word);
        // console.log(data[0].meanings[0].partOfSpeech);
        // console.log(data[0].meanings[0].definitions[0].definition);
        // console.log(data[0].meanings[0].synonyms[0]);
        const info = {
            word: data[0].word,
            partOfSpeech: data[0].meanings[0].partOfSpeech,
            definition: data[0].meanings[0].definitions[0].definition,
            synonyms:data[0].meanings[0].synonyms[0]

        }
        this.setState({
            info: { ...info },
            word:''
        })

    }

    render() {
        return (
            <>
                <div className='heading'>
                    <h1>Free Dictionary App</h1>
                </div>
                <div className='form'>
                    <input type="text" placeholder='Enter text' className='search' value={this.state.word} onChange={this.handleChange} />
                    <input type="submit" value="search" className='submit' onClick={this.handleSubmit} />
                </div>
                <div className="wordInfo">
                    <div className='word'>
                        <h1>Word Name :</h1>
                        <p>{this.state.info.word}</p>
                    </div>

                    <div className='speech'>
                        <h1>Parts of speech :</h1>
                        <p>{this.state.info.partOfSpeech}</p>
                    </div>
                    <div className='definition'>
                        <h1>Definition :</h1>
                        <p>{this.state.info.definition}</p>
                    </div>
                    <div className='synonyms'>
                        <h1>Synonyms :</h1>
                        {
                            this.state.info.synonyms === undefined ? <p>synonym is not available for this word</p> :
                             <p>{this.state.info.synonyms}</p>   
                        }
                   
                  </div>

                </div>
            </>
        )
    }
}
