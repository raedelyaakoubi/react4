import React from "react";
class profile extends React.Component {
state = {
    currentDate: new Date(),
};
constructor(props) {
    super(props);
    console.log(this.props);
}
componentDidMount() {
setInterval(() => this.setState({ currentDate: new Date() }), 1000);
}
render() {
    return (
    <div class="profile-card">
        <div class="top-section">
        <i class="message fas fa-envelope"></i>
        <i class="notif fas fa-bell"></i>
        <div class="pic">
            <img src={this.props.p.imgSrc} alt="" />
        </div>
        <div class="name">{this.props.p.fullName}</div>
        <div class="tag">{this.props.p.profession}</div>
        </div>
        <div class="bottom-section">
        <div class="tag">{this.props.p.bio}</div>
        </div>
        <p>
        time :{" "}
        {this.state.currentDate.getHours() +
            ":" +
            this.state.currentDate.getMinutes() +
            ":" +
            this.state.currentDate.getSeconds()}
        </p>
    </div>
    );
}
}
export default profile;