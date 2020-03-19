import React, { Component } from 'react'
import './Test.css'

class Test extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            description: ''
        }
        this.onClick = this.onClick.bind(this)
        this.handleTitleData = this.handleTitleData.bind(this)
        this.handleDescriptionData = this.handleDescriptionData.bind(this)
    }

    onClick = e => {
        e.preventDefault();
        console.log("User Title: " + this.state.title);
        console.log("Post description: " + this.state.description)
    }

    handleTitleData = e => {
        this.setState({ title: e.target.title })
    }

    handleDescriptionData = e => {
        this.setState({ description: e.target.description })
    }



    render() {
        return (
            <div className="testForm">
                <form className="test" onSubmit={this.onClick}>
                    <h3>Fill out this form to create your posting!</h3>
                    <label>
                        Title:
                        <input type="text" onChange={this.handleTitleData}></input>
                    </label>
                    <label>
                        Description:
                        <input type="text" onChange={this.handleDescriptionData}></input>
                    </label>
                    <label for="category">Select a Category:</label>
                    <select id="category" name="category">
                        <option value="">:)</option>
                        <option value="cars">Cars</option>
                        <option value="auto">Auto</option>
                        <option value="homes">Homes</option>
                    </select>
                    <input type="text" placeholder="image"></input>
                    <input type="submit" value="submit"></input>
                </form>
            </div >
        )
    }
}
export default Test