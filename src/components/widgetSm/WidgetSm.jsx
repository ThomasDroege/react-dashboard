import "./widgetSm.css"
import {Visibility} from  '@material-ui/icons';
import React from "react";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
        <h3 className="widgetSmTitle">New Join Members</h3>
        <ul className="widgetSmList">
            <li className="widgetSmItem">
                <img src="https://www.thestatesman.com/wp-content/uploads/2017/08/1493458748-beauty-face-517.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Anna Keller</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                </button>
            </li>
            <li className="widgetSmItem">
                <img src="https://www.thestatesman.com/wp-content/uploads/2017/08/1493458748-beauty-face-517.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Anna Keller</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                </button>
            </li>
            <li className="widgetSmItem">
                <img src="https://www.thestatesman.com/wp-content/uploads/2017/08/1493458748-beauty-face-517.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Anna Keller</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                </button>
            </li>
            <li className="widgetSmItem">
                <img src="https://www.thestatesman.com/wp-content/uploads/2017/08/1493458748-beauty-face-517.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Anna Keller</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                </button>
            </li>
            <li className="widgetSmItem">
                <img src="https://www.thestatesman.com/wp-content/uploads/2017/08/1493458748-beauty-face-517.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Anna Keller</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}
