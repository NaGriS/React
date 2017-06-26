/**
 * Created by denis.raskin on 20-Jun-17.
 */

var my_news = [
    {
        author: 'Alexandr P',
        text: 'The coolest article,The coolest article,The coolest article,The coolest article,The coolest article,The coolest article,',
        fullText: 'Full text1'
    },
    {
        author: 'Denis R',
        text: 'The best article',
        fullText: 'Full text1'
    },
    {
        author: 'George C',
        text: 'The finest new column',
        fullText: 'Full text1'
    },
    {
        author: 'Ivan V',
        text: 'The coolest article,The coolest article,The coolest article,The coolest article,The coolest article,The coolest article, The coolest article,The coolest article,The coolest article,The coolest article,The coolest article,The coolest article,The coolest article,The coolest article,The coolest article,The coolest article,The coolest article,',
        fullText: 'Full text1'
    },
];

var Article = React.createClass({
    getInitialState: function () {
        return {
            visible: false
        };
    },
    readMoreClick: function () {
        this.setState({visible: true});
    },
    hideMoreClick: function () {
        this.setState({visible: false});
    },
    render: function () {
        var data=this.props.data,
            author = data.author,
            text = data.text,
            fullText = data.fullText,
            visible = this.state.visible;

        return (
            <div className="article" key="article">
                <p className="news-author"> {author}: </p>
                <p className="news-text"> {text}: </p>
                <a href="#"
                   onClick={this.readMoreClick}
                   className= {"news-readmore " + (visible ? "none" : "")}> More info... </a>
                <a  href="#"
                    onClick={this.hideMoreClick}
                    className= {"news-fulltext " + (!visible ? "none" : "")}>  {fullText} </a>
            </div>
        )
    }
});

var TestInput = React.createClass({
    getInitialState: function () {
        return {
            value: ""
        };
    },
    setInput: function (e) {
        e.preventDefault();
        this.setState({value: e.target.value})
    },
    alertInput: function (e) {
        e.preventDefault();
        alert(this.state.value);
    },
    render() {
        return (
            <div>
                <input onChange={this.setInput}
                       className="text-input"
                       value={this.state.value}
                       placeholder="Please enter the value:"/>
                <button onClick = {this.alertInput}
                        className="btn button-input"> Alert the button </button>
            </div>
        )
    }
});

var News = React.createClass({
    getInitialState: function () {
        return {
            likes: 0
        };
    },
    likeApply: function () {
        this.setState({likes: ++this.state.likes})
    },
    render: function () {
        var data = this.props.data,
            likes = this.state.likes,
            newsTemplate;

        if (data.length > 0) {
            newsTemplate = data.map(function(item, index) {
                return (
                    <div key={index}>
                        <Article data={item} />
                    </div>
                )
            });
        } else {
            newsTemplate = <p className="no-news">Unfortunately there are no news</p>
        }
        return (
            <div className="news">
                {newsTemplate}
                <strong className={data.length > 0 ? 'total-news':'none'}>
                    <div className="total-news-text">Total news: {data.length}!</div>
                </strong>
                <button onClick={this.likeApply} className="btn like-button">
                    <i className="fa fa-thumbs-o-up"></i>
                    <div className="like-button-text">{likes}</div></button>
            </div>
        )
    }
});

var App = React.createClass({
    render: function () {
        return (
            <div className="app">
                <h3> News </h3>
                <TestInput />
                <News data={my_news}/>
            </div>
        );
    }
});



ReactDOM.render(
    <App />,
    document.getElementById('root')
);