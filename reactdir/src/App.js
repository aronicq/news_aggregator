import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
            <Panel/>
    </div>
  );
}


class Panel extends React.Component{

    constructor() {
        super();
        this.state = {
            articles: [{"authors":"Will McCallum",
                        "content":"",
                        "date":"21 September 2020",
                        "preview":"Today, scientists sounded...",
                        "title":"The ice is disappearing, BUT a movement is emerging",
                        "id": 13},]
        }

        fetch("/news/api/get")
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error("request error occurred");
            }
        })

        .then(
            (res) => {
                this.state = {
                    articles: res.articles,
                }
            }
        )
        .catch((error) => {
            console.log("error");
        })
    }

    componentDidMount() {
    // fetch("/news/api/get")
    //     .then(res => res.json())
    //     .then(
    //         (result) => {
    //             this.setState({
    //                 articles: result.articles,
    //             })
    //         }
    //     )
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
            <div className="cell">
                <div className="title">{this.props.article.title}</div>
                <div className="author">{this.props.article.authors}</div>
                <div className="date">{this.props.article.date}</div>
                <div className="preview">{this.props.article.preview}</div>
            </div>
        )
    }
}


export default App;
