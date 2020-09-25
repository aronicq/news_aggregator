import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
     return (
        <div>
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
            <Panel/>
        </div>
    );
}


class Panel extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            articles: [{"authors":"Will McCallum",
                        "content":"//google.com",
                        "date":"21 September 2020",
                        "preview":"Today, scientists sounded...",
                        "title":"The ice is disappearing, BUT a movement is emerging",
                        "id": 13},]
        }
        //
        // fetch("/news/api/get")
        // .then(res => {
        //     if (res.ok) {
        //         console.log("ok block ", res)
        //         return res.json();
        //     } else {
        //         throw new Error("request error occurred");
        //     }
        // })
        //
        // .then(
        //     (res) => {
        //         console.log("then block")
        //         this.state = {
        //             articles: res.articles,
        //         }
        //         console.log(this.state)
        //     }
        // )
        // .catch((error) => {
        //     console.log("error");
        // })
        // console.log(this.state)
    }

    componentDidMount() {
        axios.get("/news/api/get")//"http://0.0.0.0:81/news/api/get"
        .then(res => {
            console.log(res);
                this.setState({
                    articles: res.data.articles,
                })
            }
        )
    }

    render() {
        return(
            <div className="panel">
                {this.state.articles.map((article) => <NewsCell article={article} key={article.id}/>)}
            </div>
        )
    }
}


class NewsCell extends React.Component{
    render(){
        return(
            <div className="Cell">
                <div className="title"><a href={this.props.article.content}>{this.props.article.title}</a></div>
                <div className="author">{this.props.article.authors}</div>
                <div className="date">{this.props.article.date}</div>
                <div className="preview">{this.props.article.preview}</div>
            </div>
        )
    }
}


export default App;
