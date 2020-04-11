import React from "react";
import {Drawer, Avatar} from 'antd';
import "./RightDrawer.scss" ;
import {UserOutlined, ExportOutlined} from '@ant-design/icons';

class RightDrawer extends React.Component {
    state = {visible: false};
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <span>
                <Avatar icon={<UserOutlined/>} onClick={this.showDrawer} style={{left: "96%"}}/>
                <Drawer
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <div className="flow">
                        <strong>Déconnexion</strong>
                        <ExportOutlined style={{fontSize: "25px"}}/>
                    </div>
                    <div>
                        <Avatar size={80} style={{transform: " translateX(75%)", marginTop: "1rem"}}
                                icon={<UserOutlined/>}/>
                   </div>

                    <p style={{textAlign:"center"}}>
                           iskander
                    </p>
                    <p style={{textAlign:"center"}}>
                        M3allem
                    </p>
                </Drawer>
            </span>
        );
    }
}

export default RightDrawer;
