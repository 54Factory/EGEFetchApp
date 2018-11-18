import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import appActions from "../../redux/app/actions";
import TopbarUser from "./topbarUser";
import TopbarWrapper from "./topbar.style";
import themes from "../../settings/themes";
import { themeConfig } from "../../settings";

const { Header } = Layout;
const { toggleCollapsed } = appActions;
const customizedTheme = themes[themeConfig.theme];

const mapState = (state) => ({
  auth: state.firebase.auth,
  user: state.firebase.profile
})


class Topbar extends Component {

  
  render() {
    const { toggleCollapsed } = this.props;
    console.log('====================================');
    console.log(this.state);
    console.log('====================================');
    const collapsed = this.props.collapsed && !this.props.openDrawer;
    const styling = {
      background: customizedTheme.backgroundColor,
      position: "fixed",
      width: "100%",
      height: 70
    };
    return (
      <TopbarWrapper>
        <Header
          style={styling}
          className={
            collapsed ? "isomorphicTopbar collapsed" : "isomorphicTopbar"
          }
        >
          <div className="isoLeft">
            <button
              className={
                collapsed ? "triggerBtn menuCollapsed" : "triggerBtn menuOpen"
              }
              style={{ color: customizedTheme.textColor }}
              onClick={toggleCollapsed}
            />
          </div>

          <ul className="isoRight">
            <li
              onClick={() => this.setState({ selectedItem: "user" })}
              className="isoUser"
            >
              <TopbarUser />
            </li>
          </ul>
        </Header>
      </TopbarWrapper>
    );
  }
}

export default connect(mapState, { toggleCollapsed })(Topbar);
