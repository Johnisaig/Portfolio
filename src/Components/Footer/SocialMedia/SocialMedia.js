import React, { Component } from 'react';
import { Icon, Tooltip } from 'antd';

class SocialMedia extends Component {
    render() {
        const Github = <span>Visit My Repository</span>;
        const Twitter = <span>Follow my Twitter</span>;
        const Google = <span>Google</span>;
        const Linkedin = <span>Connect to my Linkedin</span>;
        const Skype = <span>Connect to my Skype Account live:isaigmichael30</span>;
        const Instagram = <span>Connect to my Instagram</span>;
        const Facebook = <span>Connect to my Facebook Account</span>;

        return (
            <div className="SocialMedia">
                   <ul>
                       <li>
                            <Tooltip placement="top" title={Github}>
                                <a href="https://github.com/Johnisaig" target="blank"><Icon className="Icons" type="github" /></a>
                            </Tooltip>
                        </li>
                       <li>
                            <Tooltip placement="top" title={Twitter}>
                                <a href="https://twitter.com/login" target="blank"><Icon type="twitter" /></a>
                            </Tooltip>
                       </li>
                       <li>
                            <Tooltip placement="top" title={Google}>
                                <a href="https://www.google.com/" target="blank"><Icon type="google" /></a>
                            </Tooltip>
                       </li>
                       <li>
                            <Tooltip placement="top" title={Linkedin}>
                                <a href="https://www.linkedin.com/in/michael-isaig-3b1263164/" target="blank"><Icon type="linkedin" /></a>
                            </Tooltip>
                       </li>
                       <li>
                            <Tooltip placement="top" title={Skype}>
                                <a href="https://web.skype.com/" target="blank"><Icon type="skype" /></a>
                            </Tooltip>
                       </li>
                       <li>
                            <Tooltip placement="top" title={Instagram}>
                               <a href="https://www.instagram.com/kelisaig/" target="blank"><Icon type="instagram" /></a>
                            </Tooltip>
                      </li>
                       <li>
                            <Tooltip placement="top" title={Facebook}>
                                <a href="https://www.facebook.com/michael.b.isaig" target="blank"><Icon type="facebook" /></a>
                            </Tooltip>
                     </li>
                   </ul>
            </div>
        );
    }
}

export default SocialMedia;