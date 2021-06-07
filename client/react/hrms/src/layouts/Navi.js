import React from "react";
import { Menu, Button, Container, Input, Icon } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>
            <Menu size="small" inverted fixed="top">
                <Container>
                    <Menu.Item>
                        <Button icon labelPosition='left'>
                            <Icon name='home' />
                                Ana sayfa
                            </Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button icon labelPosition='left'>
                            <Icon name='list' />
                                İş ilanları
                            </Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Input className='icon' icon='search' placeholder='Ara...' style={{ minWidth: "20em" }} size="large" />
                    </Menu.Item>
                    <Menu.Menu position="right">
                        <Menu.Item>
                            <Button.Group>
                                <Button>Bize katıl</Button>
                                <Button.Or />
                                <Button positive>Oturum aç</Button>
                            </Button.Group>
                        </Menu.Item>

                        <Menu.Item>
                            <Button icon labelPosition='left'>
                                <Icon name='user' />
                                Profil
                            </Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    );
}
